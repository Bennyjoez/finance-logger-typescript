export class Payment {
  constructor(
    client: string,
    private details: string,
    public amount: number
  ) {}
}