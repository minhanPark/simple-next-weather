"use client";

import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error("------", error);
  }, []);
  return (
    <>
      <h1>에러 페이지</h1>
      <button
        onClick={() => {
          reset();
        }}
      >
        리셋
      </button>
    </>
  );
}
