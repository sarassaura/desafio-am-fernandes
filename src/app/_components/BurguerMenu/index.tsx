"use client";

import { useState } from "react";
import "./styles.css";

function BurguerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      id="nav-icon"
      title="Menu"
      className={`${open && "open"}`}
      onClick={() => setOpen((s) => !s)}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
export default BurguerMenu;
