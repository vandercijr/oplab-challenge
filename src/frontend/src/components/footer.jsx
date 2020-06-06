import React from 'react';
import SocialNetworkButtons from './socialnetworkbuttons';

class Footer extends React.Component {
  render() {
    return  <React.Fragment>
              <footer>
                <span className="footer-credits">© Aria Messenger 2016</span>
                <SocialNetworkButtons />
              </footer>
            </React.Fragment>
  }
}

export default Footer;
