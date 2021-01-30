import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  productList: any[];
  constructor() {
    this.productList = [
      {
        name: 'Oneplus 6T',
        description: 'oneplus 6T 4GB/64GB',
        price: 25000,
        productImg:
          'https://johnlewis.scene7.com/is/image/JohnLewis/237768479?$rsp-pdp-port-1440$',
      },
      {
        name: 'Oneplus 7',
        description: 'oneplus 7 4GB/64GB',
        price: 30000,
        productImg:
          'https://johnlewis.scene7.com/is/image/JohnLewis/237768479?$rsp-pdp-port-1440$',
      },
      {
        name: 'Oneplus 8',
        description: 'oneplus 8 4GB/64GB',
        price: 35000,
        productImg:
          'https://johnlewis.scene7.com/is/image/JohnLewis/237768479?$rsp-pdp-port-1440$',
      },
      {
        name: 'Oneplus 9',
        description: 'oneplus 9 4GB/64GB',
        price: 40000,
        productImg:
          'https://priceinsouthafrica.com/wp-content/uploads/2020/10/OnePlus-9-Price-in-South-Africa.jpg',
      },
    ];
  }
  getProductList(): any[] {
    return this.productList;
  }
}
