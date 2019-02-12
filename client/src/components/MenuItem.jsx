import React from "react";

const MenuItem = (props) => {
  const mainBox = {
    paddingTop: '10px',
    display: 'flex'
  }

  const subBox = {
    flex: '1'
  }

  const subBox1 = {
    flex: '2'
  }

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
    fontSize: '11px',
    float: 'middle'
  }
  return (

    <div style={mainBox}>
      <div style={subBox}>
        <div>
          {props.items.map((item, i) => {

            if (i < 10) {
              return (
                <div className="name" key={i} style={nameStyle}>
                  {item.name}
                  <div className="description" style={description} >
                    {item.description} <span style={wordSpace}>{'$' + item.price}</span>
                    <p></p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>


      <div style={subBox}>
        <div>
          {props.items.map((item, i) => {
            if (i >= 10 && i < 20) {
              return (
                <div className="name" key={i} style={nameStyle}>
                  {item.name}
                  <div className="description" style={description} >
                    {item.description} <span style={wordSpace}>{'$' + item.price}</span>
                    <p></p>
                  </div>
                </div>
              );
            }
          })}
        </div>

      </div>
    </div>
  );
}

export default MenuItem;