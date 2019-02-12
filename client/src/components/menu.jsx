import React from "react";
import ReactDOM from 'react-dom';
import ajax from '../lib/ajax';
import MenuList from './MenuList.jsx';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      menuBoard: []
    }
    this.updateMenu = this.updateMenu.bind(this);
  }

  componentDidMount() {
    this.updateMenu(event);
  }

  updateMenu(event) {
    let temp = event === undefined ? 'lunch' : event.target.value;
    let meal = temp;
    ajax.renderMenu(meal, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({
        menuBoard: data
      })
    });
  }

  render() {
    const menu = {
      fontSize: '1.2em',
      fontFamily: 'Quicksand',
      fontWeight: 'bolder'
    }

    const boarderLine = {
      border: '1px solid #d8d9db'
    }

    const style = {
      cursor: 'pointer',
      backgroundColor: 'white',
      border: '1px solid #d8d9db',
      fontSize: 'smaller',
      fontFamily: 'Quicksand',
      fontWeight: 'bolder',
      padding: '8px',
      width: '100px',
      margin: '10px',
      outlineColor: 'red'
    };

    const line = {
      borderTop: '1px solid #d8d9db',
      paddingTop: '10px',
      paddingBottom: '10px',
      borderBottom: '1px solid #d8d9db'
    }

    return (
      <div >
        <p style={menu}>Menu</p>
        <div style={line}>
          <button type='button' value='lunch' onClick={this.updateMenu} style={style}>Lunch</button>
          <button type='button' value='dinner' onClick={this.updateMenu} style={style}>Dinner</button>
          <button type='button' value='dessert' onClick={this.updateMenu} style={style}>Dessert</button>
        </div>
        <br /><br />
        <MenuList lists={this.state.menuBoard} />
      </div>
    );
  }
}
// test 
export default Menu;
