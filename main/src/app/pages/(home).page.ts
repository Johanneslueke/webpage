import { Component } from "@angular/core";

import { AnalogWelcomeComponent } from "./analog-welcome.component";

@Component({
  selector: "main-home",
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: ` <main-analog-welcome /> `,
})
export default class HomeComponent {}
