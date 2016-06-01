import React from 'react';
import { Counter } from '../';


export default class App extends React.Component {

    componentWillMount() {
        document.body.style.padding = 0,
        document.body.style.margin = 0
    }

    render() {

        return (
            <div><Counter/></div>
        )
    }
}
