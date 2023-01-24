import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ITask } from '../shared/interfaces/task.interface';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent{

  @Input() public task: ITask;

  @Output() private itemDeleted = new EventEmitter<ITask>();
  @Output() private taskEdited = new EventEmitter<ITask>();

  public taskForm = new FormGroup({
    title: new FormControl(),
    date: new FormControl(),
  });
  
  public isEditing = false;

  public taskEdit(): void {
    if(this.isEditing !== true){
      this.isEditing = true;
      this.taskForm.setValue(this.task);
    }
  }

  public taskConfirm(): void {
    this.taskEdited.emit(this.taskForm.getRawValue())
    this.isEditing = false;
  }

  public taskDelete(task: ITask): void {
    this.itemDeleted.emit(task);
  }
}
