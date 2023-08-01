import React,{useState} from 'react'
import { makeStyles } from '@mui/styles';
import Cropper from 'react-easy-crop';

const useStyles = makeStyles((theme) => ({
    container: {
      position: 'relative',
      width: '100%',
      height: 0,
      paddingTop: '56.25%', // 16:9 aspect ratio
      overflow: 'hidden',
    },
    cropContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
}));


export default function ImageUpload() {
  const classes = useStyles();
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState(null);
  const [isCropped, setIsCropped] = useState(false);


  const onCropComplete = (_, croppedAreaPixels) => {
    const croppedImage = getCroppedImg(image, croppedAreaPixels);
    console.log('Cropped Image:', croppedImage);
  };

  const getCroppedImg = async (imageSrc, croppedAreaPixels) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageSrc;
  
      image.onload = () => {
        console.log('Image loaded:', image.width, image.height);
  
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        const ctx = canvas.getContext('2d');
  
        canvas.width = croppedAreaPixels.width;
        canvas.height = croppedAreaPixels.height;
  
        // Limit crop.y to be non-negative
        const y = croppedAreaPixels.y >= 0 ? croppedAreaPixels.y : 0;
  
        console.log('Crop:', croppedAreaPixels);
  
        ctx.drawImage(
          image,
          croppedAreaPixels.x * scaleX,
          y * scaleY,
          croppedAreaPixels.width * scaleX,
          croppedAreaPixels.height * scaleY,
          0,
          0,
          croppedAreaPixels.width,
          croppedAreaPixels.height
        );
  
        // Convert canvas to data URL
        const croppedImageDataURL = canvas.toDataURL('image/jpeg');
  
        // Resolve the data URL
        resolve(croppedImageDataURL);
      };
  
      image.onerror = () => {
        reject(new Error('Error loading the image.'));
      };
    });
  };
  
    

  const handleSave = async (event) => {
    event.preventDefault();
  
    // Verify image state and crop parameters before cropping
    console.log('Image:', image);
    console.log('Crop:', crop);
  
    try {
      const croppedImageDataURL = await getCroppedImg(image, crop);
      console.log('Cropped image data URL:', croppedImageDataURL);
  
      setCroppedImage(croppedImageDataURL);
      setIsCropped(true);
    } catch (error) {
      console.error('Error saving the cropped image:', error);
    }
  };


  const onCropChange = (newCrop) => {
    setCrop(newCrop);
  };

  const onZoomChange = (newZoom) => {
    setZoom(newZoom);
  };


  return (
    <div className='image-upload'>
      {/* Input for uploading the image */}
      <input type="file" accept="image/*" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />

      {/* Display the uploaded image in a container with a 16:9 aspect ratio */}
      {image && (
        <div className={classes.container}>
          <div className={classes.cropContainer}>
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={16 / 9} // 16:9 aspect ratio
              onCropChange={onCropChange}
              onZoomChange={onZoomChange}
              onCropComplete={onCropComplete}
            />
          </div>
        </div>
      )}


      {/* Display the cropped image */}
      {isCropped && <img id='cropped-img' src={croppedImage} alt="Cropped" />}

      {/* "Save" button */}
      {image && !isCropped && <button onClick={handleSave}>Save</button>}
    </div>
  )
}
