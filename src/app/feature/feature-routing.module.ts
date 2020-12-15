import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ScorecardComponent } from './scorecard/scorecard.component';


const routes: Routes = [
  {path: '', component:QuestionComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterationComponent},
    {path: 'scorecard', component:ScorecardComponent}

  //QuestionComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
