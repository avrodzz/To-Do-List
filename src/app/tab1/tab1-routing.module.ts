import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { TodoListCellComponent } from "../todo-list-cell/todo-list-cell.component";
import { IonicModule } from "@ionic/angular";
import { TodoItemMenuPage } from "../todo-item-menu/todo-item-menu.page";

const routes: Routes = [
  {
    path: 'app-tab1',
    component: Tab1Page,
  },
  {
    path: 'app-todo-item-menu',
    component: TodoItemMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule],
    declarations: [
        TodoListCellComponent
    ],
    exports: [RouterModule, TodoListCellComponent]
})
export class Tab1PageRoutingModule {}
