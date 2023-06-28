import { MapNamePipe } from './pipes/mapName/map-name.pipe';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TypeaheadDropdownComponent } from './typeahead-dropdown.component';
import { CommunityIonAutocompleteComponent } from './community-ion-autocomplete/community-ion-autocomplete.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    TypeaheadDropdownComponent,
    CommunityIonAutocompleteComponent,
    MapNamePipe

  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    TypeaheadDropdownComponent,
    CommunityIonAutocompleteComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CommunityIonAutocompleteModule { }
