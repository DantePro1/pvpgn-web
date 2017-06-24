import { Component, OnInit, Input } from '@angular/core';
import { mapCallback } from "app/generics/map-callback.interface";

export enum ColumnType {
    FIELD = 0
}

export class GobColumn {
    constructor (
        columnType: ColumnType,
        header: string,
        field: string,
     ) { }
}

export class TableConfig<T> {
  headerText : string;
  items : Array<T> = null;
  columns: GobColumn[] = [];
}

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent<T> implements OnInit {
  @Input() config : TableConfig<T>;

  constructor() { }

  ngOnInit() {
  }

}
