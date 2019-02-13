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
    return (
      <div >
        <Text>Menu</Text>
        <ButtonLine>
          <TopButton type='button' value='lunch' onClick={this.updateMenu}>Lunch</TopButton>
          <TopButton type='button' value='lunch' onClick={this.updateMenu}>Lunch</TopButton>
          <TopButton type='button' value='lunch' onClick={this.updateMenu}>Lunch</TopButton>
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
  fontFamily: Quicksand;
  fontWeight: bolder;  
`;

const ButtonLine = styled.div`
  borderTop: 1px solid #d8d9db;
  paddingTop: 10px;
  paddingBottom: 10px;
  borderBottom: 1px solid #d8d9db;
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
