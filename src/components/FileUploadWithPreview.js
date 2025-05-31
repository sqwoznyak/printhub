import { FaFileUpload } from "react-icons/fa";

function FileUploadWithPreview({ file, onFileSelect }) {
  const handleChange = (e) => {
    const selected = e.target.files[0];
    if (selected) onFileSelect(selected);
  };

  return (
    <div className="block">
      <label className="file-upload">
        <input type="file" onChange={handleChange} style={{ display: "none" }} id="fileInput" />
        <button type="button" onClick={() => document.getElementById("fileInput").click()}>
          <FaFileUpload /> Загрузить документ
        </button>
      </label>
      {file && <div className="preview">🖼️ {file.name}</div>}
    </div>
  );
}

export default FileUploadWithPreview;
