// Definir tipos para acciones
export const FETCH_JOKE_REQUEST = 'FETCH_JOKE_REQUEST';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_JOKE_FAILURE = 'FETCH_JOKE_FAILURE';

interface FetchJokeRequestAction {
  type: typeof FETCH_JOKE_REQUEST;
}

interface FetchJokeSuccessAction {
  type: typeof FETCH_JOKE_SUCCESS;
  payload: string;
}

interface FetchJokeFailureAction {
  type: typeof FETCH_JOKE_FAILURE;
  payload: string;
}

export type JokeActions =
  | FetchJokeRequestAction
  | FetchJokeSuccessAction
  | FetchJokeFailureAction;

// Definir el tipo para el estado de la aplicación
export interface JokeState {
  loading: boolean;
  joke: string;
  error: string;
}
