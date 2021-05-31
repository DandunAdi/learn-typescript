export class Invoice {
  // client: string;
  // details: string;
  // amount: number;

  constructor(
    public client: string,
    private details: string,
    readonly amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
