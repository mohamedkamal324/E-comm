import { Component, OnInit } from '@angular/core';
import { EcommDataService } from '../ecomm-data.service';
import { Category } from '../product';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  allCategories:any
  specificCategory:any
  isVisible:boolean=false
  constructor(private _EcommDataService:EcommDataService){}
  ngOnInit(): void {
    this._EcommDataService.getAllCategories().subscribe({
      next:data=>{
        console.log(data.data);
        this.allCategories=data.data
      }
    })
    
  }
  catDetails(id:string):void{
    this.isVisible=true
    this._EcommDataService.getCategoryDetails(id).subscribe({
      next:data=>{
        console.log(data.data);
        this.specificCategory=data.data
      }
    })
  }


  stop(event:any){
    event.stopPropagation()
  }
}
