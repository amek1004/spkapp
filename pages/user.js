import axios from "axios";
import React, { useState } from "react";
import Link from "next/Link";

export default function index() {
  const [userName, setUserName] = useState("");

  const handleOnChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div>
      <label htmlFor="input">유저 아이디 : </label>
      <input
        id="input"
        type="text"
        value={userName}
        onChange={handleOnChange}
      />
      <div>
        <Link href={`./users/${userName}`}>
          <a>유저 검색하기</a>
        </Link>
      </div>
    </div>
  );
}
