import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DonorFormService } from '../.././services/donorForm.service';
import { Router } from '@angular/router';

@Component({
  moduleId : module.id,
  selector: 'addBook',
  templateUrl: `addBook.html`,

})
export class addBook { 
data:any;
errorMsg:any;
book = {};

constructor(private fromService :DonorFormService, private router: Router){

console.log("inside cons");
}

/*onSubmit(value:any){
 
this.fromService.saveDonorForm(value).subscribe(
                                (data:any)=>{ 

 

                                })                               
    }
*/

/*onSubmit(value:any){
	this.router.navigate(['./do']);
	 var that = this;
  this.fromService.saveDonorForm(value).subscribe((response) => { // <---
        alert('Successfully registered');
       
       
        that.router.navigate(['/home']);
    }, (err) => { // <---
        console.log(err);
    }
  );
}*/

saveBook() {
  /*run service fromservice (DonorFormService) and method in it ie saveDonorForm in that service to post data*/
    this.fromService.saveDonorForm(this.book).subscribe((result) => {
     
      this.router.navigate(['/view']);
    }, (err) => {
      console.log(err);
    });
  }
 /*moveToSecond(){
    this.router.navigate(['do']);
  }
*/
}