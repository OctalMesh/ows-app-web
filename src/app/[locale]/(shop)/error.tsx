"use client";

import Error from "next/error";

export default function ShopError() {
  return <Error statusCode={404} />;
}
