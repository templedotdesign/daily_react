import React, { Component } from 'react';

import Wrapper from '../../Components/HigherOrder/Wrapper/Wrapper';
import Layout from '../../Components/Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder'; 

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </Wrapper>
    );
  }
}

export default App;
