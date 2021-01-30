import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}
  productName: any;
  product: any;
  ngOnInit(): void {
    this.productName = this.activatedRoute.snapshot.paramMap.get('name');
    this.product = this.dataService.getProductList().find((p) => {
      return p.name === this.productName;
    });
  }
  goBack(): void {
    this.router.navigate(['/products']);
  }
}
