import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DonorFormService } from '../.././services/donorForm.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId : module.id,
  selector: 'edit',
  templateUrl: `editBook.html`,

})

export class editBook implements OnInit { 

  book = {};

constructor(private fromService :DonorFormService,private router: Router,private route: ActivatedRoute){
let id=this.route.snapshot.params['id']
this.ed(id);
}

ngOnInit() {
    
  }

  ed(id:any) {
    this.fromService.showBook(id).subscribe((res) => {
      this.book = res;
      console.log(this.book);
    }, (err) => {
      console.log(err);
    });
  }

  updateBook() {
    this.fromService.updateBook(this.book).then((result:any) => {     
      
    }, (err:any) => {
      console.log(err);
    });
  }
}