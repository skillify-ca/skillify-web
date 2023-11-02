import { useRouter } from "next/router";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Button } from "../../../components/ui/Button";
import { useAuth } from "../../../lib/authContext";
import { uploadProfilePicture } from "../../api/studentPortal/profile/profilePicturesClient";

export default function EditProfilePage() {
  const { user } = useAuth();

  const [file, setFile] = useState<File | null>(null);
  const [fileDataURL, setFileDataURL] = useState<string | null>(null);

  // init router
  const router = useRouter();

  const ondrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach(async (file) => {
      setFile(file);

      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const imageData = reader?.result?.toString() ?? "";
        setFileDataURL(imageData);
      };
      reader.readAsDataURL(file);
    });
  };

  const onSaveClick = async () => {
    // upload to aws
    if (file !== null) {
      await uploadProfilePicture(user.uid, file).then((_) => {
        // navigate to profile
        router.push(`/profile/${user.uid}`);
      });
    }
  };

  const onClearClick = () => {
    setFile(null);
    setFileDataURL(null);
  };

  return (
    <div className="p-16">
      <h1 className="mb-4 text-xl font-bold">Edit Profile Picture</h1>
      {fileDataURL === null ? (
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
      ) : (
        <img src={fileDataURL} alt="preview" className="w-64" />
      )}

      <div className="flex gap-4 mt-4">
        <Button label="Save" onClick={onSaveClick} disabled={file === null} />
        <Button
          label="Clear"
          backgroundColor="white"
          textColor="text-primary"
          onClick={onClearClick}
        />
      </div>
    </div>
  );
}
