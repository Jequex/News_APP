import React, {Fragment} from 'react';
import Filter from '../components/layout/Filter';
import NewsList from '../components/news/NewsList';

const Homepage = () => {
    return (
        <Fragment>
            <Filter />
            <NewsList />
        </Fragment>
    )
}

export default Homepage
