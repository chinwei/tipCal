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
  Slider
} from 'react-native';

class tipCal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiptValue: 0,
      tipAmount: 0,
      totalAmount: 0,
      tip: 5
    }
  }
  render() {
    let taxRate = 1.088;
    let taxAmount = this.state.receiptValue * 0.088;
    let receiptValueMinusTax = this.state.receiptValue / taxRate;
    let tipAmount = Number(this.state.receiptValue*this.state.tip/100);
    let tipAmountRounded = Math.round(tipAmount*100)/100;
    let totalAmount = Math.round((receiptValueMinusTax + taxAmount + tipAmount)*100)/100;
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <View style={{height: 64, flex:1}}>
              <TextInput
                placeholder="$0.00"
                style={{height: 64, textAlign: 'center', fontSize: 64}}
                onChangeText={(text) => this.setState({receiptValue:text})}
                />
            </View>
        </View>
        <View style={{flex: 1}}></View>
        <View style={{flex: 1}}>
          <View>
            <View style={{padding: 10}}>
                <View style={{height:30, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 16, color: '#666666'}}>Total amount</Text>
                  <Text style={{fontSize: 16, color: '#666666'}}>{totalAmount} ({Math.round(this.state.tip)}%)</Text>
                </View>
            </View>
            <View>
                <View style={{height:100, padding: 10}}>
                  <Slider
                    onValueChange={(amount) => {
                      this.setState({tip:amount})}
                    }
                      maximumValue={15}
                     minimumValue={0}/>
                </View>
            </View>
          </View>
        </View>
      </View>
    );
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
