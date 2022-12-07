import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { agent } from '../model/agent.model';
import { ModuleAgentService } from '../services/module-agent.service';

@Component({
  selector: 'app-edit-agent',
  templateUrl: './edit-agent.component.html',
  styleUrls: ['./edit-agent.component.css']
})
export class EditAgentComponent implements OnInit {
  agentId!:string;
  agent!:agent;
  agentFormGroup!:FormGroup;

  constructor(private route:ActivatedRoute, public AgentService:ModuleAgentService, private fb:FormBuilder) { 
    this.agentId=this.route.snapshot.params['id'];
    
  }

  ngOnInit(): void {
     this.AgentService.getAgent(this.agentId).subscribe({
      next:(agent)=>{
         this.agent=agent;
         this.agentFormGroup=this.fb.group({
          Name:this.fb.control(this.agent.Name,[Validators.required,Validators.minLength(3)]),
          Prenom:this.fb.control(this.agent.Prenom,[Validators.required]),
          Email:this.fb.control(this.agent.Email,[Validators.required]),
          Telephone:this.fb.control(this.agent.Telephone,[Validators.required])
        });

      },
      error:(err)=>{
        console.log(err);
      }

     });

  }

  handleUpdateAgent(){
    let p=this.agentFormGroup.value;
    p.id=this.agent.id;
    this.AgentService.UpdateAgent(p).subscribe({
      next:(ag)=>{
        alert("Agent modifier")
      },
      error:err=>{
        console.log(err);
      }
    })

  }

}
