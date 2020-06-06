import React from 'react';
import LeftSection  from './leftsection';
import RightSection  from './rightsection';

class App extends React.Component {
  render() {
    return  <React.Fragment>
              <LeftSection />
              <RightSection />
            </React.Fragment>
  }
}

export default App;
