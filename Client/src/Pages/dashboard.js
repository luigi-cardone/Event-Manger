import React from 'react'
import '../Styles/dashbord.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const Dashboard = () => {
  return (
        <div className='event-banner-shape'>
            <div className='event-banner'>
                <h1 className='event-banner-title'>Event title</h1>
                <div className='event-banner-info'>
                    <h2 className='info-title'>Event info</h2>
                    <div className='info-frame'>
                        <div className='info-row'>
                            <LocationOnIcon/>
                            <h3>location</h3>
                        </div>
                        <div className='info-row'>
                            <AccessTimeIcon/>
                            <h3>date</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Dashboard