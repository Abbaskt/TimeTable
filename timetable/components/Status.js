import React, { Component } from 'react'
import{
    View,
    Text,
} from 'react-native'

import styles from '../style'

class Substitution extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        const {container} = styles
        return(
             <View style={container}>
            <Text>This is Status Component</Text>
            
            </View>
        );
    }
}

export default Substitution