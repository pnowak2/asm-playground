import { Injectable } from '@angular/core';
import { Rectangle } from './../../../model/rectangle';
import { PlacementStrategy, PlacementOptions } from './placement.strategy';

@Injectable()
export class BottomRightPlacementStrategy implements PlacementStrategy {
  getId() {
    return 'bottom-right';
  }

  calculate(anchor: Rectangle, element: Rectangle, options: PlacementOptions): Rectangle {
    const placedRect = element
      .clone()
      .moveTo(anchor.leftBottom(), element.leftTop())
      .translateX(-options.offset)
      .translateY(options.offset);

    if (options.flip && placedRect.overflowsRight(options.parent)) {
      placedRect.flipY(anchor.center().x);
    }

    if (options.flip && placedRect.overflowsBottom(options.parent)) {
      placedRect.flipX(anchor.center().y);
    }

    if (options.constrainToParent) {
      placedRect.translateInside(options.parent);
    }

    return placedRect;
  }
}