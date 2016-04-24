import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    template: `<h2> Skills are : {{mySkill }}</h2>`
})

export class AppComponent
{
    mySkill: string;
    skills = ['ASP.NET Core 1.0', 'Angular 2', 'C#', 'SQL'];

    constructor() {        
        this.mySkill = this.skills[0];
    }
}