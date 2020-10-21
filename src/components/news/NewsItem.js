import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NewsContext from '../../contexts/news/newsContext'

const NewsItem = ({ news }) => {
    const newsContext = useContext(NewsContext)

    const { title, description, author, id } = news;
    const {setSingle} = newsContext;
    const onClick = () => {setSingle(id)}

    return (
        <blockquote className="blockquote breadcrumb grey lighten-4">
            {title && (<p className="mb-0 black-text"><strong>{title}</strong></p>)}
            {description && (<p className="mb-0 black-text"><small>{description}</small></p>)}
            {author && (<footer className="blockquote-footer ml-2"><cite>
                {author}{' '}</cite></footer>)}
            <button className="btn btn-sm bg-primary" onClick={onClick}>more...</button>
        </blockquote>
    )
}

NewsItem.propTypes = {
    news: PropTypes.object.isRequired,
}

export default NewsItem
