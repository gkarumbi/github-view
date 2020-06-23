import { TestBed } from '@angular/core/testing';

import { GithubconnectService } from './githubconnect.service';

describe('GithubconnectService', () => {
  let service: GithubconnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubconnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
