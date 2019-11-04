import { Injectable } from '@angular/core';

export type InternalStateType = {
  [key: string]: any;
};

@Injectable()
export class AppState {
  constructor() {}
  private prefix = 'mpr_game';
  public _state = {};

  // public shopId = 1402;

  private getKey(prop: string) {
    return this.prefix + prop;
  }
  public get(prop?: any) {
    const state = this._state;
    const key = this.getKey(prop);
    let value = state.hasOwnProperty(key) ? state[key] : null;
    if (!value) {
      value = sessionStorage.getItem(key);
      if (value && value.startsWith('{')) {
        try {
          value = JSON.parse(value);
        } catch (e) {
          console.error(e);
        }
      }
    }
    return value;
  }

  public set(prop: string, value: any) {
    // internally mutate our state
    const key = this.getKey(prop);
    this._state[prop] = value;
    if (!value) {
      sessionStorage.removeItem(key);
    }
    if (value && typeof value === 'object') {
      sessionStorage.setItem(key, JSON.stringify(value));
    } else {
      sessionStorage.setItem(key, value);
    }
  }

  public clear(prefix: string) {
    for (let name in this._state) {
      if (name.startsWith(prefix)) {
        this._state[name] = undefined;
      }
    }
  }

  private _clone(object: InternalStateType) {
    // simple object clone
    return JSON.parse(JSON.stringify(object));
  }
}
