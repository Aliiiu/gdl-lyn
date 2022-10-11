import Link from "next/link";

const LinkList = props => (
  <li>
    <Link href={`${props.url}`}>
      <a
        className={`block py-2 sm:pr-4 no-underline ${
          !props.noHover &&
          "hover:text-black hover:font-normal duration-500 ease-in-out hover:no-underline transition"
        } md:pl-3 uppercase md:bg-transparent md:p-0 font-normal`}
        aria-current="page"
      >
        {props.name}
      </a>
    </Link>
  </li>
);

export default LinkList;
