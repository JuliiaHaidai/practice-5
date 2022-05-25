import React from "react";

export default class Tabs extends React.Component {
    state = {
        tabIndex: 0
    };

    onClick = (event) => {
        this.setState({tabIndex: event.target.value});
    }

    render() {
        return (
            <div className="row">
                <ul className="col-3 list-group">
                    {this.props.tabs.map((item, index) => {
                        return <li onClick={this.onClick} className={this.state.tabIndex === index ? 'list-group-item active' : 'list-group-item'} value={index} key={index}>
                            {this.props.headerTpl({item, index})}</li>
                    })}
                </ul>
                <div className="col-9">
                    {this.props.tabs.map((item, index) => {
                        let classBody = this.state.tabIndex === index ? '' : 'd-none';
                        return <div className={classBody} value={index} key={index}>
                            {this.props.contentTpl({item, index})}</div>
                    })}
                </div>
            </div>
        );
    }
}

Tabs.defaultProps = {
    headerTpl: props => props.item.header,
    contentTpl: props => props.item.content
}