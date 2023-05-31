import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {Tab1Page} from "./tab1/tab1.page";
import {TodoItemMenuPage} from "./todo-item-menu/todo-item-menu.page";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-tab1',
    pathMatch: 'full'
  },
  {
    path: 'app-tab1',
    component: Tab1Page,
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'app-todo-item-menu',
    component: TodoItemMenuPage,
    loadChildren: () => import('./todo-item-menu/todo-item-menu.module').then( m => m.TodoItemMenuPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
