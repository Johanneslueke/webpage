import { Component } from "@angular/core";

import { AnalogWelcomeComponent } from "./analog-welcome.component";
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { RouterOutlet, RouterLink } from "@angular/router";
import { MarkdownComponent, MarkdownRouteComponent, injectContent, injectContentFiles } from "@analogjs/content";

export interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
}


@Component({
  //selector: "main-home",
  standalone: true,
  imports: [ NgFor ], 
  template: `
     
    <div class="" style="margin: 10rem">
     <table class="table  " >
       <thead>
        <tr>
          <th>When</th>
          <th>Project</th>
          <th>Role</th>
          <th>Task</th>
        </tr>
       </thead>
       <tbody >
        <tr *ngFor="let project of projects" class="hover" >
          <td style="min-width:10rem"> {{ project.when }}</td>
          <td > {{ project.name }}</td>
          <td > {{ project.role }}</td>
          <td [innerHTML]="project.task">  </td>
        </tr>
       </tbody>
      </table>
    </div>
  `,
  styles: [
    ` 
     td {
     }
      .container {
        margin: 10%
      }
    `,]
})
export default class CVPageComponent {

  projects = [
    {
      when: "04/2024 - 12/2024" ,
      name: "Brownfield Analytics (BFA)",
      role: "Software Architect",
      task: `
        Actively pushing Requirements Engineering activities.
        Refining incoming feature requuest. Identifing technical debts and
        formulating a plan to reduces these debts. 
      `
    },
    {
      when: "04/2024 - 11/2024" ,
      name: "Catena-X @ Siemens",
      role: "Software Developer",
      task: `
      Updating existing C# implementation to conform with the
      recent Catena-X standard. Actively pushing quality assurance
      by enforcing code reviews. International collaboration across
      continents.
      `
    },
    {
      when: "10/2021 - 04/2024" ,
      name: "Predictive Service Analyzer (PSA)",
      role: "Software Developer/ Architect / SCRUM Master",
      task: `
      <p>
        Architecting and developing the frontend in a dockerized 
        enviromnent. Integrating dependencies from other projects and deploying
        apps onto the Industrial Edge ecosystem. 
      </p> 
      <br>
      <p>
        Exercising the SCRUM Master role
        for the majority of the projects duration.
      </p>
      `
    },
    {
      when: "03/2021 - 10/2021" ,
      name: "Remote on Edge",
      role: "Software Developer, Fullstack",
      task: `
      <p>
      Architecting frontend and backend. Developing in a
      dockerized environment and deploying the same environment
      onto the Industrial Edge ecosystem 
      <p>
      `
    },
    {
      when: "01/2020 - 10/2021" ,
      name: "SIZER - TST Plugin development",
      role: "Software Developer",
      task: `
      Implementing and developing features. Maintaining Unit and
      Integration tests. Using WPF, ".Net 4.x" and later ".net core"
      `
    },
    {
      when: "01/2019 - 11/2019" ,
      name: "Integrationtest PLC 1500",
      role: "Software Tester",
      task: `
      Maintance and development of integration tests, this includes creating 
      and maintaining TIA Portal projects, programming of OBs, FCs with SCL.
      Writing test with Nunit using C#
      `
    },
    {
      when: "10/2018 - 12/2018" ,
      name: "TIA Portal Plugin Development",
      role: "Apprentice",
      task: "Development of the import/Export Plugin using C# and the Openness-Interface for the TIA Portal"
    }
  ]
}
