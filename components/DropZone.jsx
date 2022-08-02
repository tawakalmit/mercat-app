import React from "react";
import { useDropzone } from "react-dropzone";

function Dropzone(props) {
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    accept: {
      "image/jpeg": [".jpeg", ".png"],
    },
  });

  return (
    <div className="border border-gray-300 text-gray-900 text-sm w-20 h-20 p-2.5 mb-3">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {isDragAccept && <p>All files will be accepted</p>}
        {isDragReject && <p>Some files will be rejected</p>}
        {!isDragActive && <p>Drop Image here</p>}
      </div>
    </div>
  );
}

export default Dropzone;
