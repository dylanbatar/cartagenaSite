import { Component, Input, OnInit } from '@angular/core';
import { ISite } from 'src/app/interfaces/ISite';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  @Input() data: ISite[] = [];
  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
