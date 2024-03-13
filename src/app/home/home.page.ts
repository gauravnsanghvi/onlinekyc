import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userData: any = {
    name: '',
    dateOfBirth: '',
    address: '',
    panNumber: '',
    aadharNumber: ''
  };

  constructor() {}

  separateAadhar(event: any) {
    let value = event.target.value;
    value = value.replace(/\D/g, ''); // Remove non-digit characters
    value = value.replace(/(.{4})/g, '$1 '); // Insert space after every 4 characters
    this.userData.aadharNumber = value;
  }

  submitForm() {
  }

}
