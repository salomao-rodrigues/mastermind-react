import { createStore } from 'redux';
import config from './config';
import * as ActionTypes from './constants/ActionTypes';

/**
 * Create a secret mastermind code
 * 
 * Given an array of colors, returns an array of a specified length containing
 * random indexes of the colors array with no repetitions
 * 
 * @param {int[]} colors
 * @param {int}   secretSize
 *
 * @return {int[]}
 */
const generateSecret = (colors, secretSize) => {
  const keys = Object.keys(colors, secretSize);
  const code = [];

  while (0 < secretSize--) {
    const randomIndex = Math.floor(Math.random() * keys.length);
    code.push(+keys.splice(randomIndex, 1)[0]);
  }

  return code;
}

const iniState = {
  activeSlot: 0,
  activeRow: 0,
  rows: [],
  results: [],
  secret: generateSecret(config.colors, config.secretSize),
  solved: false,
  lost: false
};

const getNewRow = () => [null, null, null, null];

const getResult = (secret, attempt) => {
  let i;
  let nCorrect = 0;
  let nExist = 0;

  for (i in secret) {
    if (attempt[i] === secret[i]) {
      nCorrect += 1;
    } else if (attempt.indexOf(secret[i]) > -1) {
      nExist += 1;
    }
  }

  const nIncorrect = secret.length - nCorrect - nExist;

  return { nCorrect, nExist, nIncorrect };
}

const play = (state, action) => {
  const rows = [...state.rows];
  const results = [...state.results];
  let newActiveSlot = state.activeSlot + 1;
  let newActiveRow = state.activeRow;
  let solved = false;
  let lost = false;

  if (!rows[state.activeRow]) {
    rows[state.activeRow] = getNewRow();
  }

  rows[state.activeRow][state.activeSlot] = action.color;

  if (newActiveSlot >= config.secretSize) {
    let result = getResult(state.secret, rows[state.activeRow]);

    results[state.activeRow] = result;
    solved = (result.nCorrect === config.secretSize);
    lost = (!solved && (state.activeRow === config.maxRows - 1));

    newActiveSlot = 0;
    newActiveRow = Math.min(state.activeRow + 1, config.maxRows - 1);
  }

  return Object.assign({}, state, {
    activeSlot: newActiveSlot,
    activeRow: newActiveRow,
    rows,
    results,
    solved,
    lost
  });
}

/**
 * Store reducer
 *
 * @param  {object} state
 * @param  {object} action
 *
 * @return {object}
 */
const mastermind = (state = iniState, action) => {
  if (action.type === ActionTypes.PLAY) {
    return play(state, action);
  }

  return state;
}

const store = createStore(mastermind);

export default store;
