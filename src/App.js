import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
    // state = {
    //     show: true
    // };
    //
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({show: false});
    //     }, 5000);
    // }

    render() {
      return (
        <div className="">
          <Layout>
            {/*{this.state.show ? <BurgerBuilder /> : null}*/}
              {/* <BurgerBuilder />
              <Checkout /> */}
              <Switch>
                <Route path="/checkout" component={Checkout} />
                <Route path="/" exact component={BurgerBuilder} />
              </Switch>
          </Layout>
        </div>
    );
  }
}

export default App;
