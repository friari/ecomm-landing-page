export function ShoppingCart(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 42 43"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          d="M26.25 7.5H22.5a7.5 7.5 0 0 0-15 0H3.75A3.75 3.75 0 0 0 0 11.25v12.5A6.257 6.257 0 0 0 6.25 30H17.5a1.25 1.25 0 0 0 0-2.5H6.25a3.75 3.75 0 0 1-3.75-3.75v-12.5A1.25 1.25 0 0 1 3.75 10H7.5v2.5a1.25 1.25 0 0 0 2.5 0V10h10v2.5a1.25 1.25 0 0 0 2.5 0V10h3.75a1.25 1.25 0 0 1 1.25 1.25v6.25a1.25 1.25 0 0 0 2.5 0v-6.25a3.75 3.75 0 0 0-3.75-3.75ZM10 7.5a5 5 0 0 1 10 0H10Z"
          fill="currentColor"
        />
      </g>
      <g filter="url(#b)">
        <circle cx="27" cy="27" r="5" fill="#10FF70" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h30v30H0z" />
        </clipPath>
        <filter
          id="b"
          x="14"
          y="15"
          width="28"
          height="28"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="2" />
          <feGaussianBlur stdDeviation="4.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_207_1284"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_207_1284"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function Star(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          d="M19.467 23.315 12 17.827l-7.467 5.488L7.4 14.452-.063 9h9.214l2.85-8.878L14.848 9h9.213L16.6 14.452l2.867 8.863Z"
          fill="#F5D426"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Arrow(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.707 8.707a1 1 0 0 0 0-1.414L17.343.929a1 1 0 1 0-1.414 1.414L21.586 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM0 9h23V7H0v2Z"
        fill="#224F34"
      />
    </svg>
  );
}
