import React from 'react';
import MenuItem from './MenuComponents/MenuItem';
import './Menu.css';
class Menu extends React.Component {
    /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    event = this
        .closeNav
        .bind(this);

    ToggleIsOpen() {
        this.state.isOpen
            ? this.closeNav()
            : this.openNav();
    }

    openNav() {
        this.setState({isOpen: true})
        document
            .getElementById(this.props.PageInnerContainerId)
            .style
            .marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        var main = document.getElementById(this.props.PageInnerContainerId);
        main.addEventListener("click", this.event);
    }

    closeNav() {
        this.setState({isOpen: false})
        document
            .getElementById(this.props.PageInnerContainerId)
            .style
            .marginLeft = "70px";
        document.body.style.backgroundColor = "white";
        var main = document.getElementById(this.props.PageInnerContainerId);
        main.removeEventListener("click", this.event);
    }

    render() {
        /*Set Size of Menu */
        let widthPx = this.state.isOpen
            ? '250px'
            : '70px';

        return (
            <div
                style={{
                'width': widthPx
            }}
                className="sidenav">
                <MenuList
                    Slider={this.props.Slider}
                    ToggleIsOpen={this
                    .ToggleIsOpen
                    .bind(this)}>
                    {this.props.children}
                </MenuList>
            </div>
        );

    }
}
export {Menu, MenuItem};

class MenuList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stateArray: []
        }
    }
    componentWillMount() {
        let stateArray = new Array(this.props.children.length).fill(false);
        this.setState({stateArray});

    }
    itemClicked(index) {
        let falseArray = new Array(this.state.stateArray.length).fill(false);
        falseArray[index] = !this.state.stateArray[index];
        this.setState({stateArray: falseArray})
    }
    createList() {
        let itemKey = 0;
        let result = this
            .props
            .children
            .map(item => {
                let props = item.props.isMaster
                    ? {
                        ...item.props,
                        onClick: this.props.ToggleIsOpen
                    }
                    : {
                        ...item.props,
                        isActive: this.state.stateArray[itemKey],
                        onClick: this
                            .itemClicked
                            .bind(this)
                    };
                props = {
                    ...props,
                    key: itemKey,
                    index: itemKey++,
                    Slider:this.props.Slider
                }
                let itemClone = React.cloneElement(item, props, item.props.children);
                return itemClone;
            })

        return (result);
    }

    render() {
        return (
            <div>
                {this.createList()}
            </div>
        );
    }
}