import { Component, Input } from "@angular/core";
import { Task } from "./task/task";

@Component({
    selector: 'app-tasks',
    standalone: true, 
    imports: [Task],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TaskComponent {
    @Input() name?: string;  
     
}