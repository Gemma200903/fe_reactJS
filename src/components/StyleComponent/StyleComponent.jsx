import React, { Component } from 'react';
import style from './styleComponent.module.css';

export default class StyleComponent extends Component {
  render() {
    return (
      <div>

        {/* css module */}
        <p className={`${style["text-cyber"]}`}>afternoon</p>


        {/* style inline */}
        <div style={
            {
                fontSize: '18px',
                color: 'green'
            }
        }>summer</div>
      </div>
    )
  }
}
