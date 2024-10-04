import { Component } from '@angular/core';

export interface TodoInterface {
  id: number;
  text: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  todos: TodoInterface[] = [
    {
      id: 1,
      text: 'Todo One',
      isCompleted: true,
    },
    {
      id: 2,
      text: 'Todo Two',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Todo Three',
      isCompleted: false,
    },
    {
      id: 4,
      text: 'Todo Four',
      isCompleted: true,
    },
  ];

  changeArrayElementNotWorking() {
    this.todos[0].text = 'Foo';
  }

  changeArrayElementWorking() {
    this.todos[0] = { ...this.todos[0], text: 'Foo' };
  }

  addToArray() {
    this.todos.push({
      id: 5,
      text: 'Some other!',
      isCompleted: false,
    });
  }
}
