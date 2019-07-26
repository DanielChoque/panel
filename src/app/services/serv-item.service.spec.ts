import { TestBed } from '@angular/core/testing';

import { ServItemService } from './serv-item.service';

describe('ServItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServItemService = TestBed.get(ServItemService);
    expect(service).toBeTruthy();
  });
});
