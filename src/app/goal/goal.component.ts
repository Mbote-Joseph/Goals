import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    new Goal(1, 'HTML and CSS', 'Learning HTML and CSS languages for web development',new Date(2020,1,14)),
    new Goal(2,'Bootstrap','Using Bootstrap to make the frontend nice',new Date(2020,6,9)),
    new Goal(3,'JavaScript','Learning Javascript to enhance interacting with the server Side',new Date(2020,6,9)),
    new Goal(4,'Angular','Using a JavaScript framework which uses TypeScript for the frontend',new Date(2020,8,12)),
    new Goal(5,'Python','Learning Python to help in Backend',new Date(2020,9,18)),
    new Goal(6,'Django','Learning about Django which is a python framework',new Date(2020,10,14)),
    new Goal(7,'FullStack web development','Integrating Angular and Django to perform fullstack tasks ',new Date(2021,1,1)),
  ];

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  
  completeGoal(isComplete, index){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }

  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  constructor() { }

  ngOnInit(): void {
  }

  

}
