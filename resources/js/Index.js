import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';

const Index = () => {
    return (
        <Fragment>
            <Menu></Menu>
        </Fragment>
    );
};

export default Index;


if (document.getElementById("parent")) {
    ReactDOM.render(<Index />, document.getElementById("parent"));
}


