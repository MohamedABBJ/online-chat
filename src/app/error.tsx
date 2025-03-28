"use client";
function Error({}) {
  return (
    <div>
      <p>Messages took to long to load, please try again</p>
      <button onClick={() => window.location.reload()}>Try Again</button>
    </div>
  );
}

export default Error;
