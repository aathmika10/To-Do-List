import React, { Component } from 'react';
import { Header, Icon, Badge } from 'react-native-elements';
import { View, Text, StyeSheet, Alert } from 'react-native';

const MyHeader = (props) => {
  return (
    <Header
      centerComponent={{
        text: props.title,
        style: { color: '#ffffff', fontSize: 20,fontFamily:"showcard gothic"},
      }}
      backgroundColor="#f2528f"
    />
  );
};
export default MyHeader;
