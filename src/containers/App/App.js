/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from '../../components/TodoItem'
import { Button, Card } from 'react-native-material-design';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

class App extends Component {

    constructor() {
        super();
        //this.state = { checked: true };
    }

    _handlePress() {
        console.log('State', this.props);
        //this.setState({ checked: !this.state.checked });
    }


    render() {

        let checked = true;

        console.log('MainView Started', this.props);
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    {this.props.todos.map((todoItem) => {
                        return <TodoItem key={todoItem.id} item={todoItem} />
                    }) }
                </ScrollView>
                <View>
                    <Button text="+ Add Item" value="NORMAL RAISED" onPress={() => this._handlePress() } />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#FEFEFE',
    },
    scrollView: {

    },
    button: {
        backgroundColor: '#999999',
        color: '#FFFFFF',
        alignSelf: "stretch",

        textAlign: 'center'

    }
});

export default connect(mapStateToProps)(App)