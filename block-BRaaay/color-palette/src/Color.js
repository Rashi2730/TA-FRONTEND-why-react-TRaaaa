import React from 'react';

function Color(props) {
  return (
    <div>
      <div className="color--name">{props.name}</div>
      <ul>
        {props.allColors.map((color, i) => (
          <li>
            <div
              className="color--box"
              style={{ backgroundColor: color }}
            ></div>
            <div>
              <span>{i === 0 ? 50 : i * 100}</span>
              <span>{color}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Color;
