import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import { UserService } from './user.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth:AuthService,private userService:UserService) { }
  canActivate(){

    return this.auth.user$
    .switchMap(user=>this.userService.get(user.uid))
    .map(appUser=>{
      console.log("i am here",appUser);
      return appUser.isAdmin});
  }

}
