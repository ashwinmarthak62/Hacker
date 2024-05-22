import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Config } from 'datatables.net';
import { NewStoriesService } from '../../Services/new-stories.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-new-stories',
  standalone: true,
  imports: [DataTablesModule, CommonModule, HttpClientModule],
  templateUrl: './new-stories.component.html',
  styleUrls: ['./new-stories.component.css']
})
export class NewStoriesComponent implements OnInit {
  lstValue: any[] = []; 
  dtOptions: Config = {};

  constructor(private newStoriesService: NewStoriesService) { }

  loadNewStories(): void {
    this.newStoriesService.getNewStories(1, 200).subscribe({
      next: (res: any) => {
        this.lstValue = res.newStories;
        console.log("lstValue updated", this.lstValue);
      },
      error: (error) => {
        console.error("Error fetching new stories", error);
      }
    });
  }

  ngOnInit(): void {
    this.loadNewStories();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }
}
