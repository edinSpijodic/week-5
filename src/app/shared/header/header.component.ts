import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'cm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() title: string;
  @Output() addButtonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addNew() {
    this.addButtonClicked.emit();
  }

  ngOnDestroy() {
    this.addButtonClicked.unsubscribe();
  }

}
