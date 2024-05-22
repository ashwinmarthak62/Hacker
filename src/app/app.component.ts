import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewStoriesComponent } from './NewStories/new-stories/new-stories.component';
import { HttpClientModule } from '@angular/common/http';
import {DataTablesModule } from 'angular-datatables'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NewStoriesComponent,HttpClientModule,DataTablesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hacker';
 }
