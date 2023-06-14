import { Component, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {

  messages = [
    {
      from: 'Nirav joshi (nbj@gmail.com)',
      image: 'assets/images/users/1.jpg',
      subject: 'Material angular',
      content: 'This is the material angular template'
    },
    {
      from: 'Sunil joshi (sbj@gmail.com)',
      image: 'assets/images/users/2.jpg',
      subject: 'Wrappixel',
      content: 'We have wrappixel launched'
    },
    {
      from: 'Vishal Bhatt (bht@gmail.com)',
      image: 'assets/images/users/3.jpg',
      subject: 'Task list',
      content: 'This is the latest task hasbeen done'
    }
  ];
	ngAfterViewInit() { }

}
