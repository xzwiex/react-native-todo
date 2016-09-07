import React, { Component } from 'react';

import {

    Text
} from 'react-native';

export default class TodoItem extends Component {
    render() {
        return(<Text>{this.props.item.text} - {this.props.item.checked.toString() }</Text>);
    }

    static propTypes() {
        return {
            item: React.PropTypes.shape({
                text: React.PropTypes.string,
                checked: React.PropTypes.bool
            })
        }
    }
}


