import React, {Fragment, useState, useEffect} from 'react';

const Filter = () => {
    return (
        <Fragment>
            <div className="bg-dark p-2 d-flex flex-row justify-content-between">
                <div className="text-light">Filter By:</div>
                <div>
                    <form>
                        <select name="category" className="mr-2" defaultValue="__choose a country__">
                        </select>
                        <input type="submit"></input>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Filter
