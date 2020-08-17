import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() item: any;
  @Input() index:number;
  @Output() rotate: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('checking item ',this.item);
   }

  ngOnInit(): void {
  }

  rotateElement() {
    this.rotate.emit(this.index);
  }
}
