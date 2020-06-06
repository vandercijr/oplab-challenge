import React from 'react';
import Button from './button';

class AppStoreButtons extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        buttons:[
          {
              id: 0,
              icon: '/assets/images/appstore.png',
              action: 'https://www.apple.com/br/ios/app-store/',
              type: 'icon'
          },
          {
              id: 1,
              icon: '/assets/images/playstore.png',
              action: 'https://play.google.com/store',
              type: 'icon'
          }
        ]
      }
  }

  render() {
    return  <React.Fragment>
            {
              this.state.buttons.map(button =>  (
                <Button key={button.id} icon={button.icon} type={button.type} action={button.action}/>
              ))
            }
            </React.Fragment>
  }
}

export default AppStoreButtons;
