import React from "react"

export default function GoogleSVG({size}) {
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        width={size}
        height={size}
        data-ux="Icon"
        className="x-el x-el-svg c2-1 c2-2 c2-q c2-r c2-u c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"
      >
        <g fill="none" fillRule="evenodd" transform="translate(2 2)">
          <circle cx="10" cy="10" r="9.5" fill="#F3F3F3" stroke="#CCC"></circle>
          <g transform="translate(5.556 5.5)">
            <path
              fill="#4285F4"
              d="M8.494 4.375c0-.303-.028-.595-.079-.875H4.334v1.655h2.332c-.1.535-.406.988-.865 1.291V7.52h1.4c.82-.744 1.293-1.841 1.293-3.144z"
            ></path>
            <path
              fill="#34A853"
              d="M4.334 8.556c1.17 0 2.15-.383 2.868-1.037l-1.4-1.073c-.389.257-.885.408-1.468.408-1.129 0-2.084-.752-2.425-1.763H.46v1.108a4.338 4.338 0 0 0 3.873 2.357z"
            ></path>
            <path
              fill="#FBBC05"
              d="M1.909 5.09a2.542 2.542 0 0 1-.136-.812c0-.282.05-.556.136-.813V2.357H.46a4.231 4.231 0 0 0 0 3.842l1.448-1.108z"
            ></path>
            <path
              fill="#EA4335"
              d="M4.334 1.701c.636 0 1.207.216 1.656.64l1.243-1.227C6.483.424 5.502 0 4.333 0 2.64 0 1.175.959.462 2.357l1.448 1.108c.34-1.011 1.296-1.764 2.425-1.764z"
            ></path>
          </g>
        </g>
      </svg>
    </>
  )
}
