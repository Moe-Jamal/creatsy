import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-download-svg',
  imports: [],
  templateUrl: './download-svg.component.html',
  styleUrl: './download-svg.component.css',
})
export class DownloadSvgComponent {
  @Input() svgColor: string = 'fill-main-color';
}
