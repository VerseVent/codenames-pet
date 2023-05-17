"use client";
import React, { useState, useTransition } from "react";

function RoleForm() {
  const [isFetching, setIsFetching] = useState(false);
  const [isPending, setTransition] = useTransition();
  const isMutating = isFetching || isPending;

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

export default RoleForm;
