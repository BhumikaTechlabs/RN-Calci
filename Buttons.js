import React, {Component} from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import Style from './Style';

export default class Buttons extends Component {
  render() {
        return (
            <TouchableHighlight style={Style.button}
                                underlayColor="#ffffff"
                                onPress={this.props.onPress}>
                <Text style={Style.buttonText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }

}

