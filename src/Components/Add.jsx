import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { uploadVideoApi } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setuploadVideoStatus}) {
  const [show, setShow] = useState(false);
  const [video,setvideo] = useState({
    id:"",
    caption:"",
    imageURL:"",
    embedLink:""
  })

  console.log(video);
  const getEmbedLink = (e)=>{
   /* console.log(e.target.value);*/
   const text =e.target.value
   if(text.endsWith('?feature=shared')){
    console.log(text.slice(-26,-15));
    const link =`https://www.youtube.com/embed/${text.slice(-26,-15)}`
    setvideo({...video,embedLink:link})
    
   }else if(text.startsWith('https://youtu.be/')){
    console.log(text.slice(17,28));
    const link =`https://www.youtube.com/embed/${text.slice(17,28)}`
    setvideo({...video,embedLink:link})
   }
   else{
    console.log(text.slice(-11));
    const link =`https://www.youtube.com/embed/${text.slice(-11)}`
    setvideo({...video,embedLink:link})
   }

  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpload = async()=>{
    const {id,caption,imageURL,embedLink} = video
    console.log(id,caption,imageURL,embedLink);
    if(!id || !caption || ! imageURL || ! embedLink){
      toast.info('Please fill the form')
    }else{
      const response = await uploadVideoApi(video)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success('Video upload successfully')
        setuploadVideoStatus(response.data)
        setvideo({
          id:"",
          caption:"",
          imageURL:"",
          embedLink:""
        })
         handleClose()
      }else{
        console.log(response);
        toast.error('Somthing went wrong')
      }
    }
    
  }

  return (
    <>
    <div className='d-flex'>
      <h5 className='me-2 mt-2'>upload New videos</h5>
      <button className='btn' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} size="xl" /></button>
    </div>
    
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title> <FontAwesomeIcon icon={faFilm} className='me-2 text-warning' />Upload Videos</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Please fill the following details</p>
      <Form className='border rounded p-3 border-secondary'>

      <Form.Group className='mb-2'>
           <Form.Control required type="text" placeholder="Enter the video ID" onChange={(e)=>setvideo({...video,id:e.target.value})}/>
        </Form.Group>

        <Form.Group className='mb-2'>
           <Form.Control required type="text" placeholder="Enter the Caption" onChange={(e)=>setvideo({...video,caption:e.target.value})}/>
        </Form.Group>

        <Form.Group className='mb-2'>
           <Form.Control required type="text" placeholder="Enter the image URL" onChange={(e)=>setvideo({...video,imageURL:e.target.value})}/>
        </Form.Group>

        <Form.Group className='mb-2'>
           <Form.Control required type="text" placeholder="Enter the  Youtube video Link" onChange={(e)=>getEmbedLink(e)}/>
        </Form.Group>

      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="warning" onClick={handleUpload}>
        Upload
      </Button>
    </Modal.Footer>
  </Modal>
  <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
  </>
  )
}

export default Add


