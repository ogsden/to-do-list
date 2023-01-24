import { Component, OnInit } from '@angular/core';
import { ITask } from './shared/interfaces/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  public tasks: ITask[] = [];
  
  public condition = false;
  
  ngOnInit(): void {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  public changeCondition(){
    this.condition = !this.condition;
  }

  public addTask(taskToAdd: ITask): void {
    this.tasks.push(taskToAdd);
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  public editTask(indexToDelete: number, taskToEdit: ITask): void {
    this.tasks.splice(indexToDelete, 1, taskToEdit);
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  public deleteTask(indexToDelete: number): void {
    this.tasks.splice(indexToDelete, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

}
