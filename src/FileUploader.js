import React, { useRef } from "react";

export const FileUploader = ({onFileSelectError,onFileSelectSuccess }) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    console.log(file)
    // if (file == undefined){
    //   onFileSelectError({ error: "Seleccionar archivo json" });
    // }
    // else
     onFileSelectSuccess(file);
  };

  return (
    <div className="file-uploader">
    <input type="file" onChange={handleFileInput} accept="application/json"/>
    {/* <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary"/> */}
</div>
  );
};
