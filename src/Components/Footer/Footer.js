import React from 'react';
import classes from '../../App.scss';

const footer = props => (
    <footer>

        <p className={[classes.copyright, props.bootstrapModule['text-center']].join(' ')}>
            &copy; 2018 React Assignment Two
        </p>

    </footer>
);

export default footer;