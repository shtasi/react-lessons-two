import React, { Fragment } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css'

const layout = (props) => {
  return (<Fragment>
    <div>
      <Toolbar />
    </div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Fragment>)
};

export default layout;