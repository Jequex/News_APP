import React, {Fragment} from 'react';
import NewsList from '../components/news/NewsList';
import SingleNews from '../components/news/SingleNews';

const Homepage = () => {
    return (
        <Fragment>
            <SingleNews />
            <NewsList />
        </Fragment>
    )
}

export default Homepage
