import React, {useReducer} from 'react';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import NewsReducer from './newsReducer';
import NewsContext from './newsContext';
import { GET_NEWS, SET_LOADING, SET_SINGLE_NEWS, CLEAR_SINGLE } from '../types';

require('dotenv').config();

let key;

if (process.env.NODE_ENV !== 'production') {
    key = process.env.REACT_APP_KEY
} else {
    key = process.env.APP_KEY
}

const NewsState = props => {
    const initialState = {
        news: [],
        singleNews : null,
        loading: false
    }

    const [state, dispatch] = useReducer(NewsReducer, initialState);

    const getNews = async () => {
        setLoading()

        const res = await axios.get('https://newsapi.org/v2/top-headlines?country=ng&apiKey=a8a72bfda167438d9ae4c523da4c7810')

        dispatch({
            type: GET_NEWS,
            payload: res.data.articles.map(i => ({
                author: i.author, 
                title:i.title, 
                description: i.description,
                urlToImage: i.urlToImage,
                content: i.content,
                id: uuidv4()
            }))
        })
    }

    const setSingle = (id) => dispatch({ type: SET_SINGLE_NEWS, payload: id })
    
    const clearSingle = () => dispatch({type: CLEAR_SINGLE})

    const setLoading = () => dispatch({ type: SET_LOADING })


    return(
        <NewsContext.Provider
        value={{
            news: state.news,
            Loading: state.loading,
            singleNews: state.singleNews,
                setSingle,
            clearSingle,
            getNews,
            setLoading,
        }}>
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsState;