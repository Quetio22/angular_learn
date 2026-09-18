import { Component, Input } from "@angular/core";
import { ActivationStart } from "@angular/router";


@Component({
    selector: 'app-user',
    standalone: true, 
    templateUrl:'./user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
@Input() avatar!: string; 
@Input() name!: string; 


get imagePath() {
    return '../../../public/assets/users/' + this.avatar; 
}

    onSelectUser () {}
}      
