import { Component } from '@angular/core';

@Component({
  selector: 'app-rightarrowsvg',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-10 0 35 25"
      aria-hidden="true"
      style="fill: currentColor; stroke: currentColor;"
    >
      <polygon
        points="17.5 5.999 16.793 6.706 22.086 11.999 -10 11.999 -10 12.999 22.086 12.999 16.792 18.294 17.499 19.001 24 12.499 17.5 5.999"
      ></polygon>
    </svg>
  `,
})
export class RightArrowSvgComponent {}
