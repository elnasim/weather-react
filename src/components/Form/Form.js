import React, { useState } from "react";
import "./Form.scss";

export default ({ searchLocation }) => {
  const [value, setValue] = useState("");

  const changeLocation = e => {
    e.preventDefault();
    searchLocation(value);
    setValue("");
  };

  return (
    <form className="form" onSubmit={changeLocation}>
      <input
        type="text"
        className="form__input"
        onChange={e => setValue(e.target.value)}
        value={value}
        placeholder="Введите местоположение..."
      />
      <button className="form__btn">Найти</button>
    </form>
  );
};
