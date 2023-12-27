import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-catlist',
  templateUrl: './product-catlist.component.html',
  styleUrls: ['./product-catlist.component.css']
})
export class ProductCatlistComponent {

  product? :IProduct[];
  id:any;
  constructor(private dataservice : DataService,private activatedRouter:ActivatedRoute,private router :Router)
  {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.dataservice.getCategoryById(this.id).subscribe((response :IProduct[])=>{
      this.product=response
    })
  }
  onButtonClick(product: IProduct) {
    this.router.navigate(['products-details',product.productId])
    }

}
