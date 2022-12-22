import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  public slideOpts: any = {
    initialSlide: 0,
    speed: 400
  };
  constructor() {}

  darkAction(data:any): void {
    if (data.detail.checked) {
      console.log(data);
      document.body.setAttribute('color-theme','dark');
    } else {
      document.body.setAttribute('color-theme','light');
    }
  }
}
