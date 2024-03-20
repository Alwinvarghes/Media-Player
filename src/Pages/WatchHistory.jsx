import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteWatchHistory, getVideoHistory } from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function WatchHistory() {
const [historyVideo,sethistoryVideo] = useState([])
const [deleteVideoStatus,setdeleteVideoStatus] = useState(false)
//function to gt all video history
  const getHistory = async()=>{
    const response =  await getVideoHistory()
    /*console.log(response);*/
    sethistoryVideo(response.data)

  }
 /*console.log(historyVideo);*/

 //delete a watchHistory video 
  const handleDelete = async(id)=>{
    const response = await deleteWatchHistory(id)
    /*console.log(response);*/
    if(response.status>=200 && response.status<300){
      setdeleteVideoStatus(true)
    }else{
      toast.error('something went Wrong')
    }
  }

  useEffect(()=>{
    getHistory()
    setdeleteVideoStatus(false)
  },[deleteVideoStatus])
  return (
    <>
    <div className='d-flex justify-content-between align-items-center mx-5 p-5 '>
      <h3>Watch History</h3>
      <h5><Link style={{textDecoration:'none',color:'white'}} to={'/home'}><FontAwesomeIcon icon={faArrowLeft} beat className='me-3' />Back to Home</Link></h5>
    </div>
   <div  className='d-flex justify-content-between align-items-center mx-5 p-4'> 
  {historyVideo?.length>0?
  <table className='table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {historyVideo.map((item,index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{item.caption}</td>
          <td><a href={item.url} target='_blank'>{item.url}</a></td>
          <td>{item.timestamp}</td>
          <td>
        
            <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
          </td>
        </tr>
        ))}
      </tbody>
    </table>:<p className='text-danger fs-4'>No Watch History</p>}
   </div>
   <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default WatchHistory
