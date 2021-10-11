const initialState = {
    data: [],
    allItems: [],
    likesItems: [],
}

const GET_DATA = 'GET_DATA';
const SORTING_DATA =  'SORTING_DATA';

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
            return {...state, allItems: result, data: []}

        default:
            return state;
    }
}

export const getDataAction = (payload) => ({ type: GET_DATA, payload });
export const sortingDataAction = () => ({ type: SORTING_DATA });