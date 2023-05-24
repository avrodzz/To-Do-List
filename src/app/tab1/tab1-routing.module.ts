import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { TodoListCellComponent } from "../todo-list-cell/todo-list-cell.component";
import { IonicModule } from "@ionic/angular";

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
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
