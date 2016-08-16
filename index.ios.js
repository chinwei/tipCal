/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Slider,
  TouchableHighlight
} from 'react-native';

class tipCal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiptValue: '',
      tipAmount: 0,
      totalAmount: 0,
      tip: 0.10
    }
  }

  sayHello() {
    this.setState({receiptValue:'1'});
    alert (this.state.receiptValue);
  }



  render() {
    let taxRate = 0.0875;
    let taxAmount = this.state.receiptValue * taxRate;
    let receiptValueMinusTax = this.state.receiptValue * (1 - taxRate);

    let tipPercent = this.state.tip/100;
    let tipAmount = receiptValueMinusTax*tipPercent*100;
    let tipAmountRounded = Math.round(tipAmount*100)/100;
    let totalAmount = receiptValueMinusTax + taxAmount + tipAmount;
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <View style={{height: 64, flex:1}}>

              <Text style={{height: 64, textAlign: 'center', fontSize: 64}}>
                {String(this.state.receiptValue)}
              </Text>
            </View>
        </View>
        <View style={{flex: 1}}>
          <View>
            <View style={{padding: 10}}>
                <View style={{height:30, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 16, color: '#666666'}}>Total amount</Text>
                  <Text style={{fontSize: 16, color: '#666666'}}>${Math.round(totalAmount*100)/100} ({Math.round(this.state.tip*100)}%)</Text>
                </View>
            </View>
            <View>
                <View style={{height:60, padding: 10}}>
                  <Slider
                    onValueChange={(amount) => {
                      this.setState({tip:amount})}
                    }
                      maximumValue={0.20}
                     minimumValue={0.10}/>
                </View>
            </View>
          </View>
          <View style={{flex: 1}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <NumPadKey text="1" appendNumber={() => this.setState({receiptValue: this.state.receiptValue+'1'})}/>
                <NumPadKey text="2" appendNumber={() => this.setState({receiptValue: this.state.receiptValue+'2'})}/>
                <NumPadKey text="3" appendNumber={() => this.setState({receiptValue: this.state.receiptValue+'3'})}/>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <NumPadKey text="4" appendNumber={() => this.setState({receiptValue: this.state.receiptValue+'4'})}/>
                <NumPadKey text="5" appendNumber={() => this.setState({receiptValue: this.state.receiptValue+'5'})}/>
                <NumPadKey text="6" appendNumber={() => this.setState({receiptValue: this.state.receiptValue+'6'})}/>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <NumPadKey text="7" appendNumber={() => this.setState({receiptValue: this.state.receiptValue+'7'})}/>
                <NumPadKey text="8" appendNumber={() => this.setState({receiptValue: this.state.receiptValue+'8'})}/>
                <NumPadKey text="9" appendNumber={() => this.setState({receiptValue: this.state.receiptValue+'9'})}/>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <NumPadKey text="." appendNumber={() => this.setState({receiptValue: this.state.receiptValue+'.'})}/>
                <NumPadKey text="0" appendNumber={() => this.setState({receiptValue: this.state.receiptValue+'0'})}/>
                <NumPadKey text="Backsp" appendNumber={() => this.setState({receiptValue: this.state.receiptValue.slice(0, -1)})}/>
            </View>
          </View>

        </View>
      </View>
    );
  }
}






class NumPadKey extends Component {
  constructor(props) {
    super(props);

    this.state = {}

  }



  render() {
    return (
      <TouchableHighlight style={{flex:1}} onPress={() => this.props.appendNumber()} underlayColor="#f3f3f3">
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Text>{this.props.text}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FFFF',
  },
  priceDisplay: {
    fontSize: 20,
    textAlign: 'center',
  },

});



AppRegistry.registerComponent('tipCal', () => tipCal);
