import React, { Component } from 'react';
import { About } from './About';
import { FetchData } from './FetchData';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <About></About>
                <FetchData></FetchData>
            </div>
        );
    }
}
