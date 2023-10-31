import React from "react";
import Dropzone from "react-dropzone";

export default function EditProfilePage() {
  const ondrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  };

  return (
    <div className="p-16">
      <h1 className="mb-4 text-xl font-bold">Edit Profile Picture</h1>
      <Dropzone
        accept={{
          "image/png": [".png", ".jpeg", ".jpg", ".gif"],
        }}
        maxFiles={1}
        onDrop={(acceptedFiles) => ondrop(acceptedFiles)}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className="flex justify-center p-16 bg-gray-300 border-2 border-gray-500 border-dashed cursor-pointer"
          >
            <input {...getInputProps()} />
            <p>Drag 'n' drop a file here, or click to select file</p>
          </div>
        )}
      </Dropzone>
    </div>
  );
}
