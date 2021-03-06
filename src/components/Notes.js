import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
export const Notes = ({ notes, onRemove }) => (
  <TransitionGroup element='ul' className="list-group">
    {notes.map((note) => (
      <CSSTransition key={note.id} timeout={1000} classNames={"note"}>
        <li className="list-group-item note">
          <div>
            <strong>{note.title}</strong>
            <small>{new Date().toLocaleDateString()}</small>
          </div>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => onRemove(note.id)}
          >
            &times;
          </button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);
