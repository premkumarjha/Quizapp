import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'quizapp';


  ngOnInit(): void {

    console.log("app module loaded")
  }
}



