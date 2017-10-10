export type Action<P extends {} = {}> = { type: string } & P;

export interface Dispatch<S, A extends Action = Action> {
  <_A extends A>(action: _A): _A
}

export interface Unsubscribe {
  (): void
}
export interface Store<S, A extends Action = Action> {
  getState(): S
  dispatch: Dispatch<S, A>
  subscribe(listener: () => void): Unsubscribe
}

export interface Reducer<S, A extends Action> {
  (s: S, a: A): S;
}

export interface ComposableStoreCreator<S, A extends Action> {
  (reducer: Reducer<S, A>, preloadedState?: S): Store<S, A>
}

export interface StoreEnhancer<S, A extends Action> {
  (next: ComposableStoreCreator<S, A>): ComposableStoreCreator<S, A>
}

// Additional utilities
// - reduce (composeReducer), on
// - runEffects, on
