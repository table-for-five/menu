import React from "react";
import ReactDOM from 'react-dom';
import ajax from '../lib/ajax';
import MenuList from './MenuList.jsx';
import styled from 'styled-components';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      menuBoard: []
    }
    this.updateMenu = this.updateMenu.bind(this);
  }

  componentDidMount() {
    this.updateMenu();
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
    return (
      <div >
        <Text>Menu</Text>
        <ButtonLine>
          <TopButton type='button' value='lunch' onClick={this.updateMenu}>Lunch</TopButton>
          <TopButton type='button' value='dinner' onClick={this.updateMenu}>Dinner</TopButton>
          <TopButton type='button' value='dessert' onClick={this.updateMenu}>Dessert</TopButton>
        </ButtonLine>
        <NextLine /><NextLine />

        <MenuList lists={this.state.menuBoard} />

      </div>
    );
  }
}

export default Menu;

//Set up styled-component

const NextLine = styled.br``;

const Text = styled.p`
  fontSize: 1.2em;
  font-family: Quicksand;
  font-weight: bolder;  
`;

const ButtonLine = styled.div`
  border-top: 1px solid #d8d9db;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #d8d9db;
`;

const TopButton = styled.button`
  cursor: pointer;
  background-color: white;
  border: 1px solid #d8d9db;
  font-size: smaller;
  font-family: Quicksand;
  font-weight: bolder;
  padding: 8px;
  width: 100px;
  margin: 10px;
  outline-color: red;
`;
