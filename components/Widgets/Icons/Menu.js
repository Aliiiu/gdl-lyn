const Menu = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      fill={props.theme == "dark" ? "#fff" : "#09121F"}
    />
  </svg>
);

export const MenuClose = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default Menu;

{
  /* <svg
	width={24}
	height={24}
	viewBox='0 0 24 24'
	fill='none'
	xmlns='http://www.w3.org/2000/svg'
	{...props}
	>
	<g clipPath='url(#clip0_158_773)'>
	<path
	d='M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z'
	fill={props.theme == 'dark' ? '#fff' : '#09121F'}
	/>
	</g>
	<defs>
	<clipPath id='clip0_158_773'>
	<rect width={24} height={24} fill='#fff' />
	</clipPath>
	</defs>
	</svg> */
}

// <svg
//   width={24}
//   height={24}
//   viewBox="0 0 24 24"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
//   {...props}
// >
//   <g clipPath="url(#clip0_158_940)">
//     <path
//       d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z"
//       fill={props.theme == "dark" ? "#fff" : "#09121F"}
//     />
//   </g>
//   <defs>
//     <clipPath id="clip0_158_940">
//       <rect width={24} height={24} fill="white" />
//     </clipPath>
//   </defs>
// </svg>
