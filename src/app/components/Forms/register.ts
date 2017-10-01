import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DonorFormService } from '../.././services/donorForm.service';
import { Router } from '@angular/router';

@Component({
  moduleId : module.id,
  selector: 'register',
  templateUrl: `register.html`,
})

export class register { 

model = {};
constructor(private fromService :DonorFormService, private router: Router){

console.log("inside register");
}

register() {
  console.log("register");
  /*run service fromservice (DonorFormService) and method in it ie saveDonorForm in that service to post data*/
    this.fromService.saveRegistration(this.model).subscribe((result) => {
     
      this.router.navigate(['/login']);
    }, (err) => {
      console.log(err);
    });
  }
}