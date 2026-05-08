"use client";

import Error from "next/error";

export default function GlobalNotFound() {
  return (
    <html lang="uk">
      <body>
        <Error statusCode={404} />;
      </body>
    </html>
  );
}
