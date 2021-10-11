import { getDataAction, sortingDataAction, loadingAction } from "../filmsReducer";

export const asyncGetDataAction = () => {
    return function(dispatch) {
        dispatch(loadingAction());
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(json => dispatch(getDataAction(json)))
        .then(() => dispatch(sortingDataAction()))
        .then(() => dispatch(loadingAction()))
    }
}