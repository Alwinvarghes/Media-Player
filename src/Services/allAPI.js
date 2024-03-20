import { commonAPI } from "./CommonAPI"
import { serverURL } from "./ServerURL"


//api for uploading video
export const uploadVideoApi = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/video`,reqBody)
}

//Api to get uploaded video
export const getUploadedVideoApi = async()=>{
    return await commonAPI('GET',`${serverURL}/video`,"")
}

//Api to delete a particular video
export const deleteVideo = async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/video/${id}`,{})
}

//Api to add video into history
export const AddHistory = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/history`,reqBody)
}

//Api to get video from history
export const getVideoHistory = async()=>{
   return await commonAPI('GET',`${serverURL}/history`,"")
}

//Api delete with history
export const deleteWatchHistory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

//api to add a category
export const addCategoryApi = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/category`,reqBody)
}

//Api to  get the category
export const getcategoryApi = async()=>{
    return await commonAPI('GET',`${serverURL}/category`,"")
}
//category delete
export const deleteCategoryApi = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
} 

//api to get a single video from videos
export const getVideoApi = async(id)=>{
    return await commonAPI('GET',`${serverURL}/video/${id}`,"")
}
//Api to update category
export const updateCategory = async(id,reqBody)=>{
    return await commonAPI('PUT',`${serverURL}/category/${id}`,reqBody)
}