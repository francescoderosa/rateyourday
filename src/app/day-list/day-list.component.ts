import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Day } from '../lib/day'

@Component({
  selector: 'app-day-list',
  templateUrl: './day-list.component.html',
  styleUrls: ['./day-list.component.css']
})
export class DayListComponent implements OnInit {

  selectedDay:Day;
  showAdd = false;
  pastDays:Day[];

  constructor() { }

  ngOnInit() {
    let pastDaysFromSouce:Day[]=[
      {id:1, day:new Date(), value:9, comment:'I\'m a lucky man!'},
      {id:2, day:new Date(), value:8, comment:'Oh, it\'s yesterday!!'},
      {id:3, day:new Date(), value:10, comment:'It was Sunday...'}
    ];
    this.pastDays = pastDaysFromSouce;
  }
  onSelect(selDay:Day): void {
    this.selectedDay = selDay;
  }
  onAdd():void{
    this.showAdd = true;
  }
  onSubmit(newDay):void {
    this.pastDays.push({id:newDay.value.id, day:newDay.value.day, value:newDay.value.value, comment:newDay.value.comment});
  }

}
