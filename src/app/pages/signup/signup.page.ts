import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../providers/signup/signup.service';
import { InspectFieldService } from '../../service/inspectField/inspect-field.service';
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
	user = {
		username:"",
		name: "",
		lastname: "",
		ci: "",
		email: "",
		password: "",
		confirPassword: ""
	}

  constructor(public http: SignupService, public inspectField: InspectFieldService, public router: Router) { }

  ngOnInit() {
  }

  signup(){
  	 if(this.inspectField.notNullValueSignup(this.user)){
		return;
	}

    this.http.signup(this.user)
      .subscribe(data => {
        console.log(data);
        if(data.status >= 200 && data.status < 300){
        this.router.navigateByUrl('/dashboard');
        //this.router.navigateByUrl('/tabs');
	  	}
        this.inspectField.presentAlert(data.message,"OK para continuar");
        
        },error => {
        this.inspectField.presentAlert("Error de conexion","Intente mas tarde");
          console.log(error);
        });
      
  }

}
