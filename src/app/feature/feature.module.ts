import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { QuestionComponent } from './question/question.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';

import { SharedModule } from '../shared/shared.module';
//import { BrowserModule } from '@angular/platform-browser';
// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load themes
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { FusionChartsModule } from 'angular-fusioncharts';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(
  FusionCharts,
  Charts,
  FusionTheme
)

@NgModule({
  declarations: [QuestionComponent, ScorecardComponent, LoginComponent, RegisterationComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule,
    FusionChartsModule
   
    
  ],
  
})
export class FeatureModule { 
  
}
