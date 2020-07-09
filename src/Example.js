import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Example = (props) => (
    <View style={[styles.example, props.style]}>
        {props.children}
    </View>
)

