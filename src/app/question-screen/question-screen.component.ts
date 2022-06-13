import { core } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { QuestionServiceService } from '../Services/question-service.service';
import { interval } from 'rxjs';
@Component({
  selector: 'app-question-screen',
  templateUrl: './question-screen.component.html',
  styleUrls: ['./question-screen.component.css']
})
export class QuestionScreenComponent implements OnInit {
  public questionList:any=[];
  public questionListActual:any=[];
  public currentQuestion:number=0;
  public points:number=0;
  counter=10;
  correctAnswers:number=0;
  incorrectAnswers:number=0;
  interval$:any;
  progress:string="0";
  public optionCorrect:boolean=false;
  isQuizCompleted:Boolean=false;

  constructor(private questionService:QuestionServiceService,private courseService:CourseService) { }

  ngOnInit(): void {
    //this.getAllQuestions();
    this.getActualQuestions();
    this.startCounter();

  }
  // getAllQuestions(){
  //   this.questionService.getQuestionJson().subscribe(
  //     (res) =>{
  //       console.log(res);
  //       this.questionList=res.questions;
       
  //     },
  //     (err) =>{
  //       console.log(err);
  //     }
  //   )

  // }
  getActualQuestions(){
    this.courseService.getCourseList().subscribe(
      (res)=>{
        console.log(res);
        this.questionListActual=res;
        

      }
    )
  }
  nextQuestion(){
    this.currentQuestion++;
    this.resetCounter();


  }
  prevQuestion(){
    this.currentQuestion--;

  }
  whatAnswer(currentQno:number,option:any,correctOption:any){
    if (currentQno===3){
      this.isQuizCompleted=true;
      this.stopCounter;
      
    }
    console.log(option+correctOption);
    if(option===correctOption){
      this.optionCorrect=true;
      this.points+=10;
      // setTimeout(()=>{
        
        this.correctAnswers++;
        this.resetCounter();
        this.getProgressPercent();

      // },1000);


    }else{
      this.optionCorrect=false;
      // setTimeout(()=>{
       
        this.incorrectAnswers++;
        this.resetCounter();
        this.getProgressPercent();
    // },10000);
    this.points-=10;
    }

  }
  startCounter(){
    this.interval$=interval(1000).subscribe(val=>{
      this.counter--;
      if(this.counter===0){
        this.currentQuestion++;
        this.counter=10;
        this.points-=10;
      }
    });
    setTimeout(()=>{
      this.interval$.unsubscribe();
    },6000000);

  }
  stopCounter(){
    this.interval$.unsubscribe();
    this.counter=0;

  }
  resetCounter(){
    this.stopCounter();
    this.counter=10;
    this.startCounter();

  }
  resetQuiz(){
    this.resetCounter();
    this.getActualQuestions();
    this.points=0;
    this.counter=10;
    this.currentQuestion=0;

  }
  getProgressPercent(){
    this.progress=(this.currentQuestion/3*100).toString();
    return this.progress;
  }

}
