import { useState } from "react";

const ADDRESSES = [
  "Москва, Тверская 10",
  "СПб, Невский 120",
  "Казань, Баумана 5",
];

function AddressSelector({ onChange }) {
  const [selected, setSelected] = useState([]);

  const toggleAddress = (addr) => {
    const updated = selected.includes(addr)
      ? selected.filter((a) => a !== addr)
      : [...selected, addr];

    setSelected(updated);
    onChange(updated);
  };

  return (
    <div>
      <p>Выберите адрес печати:</p>
      {ADDRESSES.map((addr) => (
        <div key={addr}>
          <label>
            <input
              type="checkbox"
              checked={selected.includes(addr)}
              onChange={() => toggleAddress(addr)}
            />
            {addr}
          </label>
        </div>
      ))}
    </div>
  );
}

export default AddressSelector;
