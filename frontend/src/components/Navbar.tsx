"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="185.558"
            height="42.453"
            viewBox="0 0 185.558 42.453"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectangle_6036"
                  data-name="Rectangle 6036"
                  width="16"
                  height="16"
                  fill="#fff"
                />
              </clipPath>
            </defs>
            <g
              id="Group_28097"
              data-name="Group 28097"
              transform="translate(-183.25 -6264.517)"
            >
              <g id="Group_28095" data-name="Group 28095">
                <path
                  id="Path_5318"
                  data-name="Path 5318"
                  d="M18.432,13.68H11.008V34H7.92V13.68H.48V11.072H18.432Zm9.754,8.5a7.951,7.951,0,0,0,2.368-.32,4.944,4.944,0,0,0,1.728-.928,3.882,3.882,0,0,0,1.056-1.44,4.677,4.677,0,0,0,.352-1.84,3.663,3.663,0,0,0-1.344-3.088,6.529,6.529,0,0,0-4.032-1.04H24.922v8.656ZM38.778,34H36.026a1.357,1.357,0,0,1-1.248-.656l-5.952-8.192a1.655,1.655,0,0,0-.592-.544,1.993,1.993,0,0,0-.96-.176H24.922V34H21.834V11.072h6.48a13.918,13.918,0,0,1,3.76.448,7,7,0,0,1,2.608,1.264A5.053,5.053,0,0,1,36.218,14.8a7.059,7.059,0,0,1,.112,4.9,6.019,6.019,0,0,1-1.12,1.9,6.565,6.565,0,0,1-1.776,1.424,8.671,8.671,0,0,1-2.368.9,3.066,3.066,0,0,1,1.024.976ZM45,34H41.9V11.072H45ZM57.633,22.96a7.078,7.078,0,0,0,2.336-.352,4.865,4.865,0,0,0,1.712-.976,4.074,4.074,0,0,0,1.056-1.52,5.167,5.167,0,0,0,.352-1.936,4.385,4.385,0,0,0-1.36-3.424,5.9,5.9,0,0,0-4.1-1.232h-3.68v9.44Zm0-11.888a12.437,12.437,0,0,1,3.776.512,7.175,7.175,0,0,1,2.672,1.424,5.7,5.7,0,0,1,1.568,2.24,7.779,7.779,0,0,1,.528,2.928,7.462,7.462,0,0,1-.56,2.928,6.258,6.258,0,0,1-1.648,2.288A7.629,7.629,0,0,1,61.3,24.9a11.586,11.586,0,0,1-3.664.528h-3.68V34H50.866V11.072Z"
                  transform="translate(183.52 6264.679)"
                  fill="#fcfcfc"
                  stroke="#fff"
                  stroke-width="1.5"
                />
                <path
                  id="Path_5320"
                  data-name="Path 5320"
                  d="M88.488,16.238a1.378,1.378,0,0,1-.36.414.766.766,0,0,1-.45.126,1.284,1.284,0,0,1-.72-.306,10.784,10.784,0,0,0-1.044-.666,7.58,7.58,0,0,0-1.494-.684,6.347,6.347,0,0,0-2.106-.306,6.1,6.1,0,0,0-2.07.324,4.415,4.415,0,0,0-1.494.846,3.539,3.539,0,0,0-.9,1.278,3.962,3.962,0,0,0-.306,1.566,2.987,2.987,0,0,0,.522,1.8,4.781,4.781,0,0,0,1.4,1.206,11.585,11.585,0,0,0,1.98.882q1.116.36,2.268.756a23.466,23.466,0,0,1,2.268.9,7.576,7.576,0,0,1,1.98,1.242,5.541,5.541,0,0,1,1.4,1.854,6.082,6.082,0,0,1,.54,2.7,8.779,8.779,0,0,1-.576,3.186,7.283,7.283,0,0,1-1.692,2.574,7.762,7.762,0,0,1-2.718,1.728,9.926,9.926,0,0,1-3.654.63,11.264,11.264,0,0,1-4.572-.9,10.841,10.841,0,0,1-3.51-2.466L74.2,33.266a1.252,1.252,0,0,1,.342-.324.827.827,0,0,1,.468-.144.949.949,0,0,1,.522.2,7.053,7.053,0,0,1,.684.468q.378.288.864.63a7.321,7.321,0,0,0,1.1.63,8.212,8.212,0,0,0,1.422.486,8.065,8.065,0,0,0,1.782.18,6.65,6.65,0,0,0,2.214-.342,4.682,4.682,0,0,0,1.638-.954A4.207,4.207,0,0,0,86.274,32.6a4.962,4.962,0,0,0,.36-1.926,3.151,3.151,0,0,0-.54-1.908,4.262,4.262,0,0,0-1.386-1.26,9.364,9.364,0,0,0-1.98-.846q-1.116-.36-2.268-.72-1.152-.378-2.268-.864a7.327,7.327,0,0,1-1.98-1.26,5.92,5.92,0,0,1-1.4-1.926,7.06,7.06,0,0,1-.522-2.88,6.78,6.78,0,0,1,2.07-4.914,7.687,7.687,0,0,1,2.5-1.584,9.2,9.2,0,0,1,3.42-.594A10.774,10.774,0,0,1,86.2,12.6a9.269,9.269,0,0,1,3.132,1.98Zm22.265,18.918L110.735,38H94.841V12.206h15.894V15.05h-12.4v8.568h10.044v2.736H98.333v8.8ZM122.764,24.7a8.944,8.944,0,0,0,2.664-.36,5.562,5.562,0,0,0,1.944-1.044,4.367,4.367,0,0,0,1.188-1.62,5.26,5.26,0,0,0,.4-2.07,4.121,4.121,0,0,0-1.512-3.474,7.345,7.345,0,0,0-4.536-1.17h-3.816V24.7ZM134.68,38h-3.1a1.527,1.527,0,0,1-1.4-.738l-6.7-9.216a1.86,1.86,0,0,0-.666-.612,2.241,2.241,0,0,0-1.08-.2h-2.646V38h-3.474V12.206h7.29a15.659,15.659,0,0,1,4.23.5,7.88,7.88,0,0,1,2.934,1.422A5.683,5.683,0,0,1,131.8,16.4a7.941,7.941,0,0,1,.126,5.508,6.771,6.771,0,0,1-1.26,2.142,7.386,7.386,0,0,1-2,1.6A9.753,9.753,0,0,1,126,26.66a3.449,3.449,0,0,1,1.152,1.1Zm7,0h-3.492V12.206h3.492ZM172.11,25.112a14.962,14.962,0,0,1-.918,5.328A12.2,12.2,0,0,1,168.6,34.6a11.67,11.67,0,0,1-4.032,2.718,14.562,14.562,0,0,1-10.368,0,11.709,11.709,0,0,1-4.014-2.718,12.2,12.2,0,0,1-2.592-4.158,14.962,14.962,0,0,1-.918-5.328,14.816,14.816,0,0,1,.918-5.31,12.163,12.163,0,0,1,2.592-4.176A11.588,11.588,0,0,1,154.2,12.89a14.31,14.31,0,0,1,10.368,0,11.549,11.549,0,0,1,4.032,2.736,12.163,12.163,0,0,1,2.592,4.176A14.816,14.816,0,0,1,172.11,25.112Zm-3.582,0a13.109,13.109,0,0,0-.648-4.266,8.93,8.93,0,0,0-1.836-3.186,7.916,7.916,0,0,0-2.88-2.016,10.479,10.479,0,0,0-7.542,0,8.087,8.087,0,0,0-2.9,2.016,8.93,8.93,0,0,0-1.836,3.186,13.109,13.109,0,0,0-.648,4.266,13.109,13.109,0,0,0,.648,4.266,9.143,9.143,0,0,0,1.836,3.186,8.194,8.194,0,0,0,2.9,2,10.737,10.737,0,0,0,7.542,0,8.019,8.019,0,0,0,2.88-2,9.143,9.143,0,0,0,1.836-3.186A13.109,13.109,0,0,0,168.528,25.112Z"
                  transform="translate(186.698 6263.833)"
                  fill="#c42c66"
                  stroke="#b22c5f"
                  stroke-width="1.5"
                />
                <g id="Group_28094" data-name="Group 28094">
                  <circle
                    id="Ellipse_997"
                    data-name="Ellipse 997"
                    cx="2.15"
                    cy="2.15"
                    r="2.15"
                    transform="translate(186.187 6302.32)"
                    fill="#b22c5f"
                    stroke="#b22c5f"
                    stroke-width="0.7"
                  />
                  <path
                    id="Path_5322"
                    data-name="Path 5322"
                    d="M12,39h2"
                    transform="translate(179.837 6265.97)"
                    fill="none"
                    stroke="#b22c5f"
                    stroke-width="0.5"
                  />
                  <path
                    id="Path_5323"
                    data-name="Path 5323"
                    d="M62,39h2"
                    transform="translate(177.218 6265.97)"
                    fill="none"
                    stroke="#b22c5f"
                    stroke-width="0.5"
                  />
                  <path
                    id="Path_5324"
                    data-name="Path 5324"
                    d="M17,39h3.5"
                    transform="translate(179.837 6265.97)"
                    fill="none"
                    stroke="#b22c5f"
                    stroke-width="0.5"
                  />
                  <path
                    id="Path_5325"
                    data-name="Path 5325"
                    d="M23,39h3.5"
                    transform="translate(179.837 6265.97)"
                    fill="none"
                    stroke="#b22c5f"
                    stroke-width="0.5"
                  />
                  <path
                    id="Path_5326"
                    data-name="Path 5326"
                    d="M30,39h3.5"
                    transform="translate(179.337 6265.97)"
                    fill="none"
                    stroke="#b22c5f"
                    stroke-width="0.5"
                  />
                  <path
                    id="Path_5327"
                    data-name="Path 5327"
                    d="M37,39h3.5"
                    transform="translate(178.252 6265.97)"
                    fill="none"
                    stroke="#b22c5f"
                    stroke-width="0.5"
                  />
                  <path
                    id="Path_5328"
                    data-name="Path 5328"
                    d="M43,39h3.5"
                    transform="translate(177.998 6265.97)"
                    fill="none"
                    stroke="#b22c5f"
                    stroke-width="0.5"
                  />
                  <path
                    id="Path_5329"
                    data-name="Path 5329"
                    d="M50,39h3.5"
                    transform="translate(177.703 6265.97)"
                    fill="none"
                    stroke="#b22c5f"
                    stroke-width="0.5"
                  />
                  <path
                    id="Path_5330"
                    data-name="Path 5330"
                    d="M56,39h3.5"
                    transform="translate(177.449 6265.97)"
                    fill="none"
                    stroke="#b22c5f"
                    stroke-width="0.5"
                  />
                  <path
                    id="Path_5331"
                    data-name="Path 5331"
                    d="M66,40.5,70.5,36"
                    transform="translate(177.011 6265.97)"
                    fill="none"
                    stroke="#b22c5f"
                    stroke-width="1"
                  />
                  <path
                    id="Path_5332"
                    data-name="Path 5332"
                    d="M66,36l4.5,4.5"
                    transform="translate(177.011 6265.97)"
                    fill="none"
                    stroke="#b22c5f"
                    stroke-width="1"
                  />
                </g>
                <path
                  id="Path_5333"
                  data-name="Path 5333"
                  d="M94.864,32.684c-9.463.219-14.754.124-23.864,0l.542,5.453H83.475a283.584,283.584,0,0,0,29.288-2.479c15.336-3.2,23.009-5.39,34.169-10.41A115.057,115.057,0,0,0,167,12.855l-.542-.991L152.9,19.795c-10.714,5.07-17.148,7.2-29.288,9.915A177,177,0,0,1,94.864,32.684Z"
                  transform="translate(185.698 6263.833)"
                  fill="#070707"
                />
              </g>
              <g
                id="Group_28091"
                data-name="Group 28091"
                transform="translate(352.808 6264.517)"
                clip-path="url(#clip-path)"
              >
                <path
                  id="Path_5334"
                  data-name="Path 5334"
                  d="M167.778,5.111l2.555.738,2.809-2.04-4.031.116A.231.231,0,0,0,169,3.96l-1.276.733a.233.233,0,0,0-.092.1.237.237,0,0,0-.023.131.227.227,0,0,0,.169.191Z"
                  transform="translate(-165)"
                  fill="#fff"
                />
                <path
                  id="Path_5335"
                  data-name="Path 5335"
                  d="M180.342,2.827l-2.8-.6a1.68,1.68,0,0,0-1.364.3L167.72,8.667l-2.031-.089a.557.557,0,0,0-.328.093.557.557,0,0,0-.227.608.561.561,0,0,0,.186.286l1.978,1.569a.243.243,0,0,0,.235.04c.565-.218,2.667-1.333,5.151-2.7l.5,5.116a.247.247,0,0,0,.047.122.25.25,0,0,0,.1.08.243.243,0,0,0,.249-.038l1.111-.924a.338.338,0,0,0,.116-.2l1.053-5.907c1.778-.987,3.476-1.942,4.671-2.618a.686.686,0,0,0,.352-.707.688.688,0,0,0-.543-.573Z"
                  transform="translate(-165)"
                  fill="#fff"
                />
              </g>
            </g>
          </svg>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#trip-recommned">Recommendation</Link>
          </li>
          <li className="p-4">
            <Link href="/#blog">Blog</Link>
          </li>
          <li className="p-4">
            <Link href="/#guide">Tour Guide</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? <p>-</p> : <p>---</p>}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/work">Work</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <button className="border border-white px-3 py-2 rounded-sm">
          Login or Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
