import React, { useState } from "react";

const DescriptionWithToggle = ({ text, limit = 180 }) => {
  const [showFull, setShowFull] = useState(false);
  const isLong = text.length > limit;

  return (
    <div className="text-gray-400 mb-4">
      <p>{showFull || !isLong ? text : text.slice(0, limit) + "..."}</p>
      {isLong && (
        <button
          onClick={() => setShowFull(!showFull)}
          className="text-yellow-400 font-semibold mt-1 hover:underline"
        >
          {showFull ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
};

export default DescriptionWithToggle;