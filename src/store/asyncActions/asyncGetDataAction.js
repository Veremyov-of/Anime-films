import { getDataAction, sortingDataAction } from "../filmsReducer";

export const asyncGetDataAction = () => {
    return function(dispatch) {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(json => dispatch(getDataAction(json)))
        .then(() => dispatch(sortingDataAction()))
    }
}