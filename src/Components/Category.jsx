import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Videocard from '../Components/Videocard'
import { addCategoryApi, deleteCategoryApi, getVideoApi, getcategoryApi, updateCategory } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';


function Category({videoDragAndRemoveStatus,setvideoDragAndRemoveStatus}) {
  //state to store the category name
  const [categoryName,setcategory] = useState("")
 const [allcategory,setallcategory] = useState([])
 const [addCategoryStatus,setaddCategoryStatus] = useState(false)
 const [deleteCategoryStatus,setdeleteCategoryStatus] = useState(false)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /*console.log(categoryName);*/
//function to add category
  const handleCategoryAdd = async()=>{
   if(categoryName){
    let reqBody = {
      category:categoryName,
      allVideo:[]
    }
    const response = await addCategoryApi(reqBody)
    console.log(response);
    if(response.status>=200 && response.status<300){
      toast.success('Category added successfully')
      setaddCategoryStatus(true)
      handleClose()
    }else{
      toast.error('something went wrong')
    }
   }else{
    toast.info('please enter the category name')
   }
   
  }
//function to get category
const getAllcategory = async()=>{
  const response = await getcategoryApi()
  /*console.log(response.data);*/
  setallcategory(response.data)
} 


//function to delete category
const handleDeleteCategory = async(id)=>{
  await deleteCategoryApi(id)
  setdeleteCategoryStatus(true)
}

//function prevent the data lose on drag
const dragOver = (e)=>{
  e.preventDefault()
}
//function for drop
const videoDrop = async (e,categoryId)=>{
  console.log(`category id is ${categoryId}`);
  //get the videoid send from the videocard component
  const videoid =e.dataTransfer.getData("VideoId")
  console.log(`video is ${videoid}`);

  //Api call to get a details of a particular video that is dragged
const { data } = await getVideoApi(videoid)
console.log(data);

//selceted category
const selectedCategory = allcategory.find((item)=>item.id == categoryId)
console.log(selectedCategory);
if(selectedCategory.allVideo.find(item=>item.id==videoid)){
  toast.error('video already in category')
}else{
  selectedCategory.allVideo.push(data)
}


//function to update category 
await updateCategory(categoryId,selectedCategory)
getAllcategory()


}

//function to delete cards from category
const dragStart = (e,categoryId,videoId)=>{
  console.log(`category id is ${categoryId}`);
  console.log(`video id is ${videoId}`);

  let dataShare ={
    categoryId,videoId
  }
  e.dataTransfer.setData("dataShared",JSON.stringify(dataShare))
}

useEffect(()=>{
  getAllcategory()
  setaddCategoryStatus(false)
  setdeleteCategoryStatus(false)
  setvideoDragAndRemoveStatus(false)
},[addCategoryStatus,deleteCategoryStatus,videoDragAndRemoveStatus])

  return (
      
      <>
      <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
        <button onClick={handleShow} className='btn btn-warning w-100'>Add New Category</button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faPen} className='text-warning me-2' />Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border rounded p-3 border-secondary'>
            <p>Category Name</p>
          <Form.Group className='mb-2'>
           <Form.Control required type="text" placeholder="Enter the category Name" onChange={(e)=>setcategory(e.target.value)}/>
        </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleCategoryAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
        
     {allcategory?.length>0? 
     allcategory?.map((item)=>( 
     <div className='border border-secondary w-100 p-3 rounded mt-3' droppable onDragOver={(e)=>dragOver(e)} 
     onDrop={(e)=>videoDrop(e,item.id)}>
     <div className='d-flex justify-content-center align-items-center'>
       <p>{item.category}</p>
       <button onClick={()=>handleDeleteCategory(item.id)} className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrash} /></button>

     </div>
       <Row>
         {item.allVideo.length>0?
         item.allVideo.map((card)=>(<Col sm={12} draggable onDragStart={(e)=>dragStart(e,item.id,card.id)}>
          {<Videocard displayVideo={card} isPresent={true}/>}
        </Col>))
          :null}
       </Row>
   </div>))
    :<p className='text-danger fs-5'>No category Added Yet</p>
      }
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
      </>
      
        
  )
}

export default Category
