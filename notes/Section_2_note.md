# Résumé Angular

## 1. `App`

Composant racine.

Il :

- contient la liste des utilisateurs ;
- garde l'utilisateur sélectionné ;
- affiche les tâches correspondantes.

```ts
export class App {
  users = DUMMY_USERS;
  selectedUserId = '';

  get selectedUser() {
    return this.users.find(
      user => user.id === this.selectedUserId
    )!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
```

```html
@for (user of users; track user.id) {
  <app-user
    [user]="user"
    [selected]="user.id === selectedUserId"
    (select)="onSelectUser($event)"
  />
}

@if (selectedUser) {
  <app-tasks
    [id]="selectedUser.id"
    [name]="selectedUser.name"
  />
} @else {
  <p>Select a user to see their tasks!</p>
}
```

---

## 2. `dummy-users.ts`

Contient des utilisateurs statiques pour simuler des données venant d'une API.

```ts
export const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Manuel',
    avatar: 'user-1.jpg',
  },
];
```

---

## 3. `UserComponent`

Reçoit un utilisateur depuis le parent et émet son `id` lorsqu'on clique dessus.

```ts
@Input({ required: true }) user!: User;
@Input({ required: true }) selected!: boolean;

@Output()
select = new EventEmitter<string>();

onSelectUser() {
  this.select.emit(this.user.id);
}
```

```html
<button
  [class.active]="selected"
  (click)="onSelectUser()"
>
  ...
</button>
```

Concepts :

- `@Input`
- `@Output`
- `EventEmitter`
- Property Binding
- Event Binding

---

## 4. Modèle `User`

Décrit la structure d'un utilisateur.

```ts
export interface User {
  id: string;
  avatar: string;
  name: string;
}
```

---

## 5. `Card`

Composant partagé utilisé uniquement pour la présentation.

```html
<div>
  <ng-content />
</div>
```

`ng-content` permet de projeter du contenu dans le composant.

---

## 6. `HeaderComponent`

Composant statique qui affiche l'en-tête de l'application.

Pas de logique particulière.

---

## 7. `TaskComponent`

Affiche les tâches de l'utilisateur sélectionné.

Il reçoit :

```ts
@Input({ required: true }) id!: string;
@Input({ required: true }) name!: string;
```

Il utilise `TaskService` et gère aussi l'ouverture du formulaire d'ajout :

```ts
isAddingTask = false;
```

---

## 8. `TaskService`

Centralise les données et la logique liée aux tâches.

```ts
@Injectable({
  providedIn: 'root',
})
export class TaskService {}
```

Il gère notamment :

- le filtrage des tâches ;
- l'ajout ;
- la suppression ;
- la sauvegarde dans `localStorage`.

```ts
getUserTasks(userId: string) {
  return this.tasks.filter(
    task => task.userId === userId
  );
}
```

---

## 9. `Task`

Affiche une tâche individuelle.

Utilise `DatePipe` :

```html
<time>
  {{ task.dueDate | date: 'fullDate' }}
</time>
```

Et peut appeler `TaskService` pour supprimer ou terminer une tâche.

---

## 10. `NewTask`

Formulaire d'ajout de tâche.

Utilise `FormsModule` et `ngModel`.

```html
<input
  type="text"
  [(ngModel)]="enteredTitle"
/>
```

Lors de la soumission :

```ts
this.taskService.addTask(...);
this.close.emit();
```

Le formulaire utilise aussi un `<dialog>`.

---

## 11. `app.routes.ts`

Le routing existe mais n'est pas encore utilisé.

```ts
export const routes: Routes = [];
```

La navigation se fait pour l'instant avec l'état interne :

```ts
selectedUserId
isAddingTask
```

---

# Communication entre composants

## Parent → Enfant

Avec `@Input` :

```html
<app-user [user]="user" />
```

```ts
@Input()
user!: User;
```

## Enfant → Parent

Avec `@Output` :

```ts
@Output()
select = new EventEmitter<string>();
```

```ts
this.select.emit(this.user.id);
```

---

# Concepts importants à retenir

- composants standalone ;
- `@Input` ;
- `@Output` ;
- `EventEmitter` ;
- Property Binding ;
- Event Binding ;
- Two-Way Binding avec `ngModel` ;
- `@if` ;
- `@for` ;
- `ng-content` ;
- `DatePipe` ;
- services ;
- injection de dépendances ;
- `localStorage`.