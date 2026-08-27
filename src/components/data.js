import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/screenshot_desktop.png";
import benefitTwoImg from "../../public/img/screenshot_mobile_2.png";

const benefitOne = {
  title: "More than a normal messaging app",
  desc: "FluffyChat supports more than easy to use end-to-end encryption and video calls. You can own all your data.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Easy to use",
      desc: "FluffyChat is designed to be as easy to use as possible. No one should be left behind.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Secure",
      desc: "With end-to-end encryption, cross-signing and encrypted backups, FluffyChat is one of the most secure messenger out there.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Decentral",
      desc: "You can choose the server you want to use or even self-host your own!",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Feature rich and stable",
  desc: "FluffyChat offers a big variaty of features covering all your daily needs.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Video Calls",
      desc: "Direct calls and big video conferences. All supported with Matrix RTC compatible encryption.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Compatible",
      desc: "FluffyChat is compatible with any other [matrix] client like Element, Nheko, Cinny or NeoChat.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "FluffyChat is intuitive to use and offers a modern Material Design.",
      icon: <SunIcon />,
    },
  ],
};


export { benefitOne, benefitTwo };
