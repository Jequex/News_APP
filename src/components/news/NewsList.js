import React, {useEffect, useContext} from 'react';
import NewsContext from '../../contexts/news/newsContext';
import NewsItem from '../news/NewsItem';
import Spinner from '../layout/Spinner';

const NewsList = () => {
    const newsContext = useContext(NewsContext);

    const {getNews, news, Loading} = newsContext;

    useEffect(() => {
        getNews();
    // eslint-disable-next-line
    }, [])

    if(Loading){
        return(<Spinner />)
    }else{
        return (
            <div>
                {news.map(i => <NewsItem 
                key={i.id} 
                news={i}
                />)}
            </div>
        )
    }
}

export default NewsList
