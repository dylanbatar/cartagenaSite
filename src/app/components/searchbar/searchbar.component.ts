import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  value: string = '';
  @Output() filterOutput = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  dispatchFilter() {
    this.filterOutput.emit(this.value);
  }
}
