import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userSignUpModel = {
    name: '',
    email: '',
    password: '',
    confirmPassword:'',
  };

  constructor(private alertController: AlertController, private http: HttpClient) { }
  signUp() {
    if (this.password.length === 0 || this.confirmPassword.length === 0 || this.name.length === 0 || this.email.length === 0) {
      this.callEmptyFieldAlert();
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.callPasswordErrorAlert();
      return;
    }
    this.http.get('Https:');


    this.userSignUpModel.name = this.name;
    this.userSignUpModel.email = this.email;
    this.userSignUpModel.password = this.password;
    this.userSignUpModel.confirmPassword = this.confirmPassword;
    this.callSignUpSuccessful();

  }

  async callPasswordErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Password Mismatch!',
      message: ' Please check the password input again!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async callSignUpSuccessful() {
    const alert = await this.alertController.create({
      header: 'Registration Successful!',
      message: 'You have been registered successfully!',
      buttons: ['OK'],
    });
    await alert.present();
  }

   async callEmptyFieldAlert() {
    const alert = await this.alertController.create({
      header: 'Empty Field(s) Detected!',
      message: 'Please complete all fields',
      buttons: ['OK'],
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
