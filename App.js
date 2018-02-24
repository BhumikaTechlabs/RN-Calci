import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Style from './Style';
import Buttons from './Buttons';

const btns= [
   [1,2,3,'CLR'],
   [4,5,6,'/'],
   [7,8,9,'*'],
   [0,'=','+','-']
];

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            oldIpVal: 0,
            ipVal: 0,
            operator: null
        }
    }

  render() {
    return (
      <View style={Style.mainContainer}>
           <View style={Style.display1}>
                <Text style={Style.txt1}>{this.state.oldIpVal} {this.state.operator}</Text>
           </View>
           <View style={Style.display2}>
                  <Text style={Style.txt}>{this.state.ipVal}</Text>
           </View>
           <View style={Style.input}>
                  {this.renderButtons()}
           </View>
      </View>
    )
  }


  renderButtons() {
        let views = [];
        for (var r = 0; r < btns.length; r ++)
        {
            let row = btns[r];
            let inputRow = [];
            for (var i = 0; i < row.length; i ++)
            {
                let input = row[i];
                inputRow.push(<Buttons value={input}
                onPress={this.check.bind(this, input)}
                key={r + "-" + i}/>);
            }
            views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
        }
        return views;
  }

  check(ip) {
    switch(typeof ip) {
      case 'number':
           return this.num(ip)
      case 'string':
           return this.operate(ip)
    }
  } 
  
  num(x) {
    let newIpVal= (this.state.ipVal*10) + x;
    this.setState({ipVal: newIpVal});
  }

  operate(x) {
    temp=eval(this.state.oldIpVal+this.state.operator+this.state.ipVal);
    switch(x) {
      case '/':
      case '*':
      case '+':
      case '-':
                this.setState({
                    operator: x,
                    oldIpVal: temp,
                    ipVal: 0
                });
                break;
      case '=':
                let operator = this.state.operator,
                    op2 = this.state.ipVal,
                    op1 = this.state.oldIpVal;

                if (!operator) {
                    return;
                }

                this.setState({
                    oldIpVal: 0,
                    ipVal: eval(op1 + operator + op2),
                    operator: null
                });
                break;
      default:
            this.setState({
                    oldIpVal: 0,
                    ipVal: 0,
                    operator: null
                });
                break;


    }
  }
}

