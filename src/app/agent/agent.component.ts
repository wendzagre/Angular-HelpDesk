import { Component, OnInit } from '@angular/core';
import { agent } from '../model/agent.model';
import { ModuleAgentService } from '../services/module-agent.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  agent!:Array<agent>;
  currentPage:number=0;
  pageSize:number=5;
  totalPages:number=0;
  errorMessage!:string;
  searchFormGroup!:FormGroup;
  currentAction:string="all";

  constructor(private agentService:ModuleAgentService,private fb:FormBuilder,public authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
     this.searchFormGroup=this.fb.group({
      keyword:this.fb.control(null)
     });
    this.handleGetPageAgent();
    
  }

  handleGetPageAgent(){
    this.agentService.getPageAgent(this.currentPage,this.pageSize).subscribe({
      next:(data)=>{
        this.agent=data.agent;
        this.totalPages=data.totalPages;
        console.log(this.totalPages);
      },
      error:(err)=>{
        this.errorMessage=err;
      }
    });
  }

  handleGetAllAgent(){
    this.agentService.getAllAgent().subscribe({
      next:(data)=>{
        this.agent=data;
      },
      error:(err)=>{
        this.errorMessage=err;
      }
    });
  }

  handleDeleteAgent(p:agent){
    let conf=confirm("Voulez-vous vraiment le supprimer");
    if(conf==false) return;
    this.agentService.deleteAgent(p.id).subscribe({
      next:(data)=>{
        //this.handleGetAllAgent();
        let index=this.agent.indexOf(p);
        this.agent.splice(index,1);

      }
    })
  }

  handleSearchAgent(){
    this.currentAction="search";
    let keyword=this.searchFormGroup.value.keyword;
    this.agentService.searchAgent(keyword,this.currentPage,this.pageSize).subscribe({
      next:(data)=>{
        this.agent=data.agent;
        this.totalPages=data.totalPages;
      }
    })
  }

  gotopage(i:number){
    this.currentPage=i;
    if(this.currentAction ==="all")
      this.handleGetPageAgent();
   else
   this.handleSearchAgent();
  }

  handleNewAgent(){
    this.router.navigateByUrl( "/admin/newAgent");
  }

  handleEditAgent(p:agent){
    this.router.navigateByUrl("/admin/editAgent/"+p.id);

  }
}
