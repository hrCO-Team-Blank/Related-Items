import React from 'react';

const ProgressBar = (props) => {
    
  const progress = props.value;

  const progressContainerStyle = {
    height: 10,
    width: '75%',
    backgroundColor: '#e0e0de',
    borderRadius: 25,
    margin: 7,
  }

  const progressFillerStyle = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: 'grey',
    borderRadius: 'inherit',
  }

  return (
    <div style={progressContainerStyle}>
      <div style={progressFillerStyle}></div>
    </div>
  )
}

export default ProgressBar;