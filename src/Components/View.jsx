import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { getUploadedVideoApi, getcategoryApi, updateCategory } from '../Services/allAPI'


function View({uploadVideoStatus,setvideoDragAndRemoveStatus}) {

  const [video,setvideo] = useState([])

  const [deleteVideostatus,setdeleteVideostatus] = useState(false)

       const getVideo = async()=>{
       const response = await getUploadedVideoApi()
         /*console.log(response);*/
         const {data} = response//directoy ayi data edukanthe
         /*console.log(data);*/ 
         setvideo(data)  
      }
      console.log(video);
      const dragOver = (e)=>{
        e.preventDefault()
      }
      const videoDrop =async(e)=>{
        const {categoryId,videoId} =JSON.parse(e.dataTransfer.getData("dataShared"))
        console.log(categoryId,videoId);
        //get all category 
        const {data} = await getcategoryApi()
        //access the object with the category id from all category
        let selectedCategory = data.find((item)=>item.id==categoryId)
        //filtering the category object by removing the video object from the allvideos
        let result = selectedCategory.allVideo.filter((item)=>item.id!=videoId)
        console.log(result);
        let newcategory = {
            category:selectedCategory.category,allVideo:result,id:categoryId
        }
        //updating the category 
        await updateCategory(categoryId,newcategory)
        setvideoDragAndRemoveStatus(true)
      }
      
      useEffect(()=>{/* to handle side effect */
        getVideo()
        setdeleteVideostatus(false)

      },[uploadVideoStatus,deleteVideostatus])/* dependency -[] - content wil be fetched when the page loads*/
  return (
    <>
   <Row className='w-100' droppable="true" onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
         { video?.length>0?
          video?.map((item)=>(
            <Col sm={12} md={6} lg={4} xl={3}>
            <Videocard displayVideo ={item} setdeleteVideostatus={setdeleteVideostatus}/>
            </Col>
            
          )):<p className='text-warning fs-3'>No Video Uploaded</p>
          
         }
       
   </Row>
    </>
  )
}

export default View
