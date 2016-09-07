/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from '../../components/TodoItem'

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class App extends Component {

    constructor() {
        super();
        //this.state = { checked: true };
    }

    onPress() {
        console.log('State', this.props);
        //this.setState({ checked: !this.state.checked });
    }


    render() {

        let checked = true;

        console.log('MainView Started', this.props);
        return (
            <View style={styles.container}>
                {this.props.todos.map((todoItem) => {
                    return <TodoItem key={todoItem.id} item={todoItem} />
                })}
            </View>
        );
    }
}

function mapStateToProps(state) {
    console.log('MapStateToProps', state);
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
    }
});

export default connect(mapStateToProps)(App)