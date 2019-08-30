import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

 /*  @ViewChild('CdkVirtualScrollViewport', CdkFixedSizeVirtualScroll) viewport: CdkVirtualScrollViewport; */
  personas = Array(500).fill(0);

  constructor() { }

  ngOnInit() {
    console.log(this.personas);
  }
  irFinal() {

  }
}
