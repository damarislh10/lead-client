import axios from 'axios';
import React, { useState } from 'react'
import { FileUploader } from '../FileUploader';

export const ModalFormJson = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [name, setName] = useState("");
  
    const submitForm = async(e) => {
      const formData = new FormData();
    formData.append("name", name);
    formData.append("file", selectedFile);
  
    axios
      .post( `http://localhost:3300/file-upload`, formData)
      .then((res) => {
        alert("File Upload success");
      })
      .catch((err) => alert("File Upload Error"));
    }
  return (
    <div className="App">
    <h2>Formulario</h2>      
    <form>
    <label>Subir archivo json</label>
       <FileUploader
         onFileSelectSuccess={(file) => setSelectedFile(file)}
         onFileSelectError={({ error }) => alert(error)}
       />

       <button onClick={submitForm}>Submit</button>
     </form>
</div>
  )
}
