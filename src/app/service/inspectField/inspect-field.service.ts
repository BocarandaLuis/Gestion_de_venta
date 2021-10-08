import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class InspectFieldService {

  constructor(public Alert: AlertController) { }

 async presentAlert(header, subHeader) {
    const alert = await this.Alert.create({
      header: header,
      message: subHeader,
      buttons: ['OK']
    });

    await alert.present();
  }

public notNullValueLogin(json) {
        let username = json.username , password = json.password;
        if(username == '' && password == ''){
            this.presentAlert('A ocuarrido un error',' Debes de llenar todos los campos');
            return true;
        }
        else if(json.username == ''){
            this.presentAlert('Se deben de rellenar todos los campo','Te a faltado el nombre de usuario');
            return true;
        }
        else if(json.password == ''){
            this.presentAlert('Se deben de rellenar todos los campos','Te a faltado la contraseña');
            return true;
        }
    }

public notNullValueSignup(json){
    let username = json.username, 
        name = json.name,
        lastname = json.lastname,
        ci = json.ci,
        email = json.email,
        password = json.password,
        confirPassword = json.confirPassword;

console.log(json);
    if(username == '' || name == '' || lastname == '' || ci == '' || email == '' || password == '' || confirPassword == ''){
       this.presentAlert('Ha avido un error', 'Por favor llene todos los campos')
       return true;
    } 
    else if(password != confirPassword){
      this.presentAlert('Las contraseñas ingresadas no coinciden', 'Intende de nuevo');
      return true;
    }
        

    }


}
