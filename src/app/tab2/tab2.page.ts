import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public slideOpts: any = {
    initialSlide: 0,
    direction: "vertical",
    speed: 400
  };
  constructor() {}

}
