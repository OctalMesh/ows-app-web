"use client";

import Error from "next/error";

export default function LocalizedError() {
  return <Error statusCode={404} />;
}
