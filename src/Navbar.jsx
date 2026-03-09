/**
 * Navbar: responsive navigation with mobile toggle and data-driven links.
 * - useState: controls mobile menu open/close (showLinks).
 * - useRef: measures link list height so the container can animate expand/collapse.
 * - Link (React Router): in-app navigation without full reload; use <a> for external (social).
 */
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  /** Toggle state for mobile: when true, links container is expanded */
  const [showLinks, setShowLinks] = useState(false);
  /** Refs for the collapsible links wrapper and the <ul> inside (used to read height) */
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  /** Toggles mobile menu visibility */
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  /* Dynamic height: we set the container height to the measured links height when open, 0 when closed. Ref read during render is intentional for this animation pattern. */
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px` // eslint-disable-line react-hooks/refs
      : "0px",
  };
  return (
    <nav>
      <div className="nav-center">
        {/* Logo + hamburger (hamburger hidden on desktop via CSS) */}
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks} aria-label="Toggle menu">
            <FaBars />
          </button>
        </div>

        {/* Collapsible nav links: height animated via linkStyles; uses Link for SPA routing */}
        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Social icons: external links, open in new tab with rel for security */}
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
