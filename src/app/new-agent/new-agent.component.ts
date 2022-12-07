import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModuleAgentService } from '../services/module-agent.service';

@Component({
  selector: 'app-new-agent',
  templateUrl: './new-agent.component.html',
  styleUrls: ['./new-agent.component.css']
})
export class NewAgentComponent implements OnInit {
  agentFormGroup!:FormGroup;

  constructor(private fb:FormBuilder, public agentService:ModuleAgentService) { }

  ngOnInit(): void {
    this.agentFormGroup=this.fb.group({
      Name:this.fb.control(null,[Validators.required,Validators.minLength(3)]),
      Prenom:this.fb.control(null,[Validators.required]),
      Email:this.fb.control(null,[Validators.required]),
      Telephone:this.fb.control(null,[Validators.required])
    });
  }

  handleAddAgent(){
    let agent=this.agentFormGroup.value;
    this.agentService.addNewAgent(agent).subscribe({
     next:(data)=>{
       alert('Agent créer');
       this.agentFormGroup.reset();

     }, error:err=>{
      console.log(err);

     }

    })
  }

}
