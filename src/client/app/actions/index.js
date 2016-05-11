import * as ActionTypes from '../constants/ActionTypes';

export function play(color) {
  return { type: ActionTypes.PLAY, color }
}
