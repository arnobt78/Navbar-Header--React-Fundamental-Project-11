/**
 * Data layer: single source of truth for navbar links and social icons.
 * - links: used by Navbar with <Link to={url}>; each url must have a matching Route in App.jsx.
 * - social: external URLs; rendered as <a href={url} target="_blank"> with icon component.
 */
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

/** In-app navigation items (path + label). Paths are handled by React Router. */
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
  {
    id: 5,
    url: "/profile",
    text: "profile",
  },
];

/** External social links: icon is a React element from react-icons; open in new tab in Navbar. */
export const social = [
  {
    id: 1,
    url: "https://www.google.com/",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.google.com/",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.google.com/",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.google.com/",
    icon: <FaBehance />,
  },
];
