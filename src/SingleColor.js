import React, { useState, useEffect } from 'react'
// import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hex}) => {
  const [isCopied, setIsCopied] = useState();
  
  let rgbValue = rgb.join(',');

  let colorValue = `#${hex}`;

  useEffect(() => {
    let timeout = setTimeout(() => {
      setIsCopied(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, [isCopied]);

  return (
    <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor: `rgb(${rgbValue})`}} onClick={() => {
      setIsCopied(true);
      navigator.clipboard.writeText(colorValue);
    }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{colorValue}</p>
      {isCopied && <p className='alert'>Copied to the clipboard</p>}
    </article>
  )
}

export default SingleColor
