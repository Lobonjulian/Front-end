function LinkedIn(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <rect y={3} width={14} height={16} rx={0} />
        </clipPath>
      </defs>
      <rect
        width={14}
        height={24}
        rx={0}
        fill="none"
        style={{
          mixBlendMode: 'passthrough',
        }}
      />
      <g clipPath="url(#a)">
        <path
          d="M3.111 17.375H.218 3.11.218v9.344H3.11v-9.344zM1.68 28q-.716.031-1.182.5-.467.469-.498 1.187.031.97.84 1.47.84.437 1.68 0 .809-.5.84-1.47-.031-.718-.498-1.187-.466-.469-1.182-.5zm12.258-10.625h-2.894 2.894-2.894v4.562q.063.844-.186 1.625-.25.782-1.307.844-1.089-.031-1.431-.75-.342-.719-.311-1.656v-4.625H4.916v9.344h2.8v-1.282h.03q.28.594.965 1.032.716.468 1.773.5 2.116-.063 2.832-1.282.684-1.25.622-3.187v-5.125z"
          fill="currentColor"
          style={{
            mixBlendMode: 'passthrough',
          }}
          transform="matrix(1 0 0 -1 0 34.75)"
        />
      </g>
    </svg>
  );
}

export default LinkedIn;
