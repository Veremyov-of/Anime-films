const initialState = {
    data: [],
    allItems: [],
    likesItems: [],
    switchItems: true,
    loading: false
}

const GET_DATA = 'GET_DATA';
const SORTING_DATA =  'SORTING_DATA';
const LIKE = 'LIKE';
const DELETE = 'DELETE';
const SORTING = 'SORTING';
const LOADING = 'LOADING';

export const filmsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA: 
            return {...state, data: action.payload}

        case SORTING_DATA:
            const data = state.data;
            const result = [];
            function NewItem(title, image, release_date, producer) {
                this.title = title;
                this.image = image;
                this.release_date = release_date;
                this.producer = producer;
                this.like = false
            }
            for(let i = 0; i < data.length; i++) {
                let { title, image, release_date, producer } = data[i];
                let item = new NewItem(title, image, release_date, producer);
                result.push(item);
            }
            return {...state, allItems: result, data: []};

        case LIKE:
            const newState = state.allItems;
            for(let i = 0; i < newState.length; i++) {
                if(action.payload === newState[i].title) {
                    newState[i].like = !newState[i].like;
                    if(newState[i].like) {
                        state.likesItems.push(newState[i]);
                    } else {
                        for(let i = 0; i < state.likesItems.length; i++) {
                            if(action.payload === state.likesItems[i].title) {
                                state.likesItems.splice(i, 1);
                            }
                        }
                    }
                }
            }
            return {...state, allItems: newState}
        

        case DELETE: 
            const newStateDel = state.allItems;
            for(let i = 0; i < newStateDel.length; i++) {
                if(action.payload === newStateDel[i].title) {
                    newStateDel.splice(i, 1);
                }
            }
            for(let i = 0; i < state.likesItems.length; i++) {
                if(action.payload === state.likesItems[i].title) {
                    state.likesItems.splice(i, 1);
                }
            }
            return {...state, allItems: newStateDel}


        case SORTING:
            return {...state, switchItems: !state.switchItems};

        case LOADING:
            return {...state, loading: !state.loading}
        

        default:
            return state;
    }
}

export const getDataAction = (payload) => ({ type: GET_DATA, payload });
export const sortingDataAction = () => ({ type: SORTING_DATA });
export const likeAction = (payload) => ({ type: LIKE, payload });
export const deleteAction = (payload) => ({ type: DELETE, payload });
export const sortingAction = () => ({ type: SORTING });
export const loadingAction = () => ({ type: LOADING });