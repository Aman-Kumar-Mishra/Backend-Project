import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCoudinary = async (localFilePath) => {
    try {
        if(!localFilePath) throw error
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })
        console.log("FILE UPLOADED!\n",response.url)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file
        console.log("FILE CANNOT BE UPLOADED-- ERROR:",error)
        return null
    }
} 
    
export {uploadOnCoudinary}