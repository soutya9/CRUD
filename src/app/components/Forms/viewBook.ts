import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DonorFormService } from '../.././services/donorForm.service';
import { Router, ActivatedRoute } from '@angular/router';
import { editBook } from './editBook';

@Component({
  moduleId : module.id,
  selector: 'view',
  templateUrl: `viewBook.html`,

})

export class viewBook implements OnInit { 

books: any;
book = {};

 
constructor(private fromService :DonorFormService,private router: Router,private route: ActivatedRoute){



/* this.edit(this.route.snapshot.params['id']);*/
}

ngOnInit(){
  
 this.getBookList();

}

/*edit(id:any) {
    this.fromService.showBook(id).subscribe((res) => {
      
      this.book = res;
      console.log(this.book);
      this.router.navigate(['/so'])
     
    }, (err) => {
      console.log(err);
    });
  }*/

getBookList(){
    this.fromService.getUsers().subscribe((res) => {
      this.books = res;
    }, (err) => {
      console.log(err);
    });
  }

refresh(){
  this.getBookList();
  
    
}

deleteTodo(id:any){
  
    this.fromService.deleteTodo(id)
     
      .subscribe((res) => {

       this.refresh();
      
    }, (err) => {
      console.log(err);
    });
  }

 /*edit(id:any) {
    this.fromService.showBook(id).subscribe((res) => {
      this.value = res;
      console.log(this.value);
    }, (err) => {
      console.log(err);
    });
  }
*/

}