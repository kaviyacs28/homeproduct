import React from 'react';
import './RoomSec4.css';
import Container from 'react-bootstrap/Container';
import {  DashLg} from 'react-bootstrap-icons';

 function RoomSec4() {
  return (
<Container fluid>
<div className='BImg4'>
<div className='LivingRoom'>
        <h1 className="Section2-content">Bathroom</h1>
        <p className="LivingRoom-content-parah">Massa cras egestas laoreet montes, 
        dapibus eu sit etiam curabitur faucibus habitasse lectus vestibulum leo, 
        odio dolor quis maecenas faucibus vulputate pharetra.</p>
        <p><DashLg className='MinusIcon' /> Nulla placerat viverra</p>
        <p><DashLg className='MinusIcon' /> Cursus viverra</p>
        <p><DashLg className='MinusIcon' /> Vitae interdum eget</p>
        <p><DashLg className='MinusIcon' /> Risus tempus elementum</p>
        <p><DashLg className='MinusIcon' /> Aliquet dignissim</p>
        <button className="LivingRoom-button">SHOP BATHROOM</button>
</div>
</div>
</Container>        
)
}
export default RoomSec4;
