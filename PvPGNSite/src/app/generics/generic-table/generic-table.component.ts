import { Component, OnInit, Input } from '@angular/core';
import { mapCallback } from "app/generics/map-callback.interface";

export enum ColumnType {
    FIELD = 0
}

export enum ColumnSortMode {
  NONE = 0,
  ASC = 1,
  DESC = 2
}

export class Column {
  sortMode: ColumnSortMode = ColumnSortMode.NONE;
  columnType: ColumnType;
  header: string;
  field: string;

  constructor(
    columnType: ColumnType,
    header: string,
    field: string,
  ) {
    this.sortMode = ColumnSortMode.NONE;
    this.columnType = columnType;
    this.header = header;
    this.field = field;
  }
}

export class TableConfig<T> {
  headerText : string;
  items : Array<T> = null;
  columns: Column[] = [];
}

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent<T> implements OnInit {
  @Input() config : TableConfig<T>;

  public ColumnSortMode = ColumnSortMode;
  public order: string;
  public reverse: boolean = false;

  constructor() { }

  ngOnInit() { }

  changeSort(col: Column) {
    if(this.order == col.field) {
      this.reverse = !this.reverse;
      if(this.reverse)
        col.sortMode = ColumnSortMode.DESC;
      else
        col.sortMode = ColumnSortMode.ASC;
    }
    else {
      this.config.columns.forEach(i => i.sortMode = ColumnSortMode.NONE);
      col.sortMode = ColumnSortMode.ASC;
      this.order = col.field;
    }
  }

}
