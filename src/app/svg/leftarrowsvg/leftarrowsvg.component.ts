import { Component } from '@angular/core';

@Component({
  selector: 'app-leftarrowsvg',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35 25"
      aria-hidden="true"
      style="fill: currentColor; stroke: currentColor;"
    >
      <polygon
        points="35 12.001 2.914 12.001 8.208 6.706 7.501 5.999 1 12.501 7.5 19.001 8.207 18.294 2.914 13.001 35 13.001 35 12.001"
      ></polygon>
    </svg>
  `,
})
export class LeftArrowSvgComponent {}
