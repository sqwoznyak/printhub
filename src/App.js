import { useEffect, useState } from "react";
import FileUploadWithPreview from "./components/FileUploadWithPreview";
import AddressDropdownSelector from "./components/AddressDropdownSelector";
import "./App.css";

export default function App() {
  const [file, setFile] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    tg.ready();
    tg.expand();

    tg.MainButton.setText("🖨 Напечатать");
    tg.MainButton.hide();

    tg.MainButton.onClick(() => {
      if (!file || !selectedAddress) {
        tg.showAlert("Выберите файл и адрес");
        return;
      }
      tg.sendData(JSON.stringify({ fileName: file.name, address: selectedAddress }));
    });

    return () => {
      tg.MainButton.offClick();
    };
  }, [file, selectedAddress]);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    if (file && selectedAddress) {
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }
  }, [file, selectedAddress]);

  const bgColor = window.Telegram?.WebApp?.themeParams?.bg_color || "#ffffff";
  const textColor = window.Telegram?.WebApp?.themeParams?.text_color || "#000000";

  return (
    <div className="container" style={{ backgroundColor: bgColor, color: textColor }}>
      <h2 className="header">📄 PrintHub</h2>
      <FileUploadWithPreview file={file} onFileSelect={setFile} />
      <AddressDropdownSelector selected={selectedAddress} onChange={setSelectedAddress} />
    </div>
  );
}
