import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  addItem(key: string, value: any) {
    if (value && typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }

  getItem<T>(key: string): T {
    let value: string = localStorage.getItem(key);

    if (value && value != "undefined" && value != "null") {
      return JSON.parse(value);
    }

    return null;
  }

}
