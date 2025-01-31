import { Component } from '@angular/core';

@Component({
  selector: 'app-heartsvg',
  standalone: true,
  template: `
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      style="fill: transparent; stroke: currentColor;"
      xml:space="preserve"
      aria-hidden="true"
    >
      <path
        class="stroke-[1] stroke-round stroke-linejoin-round"
        d="M20.8,12.4l-1.1,1.1L12,21.2l-7.8-7.8l-1.1-1.1C1,10.2,1,6.8,3.2,4.6c2.2-2.1,5.6-2.1,7.8,0L12,5.7l1.1-1.1
        c2.2-2.1,5.6-2.1,7.8,0C23,6.8,23,10.2,20.8,12.4z"
      ></path>
    </svg>
  `,
})
export class HeartsvgComponent {}
