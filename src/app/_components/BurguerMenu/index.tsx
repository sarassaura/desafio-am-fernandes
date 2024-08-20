"use client";

import { Dispatch, SetStateAction, useState } from "react";
import "./styles.css";

function BurguerMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
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
