import {CLEAR_SINGLE, GET_NEWS, SET_LOADING, SET_SINGLE_NEWS} from '../types';

export default (state, action) => {
    switch(action.type){
        case GET_NEWS:
            return {
                ...state,
                news: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_SINGLE_NEWS:
            return {
                ...state,
                singleNews : state.news.filter(news => news.id === action.payload)
            }
        case CLEAR_SINGLE:
            return {
                ...state,
                singleNews : null
            }
        default:
            return {state}
    }
}