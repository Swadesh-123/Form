import React from 'react';
class Footer extends React.Component {
    render() { 
        return(
         <div className='row fixed-bottom'>
           <button className='btn btn-danger col-2' >Reset</button>
           <div className='col-8 bg-dark'></div>
           <button className='btn btn-primary col-2'>Pay Now</button>
        </div>
        
        )
    }
}
 
export default Footer;