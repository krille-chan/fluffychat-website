import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { withBasePath } from "@/lib/basePath";

export function Footer() {
  const navigation = [
    { "title": "Source code", "href": "https://github.com/krille-chan/fluffychat" },
    { "title": "Releases", "href": "https://github.com/krille-chan/fluffychat/releases" },
    { "title": "Translations", "href": "https://hosted.weblate.org/projects/fluffychat/" },
    { "title": "Support on Ko-fi", "href": "https://ko-fi.com/krille-chan" },
    { "title": "Support on Liberapay", "href": "https://liberapay.com/KrilleChritzelius" },
  ];
  const legal = [
    { "title": "Privacy", "href": "/privacy" },
    { "title": "Terms", "href": "/tos" },
    { "title": "Built with Nextly from Web3Templates", "href": "https://web3templates.com" },
  ];


  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
              >
                <Image
                  src={withBasePath("/img/logo.png")}
                  alt="FluffyChat logo"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span><span className="text-primary">Fluffy</span><span className="text-secondary">Chat</span></span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              <p>
                krille-chan - Christian Kußowski<br /> c/o Online-Impressum #8198<br /> Europaring 90<br /> 53757 St Augustin
              </p>
              <p>
                E-Mail: christian-kussowski[at)posteo.de<br />
                <a className="text-gray-500 rounded-md dark:text-gray-300 underline hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700" href="https://mein.online-impressum.de/krille-chan/#Zweiter_Kontaktweg" rel="nofollow">Zweiter Kontaktweg</a>
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://troet.cafe/@krille"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Mastodon</span>
                <Mastodon />
              </a>
              <a href="https://bsky.app/profile/doitsunokoitsu.bsky.social" target="_blank" rel="noopener">
                <span className="sr-only">BlueSky</span>
                <BlueSky />
              </a>
              <a href="https://www.linkedin.com/in/christian-ku%C3%9Fowski-4a262a262/" target="_blank" rel="noopener">
                <span className="sr-only">Linkedin</span>
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
}

const Mastodon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 75 79"
    fill="currentColor"
  >
    <path d="M73.8393 17.4898C72.6973 9.00165 65.2994 2.31235 56.5296 1.01614C55.05 0.797115 49.4441 0 36.4582 0H36.3612C23.3717 0 20.585 0.797115 19.1054 1.01614C10.5798 2.27644 2.79399 8.28712 0.904997 16.8758C-0.00358524 21.1056 -0.100549 25.7949 0.0682394 30.0965C0.308852 36.2651 0.355538 42.423 0.91577 48.5665C1.30307 52.6474 1.97872 56.6957 2.93763 60.6812C4.73325 68.042 12.0019 74.1676 19.1233 76.6666C26.7478 79.2728 34.9474 79.7055 42.8039 77.9162C43.6682 77.7151 44.5217 77.4817 45.3645 77.216C47.275 76.6092 49.5123 75.9305 51.1571 74.7385C51.1797 74.7217 51.1982 74.7001 51.2112 74.6753C51.2243 74.6504 51.2316 74.6229 51.2325 74.5948V68.6416C51.2321 68.6154 51.2259 68.5896 51.2142 68.5661C51.2025 68.5426 51.1858 68.522 51.1651 68.5058C51.1444 68.4896 51.1204 68.4783 51.0948 68.4726C51.0692 68.4669 51.0426 68.467 51.0171 68.4729C45.9835 69.675 40.8254 70.2777 35.6502 70.2682C26.7439 70.2682 24.3486 66.042 23.6626 64.2826C23.1113 62.762 22.7612 61.1759 22.6212 59.5646C22.6197 59.5375 22.6247 59.5105 22.6357 59.4857C22.6466 59.4609 22.6633 59.4391 22.6843 59.422C22.7053 59.4048 22.73 59.3929 22.7565 59.3871C22.783 59.3813 22.8104 59.3818 22.8367 59.3886C27.7864 60.5826 32.8604 61.1853 37.9522 61.1839C39.1768 61.1839 40.3978 61.1839 41.6224 61.1516C46.7435 61.008 52.1411 60.7459 57.1796 59.7621C57.3053 59.7369 57.431 59.7154 57.5387 59.6831C65.4861 58.157 73.0493 53.3672 73.8178 41.2381C73.8465 40.7606 73.9184 36.2364 73.9184 35.7409C73.9219 34.0569 74.4606 23.7949 73.8393 17.4898Z" />
    <path d="M61.2484 27.0263V48.114H52.8916V27.6475C52.8916 23.3388 51.096 21.1413 47.4437 21.1413C43.4287 21.1413 41.4177 23.7409 41.4177 28.8755V40.0782H33.1111V28.8755C33.1111 23.7409 31.0965 21.1413 27.0815 21.1413C23.4507 21.1413 21.6371 23.3388 21.6371 27.6475V48.114H13.2839V27.0263C13.2839 22.7176 14.384 19.2946 16.5843 16.7572C18.8539 14.2258 21.8311 12.926 25.5264 12.926C29.8036 12.926 33.0357 14.5705 35.1905 17.8559L37.2698 21.346L39.3527 17.8559C41.5074 14.5705 44.7395 12.926 49.0095 12.926C52.7013 12.926 55.6784 14.2258 57.9553 16.7572C60.1531 19.2922 61.2508 22.7152 61.2484 27.0263Z" fill="white" />

  </svg>
);

const BlueSky = ({ size = 24 }) => (
  <svg viewBox="0 0 600 530" width={size} height={size} version="1.1"
    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);

