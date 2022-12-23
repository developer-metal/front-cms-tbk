import { Component, OnInit } from '@angular/core';
import { TabsPage} from '../../app/tabs/tabs.page';
import { ResourcesProviderService } from '../providers/resources/resources-provider.service';
import { Observable, from, of} from 'rxjs';
import { ResourcesCMS } from '../../app/interfaces/resources.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  public data$: Observable<ResourcesCMS[]> = new Observable<ResourcesCMS[]>;
  public slideOpts: any = {
    initialSlide: 0,
    direction: "vertical",
    pagination: false,
    speed: 400
  };

  constructor(private documentService: ResourcesProviderService) {
  }

  ngOnInit(): void {
      this.getData();
  }

  getData(): void {
    const cbSuccess = (response: any) => {
      response.subscribe((data: any) => { this.data$ = of(data.catOne) });
    };
    const cbFailure = (error: any) => {
      console.log('error  ',error);
    };
    this.documentService.getDocuments()
      .subscribe({next: cbSuccess, error: cbFailure});
  }

  darkAction(data:any): void {
    if (data.detail.checked) {
      console.log(data);
      document.body.setAttribute('color-theme','dark');
    } else {
      document.body.setAttribute('color-theme','light');
    }
  }
}
