import { InvokeFunctionExpr } from "@angular/compiler";
import { Component, Input, computed, Output, input, EventEmitter, output } from "@angular/core";
import { ActivationStart } from "@angular/router";

//type User = {
//   id: string; 
// avatar: string;
//name: string; 

// }

interface User {
    id: string;
    avatar: string;
    name: string;
}

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
    @Input({ required: true }) user!: User;
    @Output() select = new EventEmitter<string>();


    get imagePath() {
        return '../../../public/assets/users/' + this.user.avatar;
    }

    onSelectUser() {
        this.select.emit(this.user.id);
    }
}


