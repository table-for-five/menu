import React from "react";
import MenuItem from './MenuItem.jsx';
import styled from 'styled-components';
import jump from 'jump.js';



class MenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    }

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    })
    document.documentElement.scrollTop = 0;
  }

  render() {
    const arr1 = this.props.lists.slice(0, 20);
    const arr2 = this.props.lists.slice(20, 40);
    const arr3 = this.props.lists.slice(40, 60);
    const arr4 = this.props.lists.slice(60, 80);
    const arr5 = this.props.lists.slice(80, 100);
    const lists = [arr2, arr3, arr4, arr5];

    return (
      <div>

        <TopLevel>
          <MenuItem items={arr1} />

          <ItemLine></ItemLine>
          {/* <Blur></Blur> */}
          <Space />

        </TopLevel>

        <MainBox expanded={this.state.isExpanded}>
          {lists.map((list, i) => {
            return (
              <div key={i}>
                <MenuItem items={list} />
                <ItemLine />
                <Space />
              </div>
            );
          })}
        </MainBox>

        <ClosingText>Thank you for coming!</ClosingText>
        <div><CollapseButton onClick={this.handleToggle}>Collapse menu</CollapseButton></div>
        <Space /><Space />

      </div>
    );
  }
}

export default MenuList;

// Set up style-component 

const Space = styled.br``;

const ItemLine = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #d8d9db;
`;

const TopLevel = styled.div`
  flexBasis: 80%; 
`;

const Blur = styled.div`
  content: " ";
  display: block;
  position: relative;
  bottom: 300px;
  height: 300px;
  background-image: linear-gradient(to top,#ff4,rgba(255,255,255,0));
  background-color: rgba(255,255,255,.2);
`;

const MainBox = styled.div`
  flexBasis: 80%;
  display: ${(props) => props.expanded ? 'block' : 'none'};
`;

const ClosingText = styled.div`
  font-family: Quicksand;
  font-weight: bolder;
`;

const CollapseButton = styled.button`
  zIndex: 20;
  font-weight: bolder;
  cursor: pointer;
  background-color: white;
  border: 1px solid #d8d9db;
  font-size: smaller;
  font-family: Quicksand;
  font-weight: bolder;
  padding: 15px;
  position: absolute;
  left: 380px;
  right: 160px;
  width: calc(30% - 70px);
  high: 30px;
  margin: 10px;
  margin-bottom: 30px;
  outline: none;
  &:hover ${CollapseButton} {
    border: 2px solid #DA3743;
  }
`;
