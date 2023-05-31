import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoItemMenuPage } from './todo-item-menu.page';

const routes: Routes = [
  {
    path: 'app-todo-item-menu',
    component: TodoItemMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoItemMenuPageRoutingModule {}
