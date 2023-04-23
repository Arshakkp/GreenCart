import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddressModel } from 'src/app/model/address';

@Component({
  selector: 'app-address-view',
  templateUrl: './address-view.component.html',
  styleUrls: ['./address-view.component.scss']
})
export class AddressViewComponent {
  @Input() address?: AddressModel;
  @Input() isSelected: boolean = false;
  @Input() index?: number;
  @Output() onSelect=new EventEmitter<number>();

onClick(){
  this.onSelect.emit(this.index)
}

}
