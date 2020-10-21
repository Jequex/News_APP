import React, {Fragment} from 'react';
import Spinnerf from './spinner.gif';

const Spinner = () => {
    return (
        <Fragment>
            <img src={Spinnerf} alt='spinner'  style={{width: "200px", margin: "auto", display: "block"}}/>
            <h3 className="text-center">Loading.....</h3>
        </Fragment>
    )
}

export default Spinner
