function FileUploader({ onFileSelect }) {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) onFileSelect(file);
  };

  return (
    <div>
      <label>Загрузите документ:</label>
      <input type="file" onChange={handleChange} />
    </div>
  );
}

export default FileUploader;

