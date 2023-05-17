"use client";
import React, { useState, useTransition } from "react";

function roleForm() {
  const [isFetching, setIsFetching] = useState(false);

  const addMember = () => {};

  return (
    <div>
      <button>Be a member</button>
      <h2>Members: </h2>
      <ul>
        <li></li>
      </ul>
      <h2>Master: </h2>
      <button>Be a master</button>
    </div>
  );
}

export default roleForm;
