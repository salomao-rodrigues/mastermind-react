import { createStore } from 'redux';
import config from '../config';
import * as ActionTypes from '../constants/ActionTypes';

/**
 * Create a secret mastermind code
 * 
 * Given a secret length N, returns an array of N random numbers [0..N-1]
 * 
 * @param {int} secretSize
 * @param {int} availableColors
 *
 * @return {int[]}
 */
const generateSecret = (secretSize, availableColors) => {
  const bagOfNumbers = Object.keys(Array(availableColors  ).fill(null));
  const code = [];

  while (0 < secretSize--) {
    const randomIndex = Math.floor(Math.random() * bagOfNumbers.length);
    code.push(+bagOfNumbers.splice(randomIndex, 1)[0]);
  }

  return code;
}

const initialState = {
  activeSlot: 0,
  activeRow: 0,
  rows: [],
  results: [],
  secret: generateSecret(config.secretSize, config.availableColors),
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
export default function mastermind(state = initialState, action) {
  if (action.type === ActionTypes.PLAY) {
    return play(state, action);
  }

  return state;
}
