import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
/*import 'rxjs/add/operator/map';*/

@Injectable()

export class DonorFormService {

constructor(private http :Http,private router: Router,private route: ActivatedRoute){
}

saveRegistration(cred : any): Observable<any>{
  return this.http.post('/api/newuser', cred);
}

saveDonorForm(formobj : any) : Observable<any>{
return this.http.post('/api/user', formobj); 
}

getUsers() : Observable<any>{
return this.http.get('/api/users').map((res:Response)=><any>res.json()); 
}

deleteTodo(id:any){
return this.http.delete('/api/delete/'+id);
}

showBook(id:any) : Observable<any>{
return this.http.get('/api/get/'+id).map((res:Response)=><any>res.json()); 
}

updateBook( data:any) {
    return new Promise((resolve, reject) => {
        this.http.post('/book/', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
    }
}