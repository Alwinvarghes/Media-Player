import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import { Link } from 'react-router-dom'
import './Home.css'
import Category from '../Components/Category'
export default function Home() {
  const [uploadVideoStatus,setuploadVideoStatus] = useState([])
  const [videoDragAndRemoveStatus,setvideoDragAndRemoveStatus] = useState(false)
  return (
    <>
    <div className='container d-flex justify-content-between align-items-center mt-5'>
      <Add setuploadVideoStatus={setuploadVideoStatus}/>
      <Link id='link' to={'/watchhistory'}>Watch History</Link>
      </div>
       <div className='row'>
           <div className="col-md-9 ">
            <h4 className='mt-4'>All videos</h4>
            <View uploadVideoStatus={uploadVideoStatus} setvideoDragAndRemoveStatus={setvideoDragAndRemoveStatus}/>
           </div>
           <div className="col-md-3 px-4">
            <Category setvideoDragAndRemoveStatus={setvideoDragAndRemoveStatus} videoDragAndRemoveStatus={videoDragAndRemoveStatus}/>
           </div>
       </div>

    
      
    </>
  )
}
