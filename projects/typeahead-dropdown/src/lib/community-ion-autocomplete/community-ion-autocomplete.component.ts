import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { IonModal } from '@ionic/angular';
import { cloneDeep } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'community-ion-autocomplete',
  templateUrl: './community-ion-autocomplete.component.html',
  styleUrls: ['./community-ion-autocomplete.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CommunityIonAutocompleteComponent {
  @Input() items: any[] = [];

  @Input() selectedItems: any;
  @Output() selectedItemsChange = new EventEmitter<
    Array<Record<string, any>> | Record<string, any>
  >();

  @Input() title = 'Sélectionnez';

  @Input() multiple = false;

  @Output() selectionCancel = new EventEmitter<void>();
  @Output() selectionChange = new EventEmitter<
    Array<Record<string, any>> | Record<string, any>
  >();
  // modelValue: any;

  // @Input()
  // get model() {
  //      return this.modelValue;
  // }

  // set model(value: any) {
  //   this.modelValue = value;
  //   this.modelChange.emit(this.modelValue);
  // }

  // @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onBlur: EventEmitter<any> = new EventEmitter<any>();

  @Input() obj: any;

  @ViewChild('modal', { static: true }) modal!: IonModal;

  uuid: string = '';

  filteredItems: any[] = [];
  workingSelectedValues: Array<Record<string, any>> | Record<string, any> = [];

  selectionChanged(value: any) {
    this.modal.dismiss();
  }

  compareWith(o1: { name: string }, o2: { name: string }) {
    return o1 && o2 ? o1.name === o2.name : o1 === o2;
  }

  ngOnInit() {
    this.uuid = uuidv4();

    if (this.items) {
      this.filteredItems = cloneDeep(this.items);
    }

    if (this.selectedItems) {
      if (Array.isArray(this.selectedItems)) {
        this.workingSelectedValues = [...this.selectedItems];
      } else {
        this.workingSelectedValues = cloneDeep(this.selectedItems);
      }
    }
  }

  trackItems(index: number, item: any) {
    return item.name;
  }

  cancelChanges() {
    this.selectionCancel.emit();
    this.modal.dismiss();
  }

  confirmChanges() {
    this.selectionChange.emit(this.workingSelectedValues);

    this.selectedItemsChange.emit(this.workingSelectedValues);

    this.modal.dismiss();
  }

  searchbarInput(ev: any) {
    this.filterList(ev.target.value);
  }

  /**
   * Update the rendered view with
   * the provided search query. If no
   * query is provided, all data
   * will be rendered.
   */
  filterList(searchQuery: string | undefined) {
    /**
     * If no search query is defined,
     * return all options.
     */
    if (searchQuery === undefined) {
      this.filteredItems = [...this.items];
    } else {
      /**
       * Otherwise, normalize the search
       * query and check to see which items
       * contain the search query as a substring.
       */
      const normalizedQuery = searchQuery.toLowerCase();
      this.filteredItems = this.items.filter((item) => {
        return item.name.toLowerCase().includes(normalizedQuery);
      });
    }
  }

  isChecked(value: Record<string, any>) {
    if (this.multiple) {
      return this.workingSelectedValues.find(
        (item: Record<string, any>) => item.value === value.name
      );
    } else {
      // @ts-ignore
      return this.workingSelectedValues['value'] === value?.name;
    }
  }

  checkboxChange(ev: any) {
    const { checked, value } = ev.detail;

    if (this.multiple === true && Array.isArray(this.workingSelectedValues)) {
      if (checked) {
        this.workingSelectedValues = [
          ...this.workingSelectedValues,
          { value: value.name },
        ];
      } else {
        this.workingSelectedValues = this.workingSelectedValues.filter(
          (item) => item.value !== value.name
        );
      }
    } else {
      if (checked) {
        this.workingSelectedValues = { value: value.name };
      } else {
        this.workingSelectedValues = {};
      }
      this.confirmChanges();
    }
  }
}
