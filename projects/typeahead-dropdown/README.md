# community-ion-autocomplete
## Ionic 7 Angular 16

community-ion-autocomplete is a Ionic 7 Angular 16 library. It's a dropdown that opens in a modal with searchbar.

## Installation


```bash
npm install community-ion-autocomplete
```

## Usage

```ts
import { CommunityIonAutocompleteModule } from 'community-ion-autocomplete';
import { NgModule} from '@angular/core';

@NgModule({
  imports: [
    ...
    CommunityIonAutocompleteModule
  ],

})

# .ts
public municipalities = {};

# .html
<community-ion-autocomplete [items]="items" [(selectedItem)]="model"></community-ion-autocomplete>

```

# Properties
- items: Array<Object> => 
   - [{value: string})]

- selectedItem: Object || Array<Object> => (ngModel)
   - value: string

- title (optional): string => (name of label input)
    default : ''

- mutiple (optional): boolean => (select several items)
    default : false

