import React from 'react';

import classes from './Layout.css';

import Wrapper from '../HigherOrder/Wrapper/Wrapper';

const layout = (props) => {
  return (
    <Wrapper>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={ classes.main }>
        { props.children }
      </main>
    </Wrapper>
  );
}

export default layout;