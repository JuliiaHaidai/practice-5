import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstInput: "",
            secondInput: "",
            result: ""
        }
      }

      input1(event) {
          this.setState({firstInput: event.target.value.replace(/[^\d]/g, '')})
      }

      input2(event){
        this.setState({secondInput: event.target.value.replace(/[^\d]/g, '')})
      }

      add(){
          this.setState({result: +this.state.firstInput + +this.state.secondInput})
      }

      subtract(){
        this.setState({result: +this.state.firstInput - +this.state.secondInput})
      }

      multiply(){
        this.setState({result: +this.state.firstInput * +this.state.secondInput})
      }

      divide(){
        this.setState({result: +this.state.firstInput / +this.state.secondInput})
      }

      clear(){
          this.setState({
              firstInput: 0,
              secondInput: 0,
              result: 0
          })
      }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Input onChange={this.input1.bind(this)} value={this.state.firstInput} placeholder="Operand 1" class="col-3"/>
                    <Input onChange={this.input2.bind(this)} value={this.state.secondInput} placeholder="Operand 2" class="col-3"/>
                    <Button onClick={this.clear.bind(this)} nameButton="Clear" class="btn-danger"/>
                </div>
                <div className="row my-3">
                    <Button onClick={this.add.bind(this)} nameButton="Add" class="btn-secondary"/>
                    <Button onClick={this.subtract.bind(this)} nameButton="Subtract" class="btn-secondary"/>
                    <Button onClick={this.multiply.bind(this)} nameButton="Multiply" class="btn-secondary"/>
                    <Button onClick={this.divide.bind(this)} nameButton="Divide" class="btn-secondary"/>
                </div>
                <div className="row">
                    <Input value={this.state.result} placeholder="Result" class="col-4"/>
                </div>
            </div>
        );
    }
}

export default Calculator;