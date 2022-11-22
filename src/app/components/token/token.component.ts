import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-token',
  template: `<div #color></div>`,
  styleUrls: ['./token.component.css'],
})
export class TokenComponent {
  
  @ViewChild('color') color!: ElementRef;
  
  private colorOfBox!: string;

  constructor(private readonly renderer: Renderer2) {}

  setColor(color: Color): void {
    if (color === Color.OS) {
      this.addClass(color, 'xs');
    } else {
      this.addClass(color, 'os');
    }
  }

  private addClass(color: Color, colorRemoved: string): void {
    let color_: any = this.color.nativeElement;
    this.colorOfBox = color.toString().toLowerCase();
    this.renderer.removeClass(color_, colorRemoved);
    this.renderer.addClass(color_, 'color');
    this.renderer.addClass(color_, this.colorOfBox);
  }

  clear() {
    let color: any = this.color.nativeElement;
    this.renderer.removeClass(color, this.colorOfBox);
    this.renderer.removeClass(color, 'color');
  }
}
