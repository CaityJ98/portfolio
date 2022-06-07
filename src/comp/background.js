
import React from 'react';

const Backgroundimg = ({image}) =>{
return (
    
<div style={{ 
    BackgroundImage: `url("${ image || 'background.jpg'}")`, 
  }}>
    
  </div>
  
)
}

export default Backgroundimg