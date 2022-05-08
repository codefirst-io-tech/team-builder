import { TestBed } from '@angular/core/testing';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { TeamBuilderService } from './team-builder.service';

describe('TeamBuilderService', () => {
  let service: TeamBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NzNotificationModule]
    });
    service = TestBed.inject(TeamBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
