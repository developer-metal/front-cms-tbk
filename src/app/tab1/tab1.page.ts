import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageInterface } from '../interfaces/image-interface';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit{

  public imageList: Array<ImageInterface> = [];

  public slideOpts: any = {
    initialSlide: 0,
    direction: "vertical",
    speed: 400
  };
  constructor(private imageService: ImageService) {
  }

  ngOnInit(): void {
    this.getImageAction();
  }
  

  darkAction(data:any): void {
    if (data.detail.checked) {
      console.log(data);
      document.body.setAttribute('color-theme','dark');
    } else {
      document.body.setAttribute('color-theme','light');
    }
  }

  getImageAction(): void {
    this.imageService.getImages().subscribe((data)=> {
       console.log(data);
       this.imageList = data;
    });
  }
  
}
