import { FaPrint } from "react-icons/fa";

function PrintButton({ file, addresses }) {
  const handleClick = () => {
    if (!file || addresses.length === 0) {
      alert("Выберите файл и адрес(а)");
      return;
    }

    window.Telegram.WebApp.sendData(
      JSON.stringify({ fileName: file.name, addresses })
    );
  };

  return (
    <div className="center">
      <button className="print-button" onClick={handleClick}>
        <FaPrint /> Напечатать
      </button>
    </div>
  );
}

export default PrintButton;
