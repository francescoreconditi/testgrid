import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('testgrid-app');
}
