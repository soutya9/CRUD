import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Router, ActivatedRoute } from '@angular/router';
@Injectable()
export class AuthGuardService {
isLoggedIn: boolean = false;
  redirectUrl: string;

    constructor(private http: Http, private route: ActivatedRoute,
        private router: Router) { }

    login(logindata:any) {
        return this.http.post('/login',logindata)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                /*console.log(user);*/
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser',user);
                }
                console.log(user.username)
                console.log(logindata.username)
                 
if(response){
    /*matched respone taken from sever.js app.post*/
 this.router.navigate(['/addBook']);
 /*if matched, set isloggedin to true n redirect*/
 this.isLoggedIn = true;

}
else{
    
    this.router.navigate(['/login']);
     this.isLoggedIn =false;
}
return this.isLoggedIn;

            });
    }   
}