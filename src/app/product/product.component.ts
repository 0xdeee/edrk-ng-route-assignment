import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productList: any[];
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.productList = this.dataService.getProductList();
  }
  navToProductDetails(product): void {
    this.router.navigate(['/products', product.name]);
  }
}
