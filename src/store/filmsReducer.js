const initialState = {
    data: [],
    allItems: [],
    likesItems: [],
    switchItems: true,
}

const GET_DATA = 'GET_DATA';
const SORTING_DATA =  'SORTING_DATA';
const LIKE = 'LIKE';
const DELETE = 'DELETE';
const SORTING = 'SORTING';

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
            const index = action.payload;
            const newState = state.allItems;

            if(!newState[index].like) {
                newState[index].like = true;
                state.likesItems.push(newState[index]);
            } else {
                newState[index].like = false;
                for(let i = 0; i < state.likesItems.length; i++) {
                    if(newState[index] === state.likesItems[i]) {
                        state.likesItems.splice(i, 1);
                    }
                }
            }
            return {...state, allItems: newState};

        case DELETE: 
            const indexDel = action.payload;
            const newStateDel = state.allItems;
            
            for(let i = 0; i < state.likesItems.length; i++) {
                if(newStateDel[indexDel] === state.likesItems[i]) {
                    state.likesItems.splice(i, 1);
                }
            }
            newStateDel.splice(indexDel, 1);
            return {...state, allItems: newStateDel};

        case SORTING:
            return {...state, switchItems: !state.switchItems};
        

        default:
            return state;
    }
}

export const getDataAction = (payload) => ({ type: GET_DATA, payload });
export const sortingDataAction = () => ({ type: SORTING_DATA });
export const likeAction = (payload) => ({ type: LIKE, payload });
export const deleteAction = (payload) => ({ type: DELETE, payload });
export const sortingAction = () => ({ type: SORTING })