import { Component } from '@angular/core';
import { TodoListCellData } from "../todo-list-cell-data";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  todoItems: TodoListCellData[] = []
  constructor() {
    this.todoItems = this.fetchTodoListCellData()
  }

  // addTodoListCell(data: TodoListCellData) {
  //
  //   this.todoItems.push(data)
  // }

  addTodoListCell() {
    const data: TodoListCellData = {
      descriptionLabel: "Drum Lesson",
      dateDeadlineLabel: "May 30, 4:00 PM"
    }
    this.todoItems.push(data)
  }

  fetchTodoListCellData() {
    let item1: TodoListCellData = {
      descriptionLabel: "Feed Felix",
      dateDeadlineLabel: "May 23, 5:30 PM"
    }
    let item2: TodoListCellData = {
      descriptionLabel: "Turn on the lights outside",
      dateDeadlineLabel: "May 23, 7:30 PM"
    }
    let item3: TodoListCellData = {
      descriptionLabel: "Bring Felix inside",
      dateDeadlineLabel: "May 23, 8:30 PM"
    }
    let item4: TodoListCellData = {
      descriptionLabel: "Give Felix scratches",
      dateDeadlineLabel: "May 23, 8:30 PM"
    }
    let item5: TodoListCellData = {
      descriptionLabel: "Shower",
      dateDeadlineLabel: "May 23, 9:00 PM"
    }
    let item6: TodoListCellData = {
      descriptionLabel: "Wind down",
      dateDeadlineLabel: "May 23, 10:30 PM"
    }
    let item7: TodoListCellData = {
      descriptionLabel: "Go to sleep",
      dateDeadlineLabel: "May 23, 11:30 PM"
    }
    let item8: TodoListCellData = {
      descriptionLabel: "Wake up",
      dateDeadlineLabel: "May 24, 8:30 AM"
    }
    let item9: TodoListCellData = {
      descriptionLabel: "Eat lunch",
      dateDeadlineLabel: "May 24, 12:00 PM"
    }
    let item10: TodoListCellData = {
      descriptionLabel: "Wash dishes",
      dateDeadlineLabel: "May 24, 1:00 PM"
    }
    return [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10]
  }
}
