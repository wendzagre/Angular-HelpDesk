import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AgentComponent } from './agent/agent.component';
import { DemandeComponent } from './demande/demande.component';
import { EditAgentComponent } from './edit-agent/edit-agent.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { LoginComponent } from './login/login.component';
import { NewAgentComponent } from './new-agent/new-agent.component';
import { QuestionListComponent } from './question-list/question-list.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",component:LoginComponent},
  {path:"admin",component:AdminTemplateComponent,canActivate:[AuthenticationGuard],
  children:[
    {path:"agent",component:AgentComponent},
    {path:"newAgent",component:NewAgentComponent},
    {path:"questionList",component:QuestionListComponent},
    {path:"demande",component:DemandeComponent},
    {path:"editAgent/:id",component:EditAgentComponent},
    
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
