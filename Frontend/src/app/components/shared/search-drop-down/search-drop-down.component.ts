import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Option } from 'src/app/interface/option.interface';
import { SearchQuery } from 'src/app/types/search-query.type';

@Component({
  selector: 'app-search-drop-down',
  templateUrl: './search-drop-down.component.html',
  styleUrls: ['./search-drop-down.component.sass']
})
export class SearchDropDownComponent<T = unknown> implements OnInit, OnDestroy {

  @Input() selectText: string;
  @Input() options: Option<SearchQuery<T>>[] = []
  @Input() formControlName: string;
  @Output() searchQuery: EventEmitter<{ [key: string]: string }> = new EventEmitter<{ [key: string]: string }>()
  constructor() { }

  readonly form: FormGroup = new FormGroup({
    search: new FormControl('', { validators: Validators.required })
  });
  private searchSubscription: Subscription;
  selectedKey: keyof T
  ngOnInit(): void {
    this.form.get('search').valueChanges.pipe().subscribe(value => {
      if (value && this.selectedKey) {
        this.searchQuery.emit({ [this.selectedKey]: value })
      }
    })
  }

  onSelectOption(value: keyof T): void {
    this.form.get('search').setValue('');
    this.selectedKey = value;
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }


}
