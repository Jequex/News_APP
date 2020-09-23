import React, {useEffect, useContext} from 'react';
import NewsContext from '../../contexts/news/newsContext';
import NewsItem from '../news/NewsItem';
import {v4 as uuidv4} from 'uuid';

const NewsList = () => {
    const newsContext = useContext(NewsContext);

    const {getNews, news} = newsContext;

    useEffect(() => {
        getNews()
    })

    return (
        <div>
            {news.map(i => <NewsItem key={uuidv4()} title={i.title}/>)}
        </div>
    )
}

export default NewsList
