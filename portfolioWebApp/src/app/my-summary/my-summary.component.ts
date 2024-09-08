import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-my-summary',
  standalone: true,
  imports: [],
  templateUrl: './my-summary.component.html',
  styleUrl: './my-summary.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class MySummaryComponent {

}