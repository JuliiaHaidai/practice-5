import React from 'react';

class Button extends React.Component {

  render() {
    return (
      <div className="col-2">
        <button onClick={this.props.onClick} className={`${this.props.class} btn btn-block`}>{this.props.nameButton}</button>
      </div>
    )
  }
}

export default Button;