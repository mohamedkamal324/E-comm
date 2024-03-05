import { CartService } from './../cart.service';
import { AuthService } from './../auth.service';
import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navblank',
  templateUrl: './navblank.component.html',
  styleUrls: ['./navblank.component.scss']
})

export class NavblankComponent implements OnInit {
  

  eyeCurrentPass:boolean = true
  eyeNewPass:boolean = true
  eyerePass:boolean = true
  userName:any
  cartNum:number=0
  wishNum:number=0
  setting:boolean=false
  showsetting:boolean=false
  nameSettingFlag:boolean=false
  passSettingFlag:boolean=false
  phoneSettingFlag:boolean=false
  emailSettingFlag:boolean=false
  isLoading:boolean=false
  msgError:string =''

  toggleEyeCurrentPass(){
    this.eyeCurrentPass = !this.eyeCurrentPass
  }
  toggleEyeNewPass(){
    this.eyeNewPass = !this.eyeNewPass
  }
  toggleEyerePass(){
    this.eyerePass = !this.eyerePass
  }

closeAllSetting():void
{
  this.showsetting=false
  this.nameSettingFlag=false;
  this.passSettingFlag=false;
  this.phoneSettingFlag=false;
  this.emailSettingFlag=false;
  this.setting =false
}

stop(event:any):void
{
  event.stopPropagation()
}

  
  constructor(private  _ToastrService:ToastrService,private _AuthService:AuthService,private _CartService:CartService,private _Renderer2:Renderer2,private _WishlistService:WishlistService){}




ngOnInit(): void {
  this._CartService.cartNumber.subscribe({
    next:data=>{
      this.cartNum=data
      
    }
  })
  this._CartService.getUserCart().subscribe({
    next:data=>{
      this.cartNum = data.numOfCartItems
    }
  })
  this._WishlistService.listNum.subscribe({
    next:data=>{
      this._WishlistService.getUserWishList().subscribe({
        next:data=>{
          this.wishNum = data.count
        }
      })
    }
  })
}
  logOutUser():void{
    this._AuthService.logOut()
  }
  
}

