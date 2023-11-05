import { Color, colors } from './color';

export class Turn {
    
  private rest: number;

  private divider!: number;

  constructor(divider: number) {
    this.rest = 0;
    this.divider = divider;
  }

  take(): Color {
    return colors[this.rest];
  }

  reset(): void {
    this.rest = 0;
  }

  change(): void {
    this.rest = (this.rest + 1) % this.divider;
  }
}
