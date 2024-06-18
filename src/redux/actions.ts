import {Dispatch} from 'redux';
import {
  FETCH_JOKE_REQUEST,
  FETCH_JOKE_SUCCESS,
  FETCH_JOKE_FAILURE,
  JokeActions,
} from './types';

export const fetchJokeRequest = (): JokeActions => ({
  type: FETCH_JOKE_REQUEST,
});

export const fetchJokeSuccess = (joke: string): JokeActions => ({
  type: FETCH_JOKE_SUCCESS,
  payload: joke,
});

export const fetchJokeFailure = (error: string): JokeActions => ({
  type: FETCH_JOKE_FAILURE,
  payload: error,
});

export const fetchJoke = () => {
  return async (dispatch: Dispatch<JokeActions>) => {
    dispatch(fetchJokeRequest());
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      dispatch(fetchJokeSuccess(data.value));
    } catch (error: any) {
      dispatch(fetchJokeFailure(error.message));
    }
  };
};
