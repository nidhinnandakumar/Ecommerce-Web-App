import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/category.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories?: ICategory[];

  constructor(private dataService:DataService,private router:Router){
    this.dataService.getCategories().subscribe((response:ICategory[])=>
    {
      this.categories=response
    })
    

  }

  onButtonClick( id :number) {
    this.router.navigate(['category-detail',id])
    }
}
