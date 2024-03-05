import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  allBrands:any
  brandDetails:any
  isVisible:boolean=false
  constructor(private _BrandsService:BrandsService){}
  ngOnInit(): void {
    
    this._BrandsService.getAllBrands().subscribe({
      next:data=>{
        this.allBrands=data.data
        console.log(this.allBrands);
      },
      error:err=>{
        console.log(err);
      }
    })
  }

  getSpecific(id:string|null){
    this.isVisible=true
    this._BrandsService.getSpecificBrand(id).subscribe({
      next:data=>{
        this.brandDetails=data.data
        console.log(this.brandDetails);

      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
  stop(event:any):void{
    event.stopPropagation()
  }
}
