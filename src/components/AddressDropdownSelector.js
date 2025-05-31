import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const ADDRESSES = [
  "Москва, Тверская 10",
  "СПб, Невский 120",
  "Казань, Баумана 5",
];

function AddressDropdownSelector({ selected, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="block">
      <button type="button" className="dropdown-button" onClick={() => setOpen(!open)}>
        <FaMapMarkerAlt /> Выбрать адрес {open ? "▲" : "▼"}
      </button>
      {open && (
        <div className="dropdown-list">
          {ADDRESSES.map((addr) => (
            <div key={addr}>
              <label>
                <input
                  type="radio"
                  name="address"
                  checked={selected === addr}
                  onChange={() => onChange(addr)}
                />
                {addr}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AddressDropdownSelector;
