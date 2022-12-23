import { Component } from '@angular/core';
import { Observable, from, of} from 'rxjs';
import { ResourcesCMS } from '../../app/interfaces/resources.interface';
import { ResourcesProviderService } from '../providers/resources/resources-provider.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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
      response.subscribe((data: any) => { this.data$ = of(data.catTrhe) });
    };
    const cbFailure = (error: any) => {
      console.log('error  ',error);
    };
    this.documentService.getDocuments()
      .subscribe({next: cbSuccess, error: cbFailure});
  }

}
