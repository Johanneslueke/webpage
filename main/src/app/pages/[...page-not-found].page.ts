import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "main-not-found-global",
  imports: [RouterLink],
  standalone: true,
  host: {
    class:
      "flex min-h-screen flex-col text-zinc-900 bg-zinc-50 px-4 pt-8 pb-32",
  },
  template: `
    <main class="flex-1 mx-auto">
      <section class="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div class="flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h2>Page Not Found</h2>

            <a routerLink="/">Go Back Home</a>
        </div>
      </section>
    </main>
  `,
})
export default class NotFoundComponent {
  
}
