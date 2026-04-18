export class CreateAccountingDto {
  description: string;
  amount: number;
  type: 'DEBIT' | 'CREDIT';
}
