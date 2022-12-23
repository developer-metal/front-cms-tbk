import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as ResourcesCMS from './reducer/resources.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(ResourcesCMS.ResourcessFeatureKey, ResourcesCMS.reducer),
    StoreModule.forRoot(ResourcesCMS.reducer)
  ]
})
export class StorageModule { }
