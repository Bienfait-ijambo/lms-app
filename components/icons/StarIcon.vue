
<template>
     <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 48 48"
          fill="none"
        >
          <!-- Main big star -->
          <path
            d="M24 2L29.39 16.26L44.97 17.27L32.48 27.14L36.6 42.45L24 34.77L11.4 42.45L15.52 27.14L3.03 17.27L18.61 16.26L24 2Z"
            fill="url(#gradientMain)"
          />

          <!-- Small star overlay in top right -->
          <path
            d="M38 4L39.76 8.24L44 10L39.76 11.76L38 16L36.24 11.76L32 10L36.24 8.24L38 4Z"
            fill="url(#gradientMain)"
          />

          <!-- Gradient definition -->
          <defs>
            <linearGradient
              id="gradientMain"
              x1="0"
              y1="0"
              x2="48"
              y2="48"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0A40FF" />
              <stop offset="1" stop-color="#00C2FF" />
            </linearGradient>
          </defs>
        </svg>
</template>