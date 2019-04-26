import { Component } from "@angular/core";


@Component({
    moduleId: module.id,
    template: `
    <StackLayout>
        <Label text="I am outer-header-text!"></Label>
        <router-outlet name="inner-outlet"></router-outlet>
    </StackLayout>
    `
})
export class OuterComponent {

}
