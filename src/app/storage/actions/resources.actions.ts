import { createAction, props } from '@ngrx/store';
import {ResourcesCMS} from '../../interfaces/resources.interface';

export const loadResourcesSuccess = createAction(
  '[ResourcesCMS] Load list Images',
  props<{ payload: ResourcesCMS[] }>()
);
