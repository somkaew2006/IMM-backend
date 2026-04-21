import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { MasterDocumentNumber } from '../master-document-number/entities/master-document-number.entity';

@Injectable()
export class SequenceService {
  constructor(private dataSource: DataSource) {}

  /**
   * Generates a document number based on the configuration in master_document_number table.
   * Format: PREFIX + YYYY + MM + Padded Running Number
   * 
   * @param docType The document type identifier (e.g., 'BOOKING', 'QUOTATION')
   * @returns Generated document number string
   */
  async generateNextNumber(docType: string): Promise<string> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // 1. Fetch the configuration with a pessimistic write lock to prevent race conditions
      const sequence = await queryRunner.manager.findOne(MasterDocumentNumber, {
        where: { docType },
        lock: { mode: 'pessimistic_write' },
      });

      if (!sequence) {
        throw new NotFoundException(`Sequence configuration for '${docType}' not found.`);
      }

      // 2. Get current system month and year
      const now = new Date();
      const currentYearStr = now.getFullYear().toString();
      const currentMonthStr = (now.getMonth() + 1).toString().padStart(2, '0');

      // 3. Determine if we need to reset the running number (new month/year)
      if (sequence.currentYear !== currentYearStr || sequence.currentMonth !== currentMonthStr) {
        sequence.currentYear = currentYearStr;
        sequence.currentMonth = currentMonthStr;
        sequence.currentNumber = 1;
      } else {
        sequence.currentNumber += 1;
      }

      // 4. Update the sequence in database
      await queryRunner.manager.save(MasterDocumentNumber, sequence);
      await queryRunner.commitTransaction();

      // 5. Format and return the result
      const paddedNum = sequence.currentNumber.toString().padStart(sequence.runningLength, '0');
      return `${sequence.prefix}${sequence.currentYear}${sequence.currentMonth}${paddedNum}`;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }
}
