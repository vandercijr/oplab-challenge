import React from 'react';
import AppStoreButtons from './appstorebuttons';

class Intro extends React.Component {
  render() {
    return  <React.Fragment>
              <div className="intro">
                <h4 className="wow fadeInDown">Messenger for Anonymous</h4>
                <h1 className="wow fadeInDown" data-wow-delay=".1s">Send voice and text message anonymously</h1>
                <p className="wow fadeInDown">
                  Aria is a messenger for people who prefer anonymity. Chat, call and hangout with friends anonymously.
                  Aria is a tor for private conversations. None can catch thou.
                </p>
                <h3 className="wow fadeInDown">Download Aria for free on </h3>
                <AppStoreButtons />
              </div>
            </React.Fragment>
  }
}

export default Intro;
