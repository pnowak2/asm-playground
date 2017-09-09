import { MenuItemModel } from './../api/model/menu-item.model';
import { Component, ViewChild, Input, EventEmitter, Output, ContentChild, TemplateRef } from '@angular/core';
import { MenuItem } from '../api/interface/menu-item';

@Component({
  selector: 'dm-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements MenuItem {
  @Input() id: string;
  @Input() label: string;
  @Input() iconClass: string;
  @Input() disabled: boolean;
  @Input() selected: boolean;
  @Output() select = new EventEmitter<MenuItem>();

  @ContentChild(TemplateRef)
  private customContentTpl: TemplateRef<any>;

  constructor() {
    const model = MenuItemModel.create(this);
  }

  get tpl() : TemplateRef<any> {
    return this.customContentTpl;
  }

  get hasCustomTemplate(): boolean {
    return this.tpl !== undefined;
  }

  didMenuItemClick(evt) {
   this.select.next(this);
  }
}
