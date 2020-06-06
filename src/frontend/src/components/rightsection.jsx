import React from 'react';
import MainAppSection  from './mainappsection';
import Intro from './intro';
import Footer from './footer';

class RightSection extends React.Component {
  render() {
    return  <React.Fragment>
              <section className="right-section">
                <MainAppSection />
                <Intro />
                <Footer />
              </section>
            </React.Fragment>
  }
}

export default RightSection;
