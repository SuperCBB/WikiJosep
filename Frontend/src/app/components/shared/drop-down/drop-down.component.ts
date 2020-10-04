import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option } from 'src/app/interface/option.interface';
import * as _ from 'lodash';
@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.sass']
})
export class DropDownComponent<T = unknown> implements OnInit {
  @Input() selectText = 'Seleccione una opción'
  @Input() formControlName: string;
  @Input() options: Option<T>[] = [];
  @Output() select: EventEmitter<T> = new EventEmitter<T>()

  constructor() { }
  selectedOption: Option<T>;

  ngOnInit(): void {
    this.selectedOption = this.getSelectedOption();
  }

  private getSelectedOption(): Option<T> {
    return this.options.find(option => option.selected);
  }

  onSelectOption(option: Option<T>): void{
    if(!_.isEqual(option, this.selectedOption)){
      option.selected = true;
      this.selectedOption = option;
      this.select.emit(this.selectedOption.value);
    }
  }

}
