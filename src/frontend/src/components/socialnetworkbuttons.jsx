import React from 'react';
import Button from './button';

class SocialNetworkButtons extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        buttons:[
          {
              id: 2,
              text: 'Facebook',
              action: 'https://www.facebook.com/',
              type: 'link'
          },
          {
              id: 3,
              text: 'Twitter',
              action: 'https://twitter.com/',
              type: 'link'
          },
          {
              id: 4,
              text: 'Instagram',
              action: 'https://www.instagram.com/',
              type: 'link'
          }
        ]
      }
  }

  render() {
    return  <React.Fragment>
              <ul>
              {
                this.state.buttons.map(button =>  (
                  <li key={button.id}><Button type={button.type} action={button.action} text={button.text}/></li>
                ))
              }
              </ul>
            </React.Fragment>
  }
}

export default SocialNetworkButtons;
