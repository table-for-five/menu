import React from "react";
import MenuItem from './MenuItem.jsx';
import styled from 'styled-components';

class MenuList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const arr1 = this.props.lists.slice(0, 20);
    const arr2 = this.props.lists.slice(20, 40);
    const arr3 = this.props.lists.slice(40, 60);
    const arr4 = this.props.lists.slice(60, 80);
    const lists = [arr1, arr2, arr3, arr4];

    return (
      <div>
        <MainBox>
          {lists.map((list, i) => {
            return (
              <div key={i}>
                <MenuItem items={list} />
                <ItemLine></ItemLine>
                <Space />
              </div>
            );
          })}
        </MainBox>

        <ClosingText>Thank you for coming!</ClosingText>
        <div><CollapseButton>Collapse menu</CollapseButton></div>
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

const MainBox = styled.div`
  flexBasis: 80%;
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
  outline-color: red;
`;
