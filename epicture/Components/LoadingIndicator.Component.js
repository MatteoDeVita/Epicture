import React, {useState, useEffect} from 'react'
import { Component } from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper'
import LoadingIndicatorStyles from '../stylesheets/LoadingIncidactor.stylesheet'

const LoadingIndicator = ({loading}) => {    
    return (
        <ActivityIndicator
            style={LoadingIndicatorStyles.indicator}
            animating={loading}
            color={Colors.purple600}
        />
    )
}

export default LoadingIndicator