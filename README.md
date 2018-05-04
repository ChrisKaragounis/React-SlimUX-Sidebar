# React-SlimUX-Sidebar
Simple Navigation Siderbar for React

## Table of Contents
* [Installation](#installation)
* [API documentation](#api-documentation)
* [Usage](#usage)
* [Example](#example)
* [Preview](#preview)

## Installation
Copy the files in the Components folder to your project and then import Menu & MenuItem to your React page, like this

```jsx
import { Menu, MenuItem } from './components/Menu/Menu';
```
yarn and npm support comming soon.

## API documentation

Properties: 
Menu :

    PageInnerContainerId : Defines the id of the Main Page where your contents are. **(Required)**
    
    Slider: Enables a sliding effect over the hovered items in the menu. **(Optional)**
MenuItem 

    IconClass : Class of the Icon you would like to use from Font-Awesome. **(Required)**
    
    isMaster : Sets the current button as the Open/Close button of the menu. **(Optional)**
    
    Click : Action to Execute when user selects the item. **(Optional)**
    
    Content : The content (text) to be displayed next to the icon. **(Optional)**
    
## Usage
This Siderbar was created as an easy to use alternative to all the other bloated ones. It is fast, lite and easy to use.
By default it has no contents at all. The content is up to you to decide. In the [Preview] section you can see one example of it.


## Example

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Menu, MenuItem } from './components/Menu/Menu';

class App extends React.Component {
    render() {
        return (
            <div>
                <Menu Slider PageInnerContainerId="main">
                    <MenuItem  IconClass="fa fa-bars fa-2x"></MenuItem>
                    <MenuItem Click={() => window.location.href = "https://github.com"} IconClass="fa fa-bicycle fa-2x">Github</MenuItem>
                </Menu>
                <div id="main">
                    <p>Main page content here</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />, document.getElementById('root'))

```


## Preview
<img style="margin:100px" src="https://user-images.githubusercontent.com/13626837/39650722-f5cf7832-4ff1-11e8-8645-f74c70949339.gif"></img>
