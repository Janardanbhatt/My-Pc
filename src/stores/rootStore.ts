import { inject } from 'mobx-react';
import { TypedInject } from '../types/utility';
import routerStore from './routerStore';
import { MainStore } from './mainStore';

export const defaultStores = {
  mainStore: new MainStore(routerStore),
  routerStore
};

export type Stores = typeof defaultStores;

export const typedInject = inject as TypedInject<Stores>;
