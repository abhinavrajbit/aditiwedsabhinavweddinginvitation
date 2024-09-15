import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events = [
    { date: '2024-09-20', name: 'Wedding Ceremony', time: '5:00 PM' },
    { date: '2024-09-21', name: 'Reception', time: '7:00 PM' }
  ];
}
