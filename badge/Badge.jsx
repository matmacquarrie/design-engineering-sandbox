import React from 'react';

export default function Badge() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle
        cx="40"
        cy="40"
        r="38"
        stroke="#333"
        strokeWidth="4"
        fill="#fff"
      />

      {/* Center icon or text */}
      <text
        x="40"
        y="45"
        textAnchor="middle"
        fontSize="20"
        fill="#333"
        fontFamily="sans-serif"
      >
        💰
      </text>
    </svg>
  );
}
