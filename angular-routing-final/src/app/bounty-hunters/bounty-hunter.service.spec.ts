/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { BountyHunterService } from './bounty-hunter.service';

describe('Service: BountyHunter', () => {
  beforeEach(() => {
    addProviders([BountyHunterService]);
  });

  it('should ...',
    inject([BountyHunterService],
      (service: BountyHunterService) => {
        expect(service).toBeTruthy();
      }));
});
