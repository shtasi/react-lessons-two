import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
  return (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="\" active="true">
      Burger builder
    </NavigationItem>
    <NavigationItem link="\">
      Checkout page
    </NavigationItem>
  </ul>
  );
};

export default navigationItems;