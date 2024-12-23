export const Code = ({ selected = false }: { selected?: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.5547 4.09441L9.49219 20.4069C9.35156 20.8288 8.89453 21.0749 8.4375 20.9343C8.01562 20.7936 7.76953 20.3366 7.91016 19.8796L12.9727 3.56707C13.1133 3.14519 13.5703 2.8991 14.0273 3.03973C14.4492 3.18035 14.6953 3.63738 14.5547 4.09441ZM17.7188 7.15301L22.2188 11.3718C22.3945 11.5124 22.5 11.7585 22.5 11.9694C22.5 12.2155 22.3945 12.4264 22.2188 12.6022L17.7188 16.821C17.3672 17.1374 16.8398 17.1374 16.5234 16.7858C16.207 16.4343 16.207 15.9069 16.5586 15.5905L20.3906 11.9694L16.5586 8.38347C16.207 8.06707 16.207 7.53972 16.5234 7.18816C16.8398 6.8366 17.3672 6.8366 17.7188 7.15301ZM5.90625 8.38347L2.07422 11.9694L5.90625 15.5905C6.25781 15.9069 6.25781 16.4343 5.94141 16.7858C5.625 17.1374 5.09766 17.1374 4.74609 16.821L0.246094 12.6022C0.0703125 12.4264 0 12.2155 0 11.9694C0 11.7585 0.0703125 11.5124 0.246094 11.3718L4.74609 7.15301C5.09766 6.8366 5.625 6.8366 5.94141 7.18816C6.25781 7.53972 6.25781 8.06707 5.90625 8.38347Z"
      fill={selected ? "white" : "#414651"}
    />
  </svg>
);
