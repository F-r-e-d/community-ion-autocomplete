import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityIonAutocompleteComponent } from './community-ion-autocomplete.component';

describe('CommunityIonAutocompleteComponent', () => {
  let component: CommunityIonAutocompleteComponent;
  let fixture: ComponentFixture<CommunityIonAutocompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityIonAutocompleteComponent]
    });
    fixture = TestBed.createComponent(CommunityIonAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
