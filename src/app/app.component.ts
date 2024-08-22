import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'engie-sample';
}
