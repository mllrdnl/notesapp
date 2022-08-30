import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { BsChevronLeft } from "react-icons/bs";

function NotePage() {
  const [note, setNote] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getNote(id);
  }, [id]);

  const getNote = async () => {
    const response = await fetch(`/api/notes/${id}`);
    const data = await response.json();
    setNote(data);
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <BsChevronLeft />
          </Link>
        </h3>
      </div>
      <textarea defaultValue={note?.body}></textarea>
    </div>
  );
}

export default NotePage;
