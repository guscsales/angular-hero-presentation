import { Injectable } from '@angular/core';

import { ApiService } from '../../services/api/api.service';

import 'jquery';


@Injectable()
export class DataService {
  public static defaults: DataServiceDefaultValuesModel = {
    lengthTypes: [5, 10, 30, 50, 100],
    debounce: 50
  };

  constructor(
    private apiService: ApiService
  ){}

  get(uri: string, data: DataServiceModel): Promise<any>{
    return this.apiService.get(uri, data);
  }

  private interval = 0;
  debounce(callback: any){
    clearInterval(this.interval);

    this.interval = setTimeout(callback, DataService.defaults.debounce);
  }

  getPagination(pagination: DataServicePaginationModel): number[]{
    var pages = Math.ceil(pagination.total / pagination.limit),
        pagesArr = [];

    for(var i = 1; i <= pages; i++)
      pagesArr.push(i);

    return pagesArr;
  }

}

export class DataServiceModel {
  defaults: DataServiceDefaultValuesModel;
  columns: DataServiceColumnModel[];
  order: DataServiceSortModel;
  page: number;
  limit: number;
  search: string;
  hasActions: boolean;
}

export class DataServiceColumnModel {
  key: string;
  name: string;
  searchable: boolean;
  sortable: boolean;
}

export class DataServiceSortModel {
  column: number;
  dir: string;
}

export class DataServiceDefaultValuesModel {
  lengthTypes: number[];
  debounce: number;
}

export class DataServicePaginationModel{
  limit: number;
  total: number;
}