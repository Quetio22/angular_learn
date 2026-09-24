import { InvokeFunctionExpr } from "@angular/compiler";
import { Component, Input, computed, Output, input, EventEmitter, output } from "@angular/core";
import { ActivationStart } from "@angular/router";


@Component({
    selector: 'app-user',
    standalone: true, 
    templateUrl:'./user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
@Input({ required: true}) id!: string; 
@Input({required: true}) avatar!: string; 
@Input({required: true}) name!: string; 
@Output() select = new EventEmitter<string>(); 


get imagePath() {
   return '../../../public/assets/users/' + this.avatar; 
}

    onSelectUser () {
        this.select.emit(this.id); 
    }
}      
