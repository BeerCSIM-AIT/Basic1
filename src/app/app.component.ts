import { Component } from '@angular/core';

@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basic Angular by Phakpoom I.';
  i: number = 0;
  validAge: boolean = false;
  selectedCourse:string = "";
  courses = [
    { code: "1001", title: "TypeScript" },
    { code: "1002", title: "JavaScript" },
    { code: "1003", title: "Angular" },
    { code: "1004", title: "Vue.js" },
  ];
  
  greet(){
    return "Sawasdee Krub";
  }

  addCount(){
    this.i++;
  }

  readData(value:string){
    console.log(value);
  }

  readAge(age:string){
    let a = parseInt(age);
    this.validAge = a>=18;
  }

  readCourse(courseId:number){
    this.selectedCourse = this.courses[courseId].title;
  }
}
