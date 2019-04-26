import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { OuterComponent } from "./outer/outer.component";
import { InnerComponent } from "./inner/inner.component";

const routes: Routes = [
    { path: "", redirectTo: "/outer/(inner-outlet:inner)", pathMatch: "full" },
    { path: "outer", component: OuterComponent, children: [
        { path: "inner", component: InnerComponent, outlet: "inner-outlet" }
    ] },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
