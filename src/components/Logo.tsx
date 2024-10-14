import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        <g id="M" transform="translate(40, 40)">
          {/* Centered at (30, 30) */}
          <path
            fill="currentColor"
            d="M 0 25 L 0 0 L 5 0 L 10 15 L 15 0 L 20 0 L 20 25 L 15 25 L 15 10 L 10 25 L 5 10 L 5 25 Z"
          />
        </g>
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
        />
      </g>
    </svg>
  );
}

export default Logo;
