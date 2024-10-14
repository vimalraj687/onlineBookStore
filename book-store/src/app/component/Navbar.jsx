"use client";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/products">Product</Link>
          <Link href="/products/p1">P2</Link>
        </li>
      </ul>
    </nav>
  );
};
