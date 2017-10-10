import { Action } from './types'

export interface ActionCreator0 {
  (): Action;
  type: string;
}

export interface ActionCreator1<P extends {}, A1> {
  (a1: A1): Action<P>;
  type: string;
}

export type AnyActionCreator<P extends {}> =
    ActionCreator0 |
    ActionCreator1<P, any>;

export function createActionCreator(type: string): ActionCreator0;

export function createActionCreator<P extends {}, A>(
    type: string,
    makePayload: (arg: A) => P,
): ActionCreator1<P, A>;

export function createActionCreator(
  type: any,
  makePayload: any = () => {}
): any {
  const actionCreator = (arg: any) => ({
    type,
    ...makePayload(arg),
  });
  return Object.assign(actionCreator, { type });
}

export function isAction<P>(
    creator: AnyActionCreator<P>,
    action: Action<any>,
): action is Action<P> {
  return action.type === creator.type;
}
