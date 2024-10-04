import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TodoInterface } from '../home/home.component';
import { TodosService } from '../services/todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  @Input('todo') todoProps!: TodoInterface;
  filter$: Observable<string>;

  constructor(private todosService: TodosService) {
    this.filter$ = todosService.filter$;
  }

  checkRender(): boolean {
    console.log('checkRender');
    return true;
  }

  changeText() {
    this.todoProps.text = 'Changed from inside';
  }

  changeFilter() {
    this.todosService.filter$.next('active');
  }
}
