import { Component, OnChanges } from '@angular/core';

/**
 * @title Programmatically setting the free drag position
 */
@Component({
  selector: 'cdk-drag-drop-free-drag-position-example',
  templateUrl: 'cdk-drag-drop-free-drag-position-example.html',
  styleUrls: ['cdk-drag-drop-free-drag-position-example.css'],
})
export class CdkDragDropFreeDragPositionExample implements OnChanges {

  dragElements = [
    {
      'x': 0, 'y': 0, 'r': 0
    },
    {
      'x': 10, 'y': 0, 'r': 0
    },
    {
      'x': 100
      ,
      'y': 150
      ,
      'r':
        0
    },
    {
      'x': 20, 'y': 30, 'r': 0
    },
    {
      'x': 0, 'y': 0, 'r': 0
    }
  ];

  dragPosition = { x: 0, y: 0 };

  ngOnChanges() {
    this.dragElements = this.dragElements;
  }

  changePosition() {
    this.dragPosition = { x: this.dragPosition.x + 50, y: this.dragPosition.y + 50 };
  }

  update(index: any, event: any) {
    console.log(event, index);
    this.dragElements[index].x += event.distance.x;
    this.dragElements[index].y += event.distance.y;
  }

  rotate(i: number) {
    const temp = this.dragElements[i].x;
    this.dragElements[i].x = this.dragElements[i].y;
    this.dragElements[i].y = temp;
    this.ngOnChanges();
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
