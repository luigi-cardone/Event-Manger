import React from 'react'
import '../Styles/dashbord.css'
const Dashboard = () => {
  return (
    <div className='event-banner-shape'>
        <svg width="390" height="392" viewBox="0 0 390 392" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask>
                <div className='event-banner'>
                    <h1 className='event-banner-title'>Event title</h1>
                    <div className='event-banner-info'>
                        <h2 className='info-title'>Event info</h2>
                        <div className='info-frame'>
                            <div className='info-row'>
                                <h3>location</h3>
                            </div>
                            <div className='info-row'>
                                <h3>date</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <g filter="url(#filter0_bi_3_5)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M153.118 368.583C73.0955 341.824 9.66248 289.852 -26.5317 230.036C-62.5676 170.481 -73.4255 104.71 -35.2609 57.2588C1.29848 11.8038 80.7665 4.6114 156.942 1.91844C235.522 -0.859492 324.147 -4.00244 388.142 42.2907C452.249 88.6645 451.235 155.627 451.901 215.286C452.567 274.87 451.886 339.094 391.802 369.921C328.6 402.348 235.974 396.289 153.118 368.583Z" fill="url(#paint0_linear_3_5)"/>
                </g>
            </mask>
        </svg>

    </div>
  )
}

export default Dashboard