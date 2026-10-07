import { Component, EventEmitter, Output, signal, inject, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewtaskDate } from '../task/task.model';
import { TaskService } from '../tasks.services';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input({required: true}) userId!: string;
  @Output () close = new EventEmitter<void>();
  
  enteredTitle = ''; 
  enteredSummary = ''; 
  enteredDate = ''; 

  private tasksService = inject(TaskService)

  onCancel () {
    this.close.emit();
  }
onSubmit() {
this.tasksService.addTask({
  title: this.enteredTitle,
  summary: this.enteredSummary,
  date: this.enteredDate
}, this.userId);
this.close.emit();
}

}
 