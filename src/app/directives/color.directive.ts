import { Directive, ElementRef, Input } from '@angular/core';
import { Tier } from '@codefirst-io/team-builder/src/lib/models';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @Input() tier: Tier | undefined;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    if (this.tier === Tier.LOW) {
      this.el.nativeElement.style.color = 'red';
    } else if (this.tier === Tier.MID) {
      this.el.nativeElement.style.color = 'rgb(182,113,41)';
    } else {
      this.el.nativeElement.style.color = 'green';
    }
  }
}
