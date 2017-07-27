import React from 'react';
import './MenuItem.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';

function MenuItem(props) {
    let activeClass = (props.isActive && !props.isMaster)
        ? 'active'
        : '';
    activeClass += !props.isMaster && props.Slider
        ? ' Slider'
        :   '';
    return (
        <li
            onClick={() => props.onClick(props.index)}
            className={"MenuItem " + activeClass}>
            <i className={props.IconClass}/>
            <a >{props.children}</a>
        </li>
    );
}
export default MenuItem;