import { TestBed } from '@angular/core/testing';

import { NewStoriesService } from './new-stories.service';

describe('NewStoriesService', () => {
  let service: NewStoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewStoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
