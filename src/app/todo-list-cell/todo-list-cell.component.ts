import {Component, Input, OnInit} from '@angular/core';
import {TodoListCellData} from "../todo-list-cell-data";

@Component({
  selector: 'app-todo-list-cell',
  templateUrl: './todo-list-cell.component.html',
  styleUrls: ['./todo-list-cell.component.scss'],
})
export class TodoListCellComponent  implements OnInit {
  @Input() data:TodoListCellData = {
    descriptionLabel: "",
    dateDeadlineLabel: "",
  }

  constructor() { }

  ngOnInit() {}

}
