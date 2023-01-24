import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ITask } from '../shared/interfaces/task.interface';


@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent {

  @Output() private taskCreated = new EventEmitter<ITask>();

  public taskForm = new FormGroup({
    title: new FormControl(''),
    date: new FormControl(''),
  });

  public addTask(): void {
    if (this.taskForm.value.title && this.taskForm.value.date) {
      this.taskCreated.emit(this.taskForm.getRawValue());
      this.taskForm.patchValue({
        title: '',
        date: ''
      })
    }
  }

}
