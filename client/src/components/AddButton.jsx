import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineAdd } from "react-icons/md";

function AddButton() {
  return (
    <div>
      <Link to="/note/new" className="floating-button">
        <MdOutlineAdd />
      </Link>
    </div>
  );
}

export default AddButton;
