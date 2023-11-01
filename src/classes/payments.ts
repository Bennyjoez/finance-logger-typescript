export class Payment {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
}