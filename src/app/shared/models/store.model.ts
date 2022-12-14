import { ActionReducer } from '@ngrx/store';

// tslint:disable-next-line: no-empty-interface
export interface LazyModules {
}

// tslint:disable-next-line: no-empty-interface
export interface Shared {
}

export interface State extends LazyModules {
  shared: Shared;
}

export interface Reducers {
  shared: ActionReducer<Shared>;
}
