import { Component, Input,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExploreContainerComponent {

  @Input() name?: string;

}
