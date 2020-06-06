import React from 'react';

class Button extends React.Component {
  buttonBuilder() {
    if (this.props.type === 'icon') {
      return <a href={this.props.action} className="wow fadeInDown" data-wow-delay=".2s">
                <img className="img-responsive" src={this.props.icon} alt="Icon" />
              </a>
    }

    if (this.props.type === 'link') {
      return <a href={this.props.action}>
                {this.props.text}
              </a>
    }
  }

  render() {
    return  <React.Fragment>
            {
              this.buttonBuilder()
            }
            </React.Fragment>
  }
}

export default Button;
