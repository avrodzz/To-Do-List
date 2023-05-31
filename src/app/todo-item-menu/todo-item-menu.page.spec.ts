import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoItemMenuPage } from './todo-item-menu.page';

describe('TodoItemMenuPage', () => {
  let component: TodoItemMenuPage;
  let fixture: ComponentFixture<TodoItemMenuPage>;

  // @ts-ignore
  beforeEach(async(() => {
    fixture = TestBed.createComponent(TodoItemMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
