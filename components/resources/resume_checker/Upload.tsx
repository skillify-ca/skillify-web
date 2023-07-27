const UploadButton = () => {
  const handleUpload = () => {
    // Implement the logic to handle the file upload here
    console.log('File upload prompt');
  };

  return (
    <div>
      <label
        htmlFor="upload"
        className="inline-block px-6 py-3 font-semibold text-white bg-black rounded cursor-pointer hover:bg-gray-800"
      >
        Upload Document
      </label>
      <input
        type="file"
        id="upload"
        className="hidden"
        onChange={handleUpload}
      />
    </div>
  );
};

export default UploadButton;