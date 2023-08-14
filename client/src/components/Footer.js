import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import '../App.css';

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <MDBFooter bgColor='light' className='text-center text-lg-left'>
        <div className='text-center p-3'>
          <span style={{ color: 'black', fontFamily: "'Rock Salt', cursive" }}>
            created by Serhat <span style={{ color: 'red' }}>Karaman</span>
          </span>
        </div>
      </MDBFooter>
    </div>
  );
}
