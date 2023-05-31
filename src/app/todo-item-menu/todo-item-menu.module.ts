import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoItemMenuPageRoutingModule } from './todo-item-menu-routing.module';

import { TodoItemMenuPage } from './todo-item-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoItemMenuPageRoutingModule
  ],
  declarations: [TodoItemMenuPage]
})
export class TodoItemMenuPageModule {}
