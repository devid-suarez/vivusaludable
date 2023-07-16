import {  HammerGestureConfig } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

export class HammerConfig extends HammerGestureConfig {
  override buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      touchAction: 'pan-y',
    });

    mc.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    return mc;
  }
}