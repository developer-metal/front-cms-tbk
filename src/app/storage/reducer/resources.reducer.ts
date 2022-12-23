import { Action, createReducer, on } from '@ngrx/store';
import { loadResourcesSuccess } from '../actions/resources.actions';
import {ResourcesCMS} from '../../interfaces/resources.interface';

export const ResourcessFeatureKey = 'Resourcess';

export interface State {
  readonly payload: ResourcesCMS[];
};

export const initialState: State = {
    payload: []
};

const getResourcessReducer = createReducer(
  initialState,
  on(loadResourcesSuccess, (state: any , action: any) => {
    return {
        ...state, 
        payload: action.payload
    };
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return getResourcessReducer(state, action);
}