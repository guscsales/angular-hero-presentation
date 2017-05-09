import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  public static set(name: string, data: any){
    localStorage.setItem(name, JSON.stringify(data));
  }

  public static get(name: string){
    return JSON.parse(localStorage.getItem(name)) || [];
  }

  public static remove(name: string){
    localStorage.removeItem(name);
  }

  public static clear(){
    localStorage.clear();
  }

}
