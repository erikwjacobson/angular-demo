import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// when working with ngmodel import FormsModule
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app.routing.module";

import { AppComponent } from './app.component';
import { ToDoComponent } from './todo/todo.component';
import { ToDoItemComponent } from './todo/item/item.component';


@NgModule({
    declarations: [
        AppComponent,
        ToDoComponent,
        ToDoItemComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
