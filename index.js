import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './normalize.min.css';
import {Menu, MenuItem} from './components/Menu/Menu';

class App extends React.Component {
    render() {
        return (
            <div>
                <Menu Slider PageInnerContainerId="main">
                    <MenuItem isMaster IconClass="fa fa-bars fa-2x"></MenuItem>
                    <MenuItem IconClass="fa fa-bicycle fa-2x">Second Page</MenuItem>
                    <MenuItem IconClass="fa fa-lightbulb-o fa-2x">Third Page</MenuItem>
                </Menu>
                <div id="main">
                    <p>Some random content</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementById('root'))