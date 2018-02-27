import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
declare var Excel;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth:AuthService,router:Router){
    auth.user$.subscribe(user=>{
      if(user){
        let returnUrl=localStorage.getItem("returnUrl");
        router.navigateByUrl(returnUrl);
      }
    })
  }
  

}
