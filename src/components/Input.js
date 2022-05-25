import React from 'react';

class Input extends React.Component {

  render() {
    return (
      <div className={this.props.class}>
        <input onChange={this.props.onChange} value={this.props.value} type="text" className="form-control" placeholder={this.props.placeholder} />
      </div>
    )
  }
}

export default Input;