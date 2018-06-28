import { TestBed, inject } from '@angular/core/testing';

import { ServerInfraAppService } from './server-infra-app.service';

describe('ServerInfraAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerInfraAppService]
    });
  });

  it('should be created', inject([ServerInfraAppService], (service: ServerInfraAppService) => {
    expect(service).toBeTruthy();
  }));
});
