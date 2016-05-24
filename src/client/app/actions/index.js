import * as ActionTypes from '../constants/ActionTypes';

export function play(color) {
  return { type: ActionTypes.PLAY, color };
};

export function newGame() {
  return { type: ActionTypes.NEW_GAME };
};
