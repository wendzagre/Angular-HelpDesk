import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { AppUser } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users:AppUser[]=[];
  authenticatedUser:AppUser|undefined


  constructor() { 
    this.users.push({userId:"1",matricule:"user1",password:"1234",roles:["USER"]});
    this.users.push({userId:"1",matricule:"user2",password:"1234",roles:["USER"]});
    this.users.push({userId:"1",matricule:"admin",password:"1234",roles:["USER","ADMIN"]});

  }

  public login(matricule:string,password:string):Observable<AppUser>{
    let appUser=this.users.find(u => u.matricule==matricule);
    if(!appUser) return throwError(()=> new Error("User not found"));
    if(appUser.password!=password){
      return throwError(()=> new Error("Bad credentials"));
    }
   return of(appUser);
  }

  public authenticateUser(appUser:AppUser):Observable<boolean>{
    this.authenticatedUser=appUser;
    localStorage.setItem("authUser", JSON.stringify({matricule:appUser.matricule,roles:appUser.roles,jwt:"JWT_TOKEN"}));
    return of (true);

  }

  public hasRole(role:string) :boolean{
   return this.authenticatedUser!.roles.includes(role);
  }

  public isAuthenticated(){
    return this.authenticatedUser!=undefined;
  }

  public logout():Observable<boolean>{
    this.authenticatedUser=undefined;
    localStorage.removeItem("authUser");
    return of(true);
  }

}
