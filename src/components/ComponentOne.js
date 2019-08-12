import React from 'react';

const ComponentOne = (props) => {
    function handleClick(ev) {
        props
    }

    return (
        <div>
            <p>this is one component</p>
            <button onClick={handleClick}>change</button>

        </div>
    )

}

export default ComponentOne;