import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);
  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      firebase.addNote(value.trim()).then(() => {

          alert.show("Заметка создана", "success");
      }).catch(() => {
        alert.show("Заметка не была создана", "danger");
      })
      setValue("");
    } else {
      alert.show("Введите заметку");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Введите название заметки"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};
