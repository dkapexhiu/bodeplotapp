import React, { Component } from 'react';
import { View, WebView } from 'react-native';

export default class App extends Component {
  render() {
    const url = 'https://bodeplot.danielkapexhiu.com';
    return (
      <WebView
        source={{
          uri: url,
        }}
      />
    );
  }
}
