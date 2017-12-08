import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empty-card',
  template: `
    <div class="card">
      <p>{{title}}</p>
      <i class="material-icons">flip_to_front</i>
    </div>
  `,
  styleUrls: ['./empty-card.component.scss']
})
export class EmptyCardComponent implements OnInit {

  @Input() title: string = 'Feature Coming Soon!'

  constructor() { }

  ngOnInit() {
  }

}
