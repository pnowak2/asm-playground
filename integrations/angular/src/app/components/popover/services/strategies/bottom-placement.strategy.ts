import { PlacementStrategy } from './../../interface/placement-strategy';

import { Point } from './../../../../shared/geometry/model/point';
import { Rectangle } from './../../../../shared/geometry/model/rectangle';
import { PlacementService } from './../../../../shared/geometry/services/placement/placement.service';

import { PopoverVM } from './../../viewmodel/popover.viewmodel';

export class BottomPlacementStrategy implements PlacementStrategy {
  constructor(private placementService: PlacementService) { }

  getId(): string {
    return 'bottom';
  }

  calculate(anchorRect: Rectangle, elementRect: Rectangle, arrowRect: Rectangle): PopoverVM {
    const positionedElementRect: Rectangle = this.placementService.place(
      anchorRect,
      elementRect, {
        placementId: this.getId(),
        offsetAlong: 15
      }
    );

    const isFlipped = this.isFlipped(anchorRect, positionedElementRect);
    const anchorLocalRect = anchorRect.relativeTo(positionedElementRect);

    const positionedArrowRect = arrowRect
      .moveXTo(anchorLocalRect.centerBottom().x, arrowRect.leftTop())
      .moveYTo(0, arrowRect.centerBottom());

    if (isFlipped) {
      positionedArrowRect
        .moveYTo(positionedElementRect.height, positionedArrowRect.centerTop());
    }

    return PopoverVM.create(
      isFlipped ? 'top' : 'bottom',
      positionedElementRect.leftTop(),
      positionedArrowRect.leftTop()
    );
  }

  isFlipped(anchorRect: Rectangle, positionedElementRect: Rectangle): boolean {
    return positionedElementRect.isAbove(anchorRect.leftTop());
  }
}
