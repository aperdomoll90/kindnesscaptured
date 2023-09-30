import React, {useState, useRef} from 'react'
import './styles.css'
export default function AddItem() {

  const [selectedImageFront, setSelectedImageFront] = useState(null);
  const [selectedImageAngle, setSelectedImageAngle] = useState(null);
  const [selectedImageBack, setSelectedImageBack] = useState(null);

  const fileInputRef = useRef(null)

  const handleFileInputClick = () => {
    fileInputRef.current.click()
  }

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setSelectedImageFront(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return  <div class="addItem-list-container" >

    <div class="addItem-list-card">
      <div type="file"
        accept="image/*"
        onClick={handleFileInputClick}>
        { selectedImageFront ? <img
           src={selectedImageFront}
           alt="Uploaded"
           style={{ maxWidth: '100%', maxHeight: '300px' }}
         />
        :
        ' Click Box to Upload an Image'
        }
    </div>
    <span>Front</span>
    </div>

    <div class="addItem-list-card">
      <div type="file"
        accept="image/*"
        onClick={handleFileInputClick}>
        { selectedImageAngle ? <img
           src={selectedImageAngle}
           alt="Uploaded"
           style={{ maxWidth: '100%', maxHeight: '300px' }}
         />
        :
        ' Click Box to Upload an Image'
        }

    </div>
    <span>Angled</span>
    </div>

    <div class="addItem-list-card">
      <div type="file"
        accept="image/*"
        onClick={handleFileInputClick}>
        { selectedImageBack ? <img
           src={selectedImageBack}
           alt="Uploaded"
           style={{ maxWidth: '100%', maxHeight: '300px' }}
         />
        :
        ' Click Box to Upload an Image'
        }

    </div>
    <span>Back</span>
    </div>

    <input
      type='file'
      ref={fileInputRef}
      style={{ display: 'none' }}
      onChange={handleFileInputChange}
    />

</div>
}