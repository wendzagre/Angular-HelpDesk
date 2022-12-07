import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { agent, PageAgent } from '../model/agent.model';

@Injectable({
  providedIn: 'root'
})
export class ModuleAgentService {
  private agent!:Array<agent>;

  constructor() { 
    this.agent=[
      {id:1,Name:"ZAGRE",Prenom:"Patrick", Email:"patrickzagre3@gmail.com",Telephone:"78550397"},
      {id:2,Name:"KABRE",Prenom:"Arlette", Email:"arlettekabre3@gmail.com",Telephone:"72947683"},
      {id:3,Name:"COMPAORE",Prenom:"Aurelia", Email:"aureliacompaore3@gmail.com",Telephone:"67984530"},
      {id:4,Name:"NACOULMA",Prenom:"Rodrigue", Email:"rodriguenacoulma3@gmail.com",Telephone:"76547557"},
      {id:5,Name:"DAH",Prenom:"Kevin", Email:"kevindah3@gmail.com",Telephone:"70157216"},
    
      ];
      for(let i=0; i<10;i++){
        this.agent.push({id:1,Name:"ZAGRE",Prenom:"Patrick", Email:"patrickzagre3@gmail.com",Telephone:"78550397"});
        this.agent.push({id:2,Name:"KABRE",Prenom:"Arlette", Email:"arlettekabre3@gmail.com",Telephone:"72947683"});
        this.agent.push({id:3,Name:"COMPAORE",Prenom:"Aurelia", Email:"aureliacompaore3@gmail.com",Telephone:"67984530"});
        
      }
  }
  public getAllAgent():Observable<agent[]>{
    let rnd=Math.random();
    if(rnd<0.1) return throwError(()=>new Error("Internet connexion error"));
   else return of(this.agent);
  }

  public getPageAgent(page:number,size:number):Observable<PageAgent>{
    let index=page*size;
    let totalPages=~~(this.agent.length/size);
    if(this.agent.length % size !=0)
    totalPages++;
   let pageAgent= this.agent.slice(index,index+size);
    return of({page:page, size:size, totalPages:totalPages, agent:pageAgent});
  }

  public deleteAgent(id:number):Observable<boolean>{
   this.agent= this.agent.filter(p=>p.id!=id);
   return of(true);
  }

  public searchAgent(keyword:string, page:number,size:number):Observable<PageAgent>{
   let result= this.agent.filter(p=>p.Name.includes(keyword));
   let index=page*size;
    let totalPages=~~(result.length/size);
    if(this.agent.length % size !=0)
    totalPages++;
   let pageAgent= result.slice(index,index+size);
   return of({page:page, size:size, totalPages:totalPages, agent:pageAgent});

  }

  public addNewAgent(agent:agent): Observable<agent>{
    agent.id=1;
    this.agent.push(agent);
    return of(agent);

  }

  public getAgent(id:string):Observable<agent>{
     let agent=this.agent.find(p => p.id==1 );
     if(agent==undefined) return throwError(()=> new Error("Agent not found"));
     return of(agent);
  }


  public UpdateAgent(agent:agent):Observable<agent>{
    this.agent=this.agent.map(p=>(p.id==agent.id)?agent:p)
    return of(agent);
  }
}
