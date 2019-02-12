import React from "react";
import MenuItem from './MenuItem.jsx';

class MenuList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mainBox = {
      flexBasis: '80%'
    }

    const line = {
      paddingTop: '10px',
      paddingBottom: '10px',
      borderBottom: '1px solid #d8d9db'
    }

    const close = {
      fontFamily: 'Quicksand',
      float: '0',
      margin: '0 auto'
    }

    const collapse = {
      alignItems: 'center',
      justifyContent: 'center'
    }

    const arr1 = this.props.lists.slice(0, 20);
    const arr2 = this.props.lists.slice(20, 40);
    const arr3 = this.props.lists.slice(40, 60);
    const arr4 = this.props.lists.slice(60, 80);
    const lists = [arr1, arr2, arr3, arr4];

    return (
      <div>
        <div style={mainBox}>
          {lists.map((list, i) => {
            return (
              <div key={i}>
                <MenuItem items={list} />
                <div style={line}></div>
                <br />
              </div>
            );
          })}

        </div>
        <p style={close}>Thank you for coming!</p>
        <div style={collapse}><button >Hi</button></div>
      </div>

    );
  }
}

export default MenuList;
