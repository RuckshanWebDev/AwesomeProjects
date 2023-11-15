import { showMessage } from "react-native-flash-message";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { colors } from "../css";

const ImageUploader = async (source, folder)=>{

    let imagesValue;
    if(source === 'camera') {imagesValue = await launchCamera()}
    else if (source === 'gallery'){ imagesValue = await launchImageLibrary()}

    if(imagesValue.didCancel){
      return
    }else if (imagesValue.errorCode){
      return
    }else if(imagesValue.assets.length){
    console.log(imagesValue);
      console.log(imagesValue.assets[0]);
      const response = imagesValue.assets[0]

      const uri = response.uri;
      const type = response.type;
      const name = response.fileName;
      const source = {
        uri,
        type,
        name,
      }

      const data = new FormData()
      data.append('file', source)
      data.append('upload_preset', folder)
      // 'blog_images , profile_images'

      try {
        showMessage({
          autoHide : false,
          type: "success",
          message: "Image Uploading",
          description: "Please wait",
          backgroundColor: colors.primary
        })
        const responce = await fetch('https://api.cloudinary.com/v1_1/dts5uxlug/image/upload', {
            method: "POST",
            body: data
        })
        const result = await responce.json()
        console.log(result,'RES');
        return result;

      }catch(err){
        console.log(err);
        showMessage({
          autoHide : true,
          type: "danger",
          message:err.message,
          description: "Please wait",
        })
      }

    }

}

const imagePreview = async(source, folder)=>{
  let imagesValue;
  if(source === 'camera') {imagesValue = await launchCamera()}
  else if (source === 'gallery'){ imagesValue = await launchImageLibrary()}
}

class ImageConstructor {
  constructor(source, folder){
    this.source = source
    this.folder = folder
    this.imagesValue = null
  }

  async getImageValue (){
    if(this.source === 'camera') {
      this.imagesValue = await launchCamera()
    }else if (this.source === 'gallery'){ 
      this.imagesValue = await launchImageLibrary()
    }
  }

  async getPreview(){
    await this.getImageValue()
    console.log( '😀😀', this.imagesValue);
  }

  uploadImage(){

  }

}

export default ImageUploader
export { ImageConstructor }
