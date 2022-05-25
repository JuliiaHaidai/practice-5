import React from "react";

class TabItem extends React.Component{
  // constructor(props){
  //   super(props);
  //   // this.
  //   this.onClick = this.onClick.bind(this);
  // }
  
  state = {
    tabHeader: "card-header text-white bg-info",
    tabBody: "card-body d-none"
  };

onClick=()=>{
  !this.state.tabHeader.includes('active') ? 
    this.setState((state) => ({
      tabHeader: `${state.tabHeader} active`,
      tabBody: state.tabBody.replace('d-none', '')
    })) :
    this.setState((state) => ({
      tabHeader: state.tabHeader.replace('active', ''),
      tabBody: `${state.tabBody} d-none`
    }))
}

  render() {
    return (
      <div className="card">
        <div className={this.state.tabHeader} onClick={this.onClick}>
          {this.props.tab.header}
        </div>
        <div className={this.state.tabBody}>
          {this.props.tab.content}
        </div>
      </div>
    )
  }
}

export default TabItem;