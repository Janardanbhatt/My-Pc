import { action, computed, observable } from 'mobx';
import { fromPromise, IPromiseBasedObservable, FULFILLED, PENDING, REJECTED } from 'mobx-utils';

export type IBaseAsyncComputed<T> = {
  refresh(): void;
  case<U>(handlers: { pending?: () => U; fulfilled?: (t: T) => U; rejected?: (e: any) => U }): U;
};

export interface IPendingAsyncComputed<T> extends IBaseAsyncComputed<T> {
  readonly state: 'pending';
  readonly pending: true;
  readonly rejected: false;
  readonly fulfilled: false;
}

export interface IRejectedAsyncComputed<T> extends IBaseAsyncComputed<T> {
  readonly state: 'rejected';
  readonly pending: false;
  readonly rejected: true;
  readonly fulfilled: false;
  readonly error: any;
}

export interface IFulfilledAsyncComputed<T> extends IBaseAsyncComputed<T> {
  readonly state: 'fulfilled';
  readonly pending: false;
  readonly rejected: false;
  readonly fulfilled: true;
  readonly value: T;
}

export type IAsyncComputed<T> = IPendingAsyncComputed<T> | IFulfilledAsyncComputed<T> | IRejectedAsyncComputed<T>;

class AsyncComputed<T> {
  @observable private refreshCallCount = 0;

  @computed
  get state() {
    return this._internalObservable.state;
  }

  constructor(private readonly computeFn: () => PromiseLike<T>) {}

  @computed
  get pending() {
    return this.state === PENDING;
  }

  @computed
  get rejected() {
    return this.state === REJECTED;
  }

  @computed
  get fulfilled() {
    return this.state === FULFILLED;
  }

  @computed
  get value() {
    if (this._internalObservable.state === FULFILLED) {
      return this._internalObservable.value;
    } else {
      return undefined;
    }
  }

  @computed
  get error() {
    if (this._internalObservable.state === REJECTED) {
      return this._internalObservable.value;
    } else {
      return undefined;
    }
  }

  @action.bound
  refresh() {
    this.refreshCallCount++;
  }

  @computed
  get case() {
    return this._internalObservable.case.bind(this._internalObservable);
  }

  @computed
  private get _internalObservable(): IPromiseBasedObservable<T> {
    this.refreshCallCount;
    const observablePromise = fromPromise(this.computeFn());
    // handle rejections etc. because they'll otherwise bubble up and crash node.js
    (observablePromise as any).catch();
    return observablePromise;
  }
}

export default function asyncComputed<T>(computeFn: () => PromiseLike<T>) {
  return new AsyncComputed(computeFn) as IAsyncComputed<T>;
}
