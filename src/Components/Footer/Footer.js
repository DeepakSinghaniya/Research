import React from 'react';
import classes from '../../App.scss';
import bootstrap from '../../scss/bootstrap.scss';

const footer = props => (
    <footer>

        <p className={[classes.copyright, bootstrap['text-center']].join(' ')}>
            &copy; 2018 React Assignment Two
        </p>

    </footer>
);

export default footer;