"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { withBasePath } from "@/lib/basePath";

export const Navbar = () => {
  const navigation = [
    { "title": "Install", "href": "#install" },
    { "title": "Features", "href": "#features" },
    { "title": "News", "href": "https://ko-fi.com/krille/posts" },
  ];

  return (
    <div className="w-full">
      <div className="w-full p-2 items-center justify-center flex text-orange-800 bg-orange-100 border-b">
        <p>Every first Sunday of the month, we celebrate <a className="text-orange-900 underline hover:text-orange-950" href="https://di.day">Digital Independence Day</a>.</p>
      </div>
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium dark:text-gray-100">
            <span>
              <Image
                src={withBasePath("/img/logo.png")}
                width="32"
                alt="FluffyChat logo"
                height="32"
                className="w-8"
              />
            </span>
            <span><span className="text-primary">Fluffy</span><span className="text-secondary">Chat</span></span>
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
          <a href='https://ko-fi.com/C1C86VN53' className="hidden mr-3 lg:flex nav__item hover:scale-110 transition-transform">
            <div className="rounded-xl bg-slate-900 dark:bg-slate-50 p-2 flex flex-row spacing-4"><img src={withBasePath("/img/ko-fi.png")} className="h-5 mr-2" />
              <span className="text-white dark:text-black text-xs flex items-center mr-2">Support on Ko-Fi</span>
            </div>
          </a>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navigation.map((item, index) => (
                    <Link key={index} href={item.href} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                      {item.title}
                    </Link>
                  ))}
                  <a href='https://ko-fi.com/C1C86VN53' className="mt-4 hover:scale-110 transition-transform">
                    <div className="rounded-xl bg-slate-900 dark:bg-slate-50 p-2 flex flex-row spacing-4"><img src={withBasePath("/img/ko-fi.png")} className="h-5 mr-2" />
                      <span className="text-white dark:text-black text-xs flex items-center mr-2">Support on Ko-Fi</span>
                    </div>
                  </a>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={menu.href} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </div>
  );
}

