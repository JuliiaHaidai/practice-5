import React from "react";
import PropTypes from "prop-types";
import TabItem from "./components/TabItem";

export default class Accordion extends React.Component {

    render() {
        return (
            <div>
                {this.props.tabs.map((tab, index) =>{
                    return <TabItem tab={tab} key={index} />
                })}
            </div>
        );
    }
}

Accordion.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string,
            content: PropTypes.string
        })
    )
};
