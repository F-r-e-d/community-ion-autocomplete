import { TestBed } from '@angular/core/testing';

import { TypeaheadDropdownService } from './typeahead-dropdown.service';

describe('TypeaheadDropdownService', () => {
  let service: TypeaheadDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeaheadDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
