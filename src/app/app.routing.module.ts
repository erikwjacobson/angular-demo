import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ToDoComponent } from './todo/todo.component';

const appRoutes: Routes = [
    {
        // Path for the component
        path: 'todo',
        children: [
            {
                path: '',
                component: ToDoComponent
            }
        ],
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {enableTracing: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }