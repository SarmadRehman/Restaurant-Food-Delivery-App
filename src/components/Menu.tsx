"use client";

import Image from "next/image";
import { useState } from "react";

const Menu = () => {
  // for the event on hamburger button toggle for open and close
  const [open, setopen] = useState(false);
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setopen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setopen(false)}
        />
      )}
    </div>
  );
};

export default Menu;
