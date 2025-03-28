"use client";

function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h1>Something went wrong</h1>
      <button onClick={() => reset()}>Reload</button>
    </div>
  );
}

export default Error;
