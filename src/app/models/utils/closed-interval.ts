export class ClosedInterval {
    
  private minimum: number;

  private maximum: number;

  constructor(minimum: number, maximum: number) {
    this.minimum = minimum;
    this.maximum = maximum;
  }

  isIncluded(value: number): boolean {
    return this.minimum <= value && value <= this.maximum;
  }
}
