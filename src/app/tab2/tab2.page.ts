import { Component, OnInit } from '@angular/core';
import { ResourcesProviderService } from '../providers/resources/resources-provider.service';
import { Observable, from, of} from 'rxjs';
import { ResourcesCMS } from '../../app/interfaces/resources.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public data$: Observable<ResourcesCMS[]> = new Observable<ResourcesCMS[]>;
  public slideOpts: any = {
    initialSlide: 0,
    direction: "vertical",
    pagination: false,
    speed: 400
  };
  constructor(private documentService: ResourcesProviderService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const cbSuccess = (response: any) => {
      response.subscribe((data: any) => { this.data$ = of(data.catTwo) });
    };
    const cbFailure = (error: any) => {
      console.log('error  ',error);
    };
    this.documentService.getDocuments()
      .subscribe({next: cbSuccess, error: cbFailure});
  }
}
