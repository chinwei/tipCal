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
  TouchableHighlight,
  StatusBar
} from 'react-native';

class tipCal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiptValue: '',
      tipAmount: 0,
      totalAmount: 0,
      tip: 0.00
    }
  }

  appendNumber(value) {
    if (this.state.receiptValue.length >= 6) {
      value = ''
    }


    this.setState({
      receiptValue: this.state.receiptValue + value
    })
    // console.log(this.state.receiptValue.length >= 5)
  }

  removeLastNumber() {
    this.setState({
      receiptValue: this.state.receiptValue.slice(0, -1)
    })
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
        <View style={{height: 80, backgroundColor: '#494D4D', paddingBottom: 5, paddingRight: 5, paddingLeft: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
            <Text style={{fontSize: 12, color: '#7C8282'}}>Total amount</Text>
            <Text style={{fontSize: 24, color: '#F3FFFF'}}>{String(this.state.receiptValue)}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <View style={{height: 64, flex:1}}>

              <Text style={{height: 64, textAlign: 'center', fontSize: 64}}>
                ${Math.round(totalAmount*100)/100}
              </Text>
              <Text style={{textAlign: 'center', marginTop: 5}}>({Math.round(this.state.tip*100)}%)</Text>
            </View>
        </View>
        <View style={{flex: 1}}>
          <View>
            <View>
                <View style={{height:60, padding: 10}}>
                  <Slider
                    onValueChange={(amount) => {
                      this.setState({tip:amount})}
                    }
                      maximumValue={0.20}
                     minimumValue={0.00}/>
                </View>
            </View>
          </View>
          <View style={{flex: 1}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <NumPadKey text="1" appendNumber={() => this.appendNumber('1')}/>
                <NumPadKey text="2" appendNumber={() => this.appendNumber('2')}/>
                <NumPadKey text="3" appendNumber={() => this.appendNumber('3')}/>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <NumPadKey text="4" appendNumber={() => this.appendNumber('4')}/>
                <NumPadKey text="5" appendNumber={() => this.appendNumber('5')}/>
                <NumPadKey text="6" appendNumber={() => this.appendNumber('6')}/>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <NumPadKey text="7" appendNumber={() => this.appendNumber('7')}/>
                <NumPadKey text="8" appendNumber={() => this.appendNumber('8')}/>
                <NumPadKey text="9" appendNumber={() => this.appendNumber('9')}/>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <NumPadKey text="." appendNumber={() => this.appendNumber('.')}/>
                <NumPadKey text="0" appendNumber={() => this.appendNumber('0')}/>
                <NumPadKey text="Backsp" appendNumber={() => this.removeLastNumber()}/>
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
