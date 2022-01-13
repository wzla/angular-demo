import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent{
  @Input() price!: number;
  @Output() notify = new EventEmitter();

  sendNotify(price: number) {
    this.notify.emit(price)
  }
}
