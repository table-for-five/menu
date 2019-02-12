import React from "react";
import ReactDOM from 'react-dom';
import ajax from '../lib/ajax';

const MenuList = (props) => {

    const nameStyle = {
        fontFamily: 'Quicksand',
        fontWeight: 'bolder',
        fontSize: 'smaller'
    }

    const description = {
        fontFamily: 'Quicksand',
        fontWeight: 'lighter',
        fontSize: '11px'
    }

    const wordSpace = {
        float: 'middle'
    }

    return (
        <div>
            {props.lists.map((list, i) => {
                if (i < 10) {
                    return (
                        <div className="name" key={i} style={nameStyle}>
                            {list.name}
                            <div className="description" style={description} >
                                {list.description} <span style={wordSpace}>{'$' + list.price}</span>
                                <p></p>
                            </div>
                        </div>

                    );
                }



            })}


        </div>
    );
}

export default MenuList;
