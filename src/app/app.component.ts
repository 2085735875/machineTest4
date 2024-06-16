import { Component, OnInit } from '@angular/core';
import { mobileProducts } from './shared/conts/mobile';
import { Imobile } from './shared/model/mobileInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'machineTest4';
  isNotAvaible !: boolean;
  mobileArr : Array<Imobile> = mobileProducts;
  ngOnInit(): void {
    this.isNotAvaible = false
  }
}
