import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavController } from '@ionic/angular';

import { LoginService } from '../../providers/login/login.service';

import { InspectFieldService } from '../../service/inspectField/inspect-field.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	user = {
		password:"",
		username:""
	}
  constructor(public loginService: LoginService, public inspectField: InspectFieldService, private router: Router) { 

    }

  ngOnInit() {
  }

 login(){
	 
    if(this.inspectField.notNullValueLogin(this.user)){
		return;
	}
    this.loginService.login(this.user)
      .subscribe(data => {
        console.log(data);
        if(data.status >= 200 && data.status < 300){
        //this.router.navigateByUrl('/dashboard');
        //this.router.navigateByUrl('/tabs');
	  	}
        this.inspectField.presentAlert(data.message,"OK para continuar");
        
        },error => {
        this.inspectField.presentAlert("Error de conexion","Intente mas tarde");
          console.log(error);
        });
		
  }


}
