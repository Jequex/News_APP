import React, {useReducer} from 'react';
import axios from 'axios';
import NewsReducer from './newsReducer';
import NewsContext from './newsContext';
import { GET_NEWS } from '../types';

require('dotenv').config()

const NewsState = props => {
    const initialState = {
        news: []
    }

    const [state, dispatch] = useReducer(NewsReducer, initialState);

    const getNews = async () => {
        // setLoading()

        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_KEY}`)

        dispatch({
            type: GET_NEWS,
            payload: res.data.articles
        })
    }


    return(
        <NewsContext.Provider
        value={{
            news: state.news,
            getNews
        }}>
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsState;