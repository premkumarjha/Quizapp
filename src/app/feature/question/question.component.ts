import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/services/myservice.service';
import { ScorecardComponent } from '../scorecard/scorecard.component';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

    

totalunattemptedquestion=0;
    favoriteSeason: string;
    
//below is for checkbox not for radio button
    allComplete: boolean = false;

    items: any;
    numbers: any[] = ["1", "2", "3", "4", "5"];

    scores: any[] = [{ id: 1, option: "" }, { id: 2, option: "" }, { id: 3, option: "" }, { id: 4, option: "" }, { id: 5, option: "" }];
    //counter=0;
    pager = {
        index: 0,
        size: 1,
        count: 1
    };
    questionArray = {
        "id": 1,
        "name": "Asp.Net Quiz",
        "description": "Asp.Net Quiz (contains webform, mvc, web API, etc.)",
        "questions": [
            {
                "id": 1,
                "name": "ASP.NET webform separates the HTML output from program logic using a feature named as",
                "questionTypeId": 1,
                "options": [
                    {
                        "id": 1055,
                        "questionId": 1010,
                        "name": "Exception",
                        "isAnswer": false
                    },
                    {
                        "id": 1056,
                        "questionId": 1010,
                        "name": "Code-behind",
                        "isAnswer": true
                    },
                    {
                        "id": 1057,
                        "questionId": 1010,
                        "name": "Code-front",
                        "isAnswer": false
                    },
                    {
                        "id": 1058,
                        "questionId": 1010,
                        "name": "None of the above",
                        "isAnswer": false
                    }
                ],
                "questionType": {
                    "id": 1,
                    "name": "Multiple Choice",
                    "isActive": true
                }
            },

            {
                "id": 2,
                "name": "Which method do you use to explicitly kill a user's session?",
                "questionTypeId": 1,
                "options": [
                    {
                        "id": 1055,
                        "questionId": 1010,
                        "name": "Session.Terminate()",
                        "isAnswer": false
                    },
                    {
                        "id": 1057,
                        "questionId": 1010,
                        "name": "Session.TimeOut()",
                        "isAnswer": false
                    },
                    {
                        "id": 1056,
                        "questionId": 1010,
                        "name": "Session.Abondon()",
                        "isAnswer": true
                    },
                    {
                        "id": 1058,
                        "questionId": 1010,
                        "name": "Session.Kill()",
                        "isAnswer": false
                    }
                ],

            },
            {
                "id": 3,
                "name": "Which of the following object is ideal for keeping data alive for a single request?",
                "questionTypeId": 1,
                "options": [
                    {
                        "id": 1055,
                        "questionId": 1010,
                        "name": "HttpContext",
                        "isAnswer": true
                    },
                    {
                        "id": 1056,
                        "questionId": 1010,
                        "name": "Session",
                        "isAnswer": false
                    },
                    {
                        "id": 1057,
                        "questionId": 1010,
                        "name": "Cookies",
                        "isAnswer": false
                    },
                    {
                        "id": 1058,
                        "questionId": 1010,
                        "name": "SqlServer",
                        "isAnswer": false
                    }
                ],
                "questionType": {
                    "id": 1,
                    "name": "Multiple Choice",
                    "isActive": true
                }
            },
            {
                "id": 4,
                "name": "The feature in ASP.NET 2.0 that is used to fire a normal postback to a different page in the application is called",
                "questionTypeId": 1,
                "options": [
                    {
                        "id": 1055,
                        "questionId": 1010,
                        "name": "Theme",
                        "isAnswer": false
                    },
                    {
                        "id": 1057,
                        "questionId": 1010,
                        "name": "Code-front",
                        "isAnswer": false
                    },
                    {
                        "id": 1056,
                        "questionId": 1010,
                        "name": "Cross Page Posting",
                        "isAnswer": true
                    },
                    {
                        "id": 1058,
                        "questionId": 1010,
                        "name": "None of the above",
                        "isAnswer": false
                    }
                ],
                "questionType": {
                    "id": 1,
                    "name": "Multiple Choice",
                    "isActive": true
                }
            },
            {
                "id": 5,
                "name": "What class does the ASP.NET Web Form class inherit from by default?",
                "questionTypeId": 1,
                "options": [
                    {
                        "id": 1055,
                        "questionId": 1010,
                        "name": "System.Web.UI.Page",
                        "isAnswer": true
                    },
                    {
                        "id": 1057,
                        "questionId": 1010,
                        "name": "System.Web.UI.Form",
                        "isAnswer": false
                    },
                    {
                        "id": 1056,
                        "questionId": 1010,
                        "name": "System.Web.GUI.Page",
                        "isAnswer": false
                    },
                    {
                        "id": 1058,
                        "questionId": 1010,
                        "name": "System.Web.Form",
                        "isAnswer": false
                    }
                ],
                "questionType": {
                    "id": 1,
                    "name": "Multiple Choice",
                    "isActive": true
                }
            },
        ]
    }
    result: any;

    constructor(public myservice: MyserviceService, private router: Router,public dialog: MatDialog) { }

    ngOnInit(): void {
        this.items = this.questionArray.questions[0];

        console.log(this.favoriteSeason)
this.myservice.totalNumberOfQuestion=this.questionArray.questions.length;
        
        console.log(this.items);
        // })
        //console.log(this.items)
    }

    next(id) {


        this.items = this.questionArray.questions[id];
        console.log(this.items)

        console.log(this.questionArray.questions.length)

    }
    previous(id) {

        // console.log(id)
        this.items = this.questionArray.questions[id - 1];
    }
    onItemChange(valu, options, items) {


//console.log("hii i am changed after each click")

        options.forEach(o => {
            // yaha ak prop checked add kiya in options
            o.checked = false;
        })

        valu.checked = true;
        //console.log(valu.isAnswer);
        this.scores.filter(c => {

            if (c.id == items.id) {

                c.option = valu.isAnswer;
            }
        })
        //this.scores.for
        console.log(this.scores);
        
    }

    onQuestion(id) {
        //this.items.id=id;
        console.log(id)
        this.items = this.questionArray.questions[id];
        //this.counter=id;

    }
    submit(options) {

        //alert("you have successfully submitted the test");
        // const dialogRef = this.dialog.open(ScorecardComponent, {
        //    disableClose: true,
        //   });
          
        this.router.navigate(['feature/scorecard'])
        this.scoredCard();
    }
    // unAttemptedQuestions(){
    //     let unAttemptedQuestion=0;
    //     this.scores.forEach(o => {
    //         if (o.option!=(true || false)) {
    //             unAttemptedQuestion = unAttemptedQuestion + 1;
    //             this.totalunattemptedquestion = unAttemptedQuestion;
    //         }

    //     })
    //     console.log(this.totalunattemptedquestion)

    // }
    scoredCard() {
        
        let scored = 0;
        let wrongAnswer=0;
        let unAttemptedQuestion=0; 
        // this.scores.forEach(o => {
        //     if (o.option == true) {
        //         scored = scored + 1;
        //         this.myservice.totalScoredMarks = scored;
        //     }else{
        //         if(o.option==(!true && ! false)){
        //             unAttemptedQuestion=unAttemptedQuestion+1;
        //             this.totalunattemptedquestion=unAttemptedQuestion;

        //         }
        //     }

        // })

        
//jb specific data with some count, filtre
     scored=this.scores.filter(o=>o.option==true).length;
     this.myservice.totalScoredMarks = scored;

     unAttemptedQuestion=this.scores.filter(o=>o.option==="").length;
     this.myservice.totalunattemptedquestion=unAttemptedQuestion;

        
        console.log(scored)
        console.log(unAttemptedQuestion)
        //this.unAttemptedQuestions()
    }

    


}
