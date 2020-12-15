import { Component, OnInit,NgZone } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss']
})
export class ScorecardComponent implements OnInit {

  dataSource: any;
  selectedSlice = 'none';
  chart: any;


  attemtedQuestion = 0;
  
  constructor(public myservice: MyserviceService, private router: Router, public dialog: MatDialog,private zone: NgZone) { 


    this.dataSource = {
      "chart": {
          "caption": "Graphical Representation of marks secured by student",
          "plottooltext": "<b>$percentValue</b> of total student $label ",
          "showLegend": "1",
          "showPercentValues": "1",
          "legendPosition": "bottom",
          "useDataPlotColorForLabels": "1",
          "enablemultislicing": "0",
          "showlegend": "0",
          "theme": "fusion",
      },
      "data": [{
          "label": "  scored 3 or less than 3 marks",
          "value": "60"
      }, {
          "label": "scored 4 marks",
          "value": "30"
      },
      // }, {
      //     "label": "Zeus",
      //     "value": "14376"
      // }, 
      {
          "label": " scored 5 marks",
          "value": "10"
      }]
    };
  }
  //scorecMarks=0;
  

// FusionCharts initialized listener to get the chart instance
initialized($event){
  this.chart = $event.chart; // saving chart instance
}

// Change listener for radio buttons
onRadioOptionChange(option){
  this.selectedSlice = option;
  // For each data element , see if it is selected, if none then slice in all elements
  this.dataSource.data.forEach((d, index) => {
    if (option == 'none') {
      this.chart.slicePlotItem(index, false);
    } else if (option === d.label.toLowerCase()) {
      this.chart.slicePlotItem(index, true);
    }
  });
}

// Get data item label
getLabel(index){
  return this.dataSource.data[index].label;
}

// FusionCharts Component dataPlot click listener
dataplotClick($event){
  let dataIndex = $event.dataObj.dataIndex;
  let isSliced = $event.dataObj.isSliced;
  this.zone.run(() => {
    this.selectedSlice = isSliced ? 'none' : this.getLabel(dataIndex).toLowerCase();
  })
}
ngOnInit(): void {
  //this.scorecMarks=this.myservice.totalScoredMarks;
  //this.router.navigate(["/"])
  this.attemtedQuestion = 5 - this.myservice.totalunattemptedquestion;
  setTimeout(() => {
   //SelectedSingleton.change(this.sampleCode['ex24'].title);
  })

}

}

