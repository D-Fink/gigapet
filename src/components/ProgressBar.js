import React from 'react';


const ProgressBar = (props) => {
    const { completed } = props;
  
    const containerStyles = {
      height: 20,
      width: '98%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 5,
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: '#6a1b9a',
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;