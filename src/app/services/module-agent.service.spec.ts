import { TestBed } from '@angular/core/testing';

import { ModuleAgentService } from './module-agent.service';

describe('ModuleAgentService', () => {
  let service: ModuleAgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleAgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
