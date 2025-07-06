import React, { useCallback } from "react";
import { useLoading } from "./LoadingContext";
import { simulateApiCall } from "../utils/simulateApiCall";

export function ExampleApiButton() {
  const { setLoading } = useLoading();

  // Extract the handler outside the JSX for clarity and testability
  const handleClick = useCallback(async () => {
    setLoading(true);
    try {
      const result = await simulateApiCall("Success!", 2000);
      alert(result); // Replace with your logic
    } finally {
      setLoading(false);
    }
  }, [setLoading]);

  return (
    <button
      className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
      onClick={handleClick}
      type="button"
    >
      Simulate API Loading
    </button>
  );
}