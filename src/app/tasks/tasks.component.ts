import { Component, Input } from "@angular/core";
import { Task } from "./task/task";
import { NewTask } from "./new-task/new-task";
import { NewtaskDate } from "./task/task.model";
import { TaskService } from "./tasks.services";


@Component({
    selector: 'app-tasks',
    standalone: true, 
    imports: [Task, NewTask],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TaskComponent {
onCompleteTask($event: string) {
throw new Error('Method not implemented.');
}
    @Input({required: true}) id!: string; 
    @Input({required: true}) name!: string; 
    isAddingTask = false; 
    
    
    
    constructor(private tasksService: TaskService) {
    }

    get selectedUserTasks() {
        return this.tasksService.getUserTasks(this.id) 
    }

     onStartAddTask() {
        this.isAddingTask = true

     }

     onCloseAddTask () {
        this.isAddingTask = false; 
     }

} 