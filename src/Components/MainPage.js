import React from 'react'
import  '../styles/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import image1 from '../images/image1.jpg';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';
// import PropTypes from 'prop-types';

function MainPage({ onUserChange }) {
    const handleProfileChange = (e) => {
        const selectedUser = e.target.value;
        onUserChange(selectedUser);
      };
  return (
    <>
       <div className="container d-flex flex-column justify-content-center my-4">

            <div className="header d-flex justify-content-between">
                <FontAwesomeIcon icon={faSquareCheck} style={{fontSize:'1rem', color:'#F28482'}} />

                <div className="headerIcon d-flex">
                <FontAwesomeIcon icon={faTrash} style={{fontSize:'1rem', color:'#F28482', marginRight:'3rem'}}/>
                <FontAwesomeIcon icon={faX} style={{fontSize:'1rem', color:'#F28482'}}/>
                </div>
            </div>
            <br />

            <div className="eventDetails d-inline-flex flex-column justify-content-center">
                    <input className='eventName' type="text" placeholder='Enter Name of Event..' style={{color:'#E92C2C', fontWeight:'bold', outline:'none'}}/>
                    <div className="dateInput d-flex">
                        <label style={{alignContent:'center', marginRight:'1rem'}} htmlFor="dateInput">
                        <FontAwesomeIcon icon={faCalendarWeek} style={{color:'grey'}}/>
                        </label>
                        <input className='eventTime' type="text" placeholder='Enter date and time of Event...' style={{fontWeight:'bold', outline:'none'}}/>
                    </div>
            </div>
            <br />
            <br />
            <div className='Owner d-inline-flex flex-column justify-content-center'>

                <div className="ownerName d-inline-flex ">
                    <div className="profileIcon" style={{alignContent:'center', marginRight:'1rem'}}>
                        <FontAwesomeIcon icon={faUser} style={{color:'#F28482', marginBottom:'1rem'}}/>  
                    </div>
                    <p style={{color:"#5A5A5A", fontStyle:'italic'}}>Assign to:</p>
                    <div className="profileImage"  style={{alignContent:'center', marginRight:'1rem', marginLeft:'1rem'}}>
                        <img className='image' src={image1} alt=""/>
                    </div>
                    <select className="form-select host" aria-label="Default select example" onChange={handleProfileChange} style={{color:'#009379'}}>
                        <option defaultValue>Jain Smith</option>
                        <option value="Ujwal Jagtap">Ujwal Jagtap</option>
                        <option value="Jitesh Puri">Jitesh Puri</option>
                    </select>
                </div>
                <br />  

                <div className="Note d-flex">
                    <div className="noteIcon" style={{alignContent:'center', marginRight:'1rem'}}>
                        <FontAwesomeIcon icon={faNoteSticky}  style={{color:'#F28482', marginBottom:'1rem'}}/>  
                    </div>
                    <p style={{color:"#5A5A5A", fontStyle:'italic'}}>Note:</p>
                    <input  className='noteDetails' type="text" placeholder='09382049832 www.flowervendor.com' style={{outline:'none'}}/>
                </div>

            </div>
            <br />
            <div style={{ borderTop: '1px solid grey', width:'100%', rotation:'0 deg' }}></div>
            <br />
       </div>
        {/* <Comments user = {user}/> */}
    </>
  )
}

export default MainPage
