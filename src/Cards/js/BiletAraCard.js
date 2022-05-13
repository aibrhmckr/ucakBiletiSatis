import React from 'react';

import "../css/BiletAraCard.css"

const BiletAraCard = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default BiletAraCard;