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
  title: "Messaging how it should be",
  desc: "Whether for your friends, your company or local community, FluffyChat supports a variety of features to cover all your daily needs.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Easy to use",
      desc: "Simply install, log in and start chatting. The intuitive user interface makes secure communication as easy as possible.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Secure",
      desc: "With olm/megolm end-to-end encryption, encrypted message backups and an automated key trust system, FluffyChat is among the most secure messengers available.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Decentral",
      desc: "Based on the open Matrix protocol we build a decentralized messaging network together, which no entity can control. Host your own chat server while remaining in contact with everyone.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Feature rich and reliable",
  desc: "From public chats with tens of thousands of participants and polls to custom stickers, spaces, rich moderation tools, and multi-device support, FluffyChat delivers a comprehensive communication suite.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Secure video Calls",
      desc: "Direct calls and video conferences, fully secured with Matrix RTC-compatible encryption.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Not another walled garden",
      desc: "We do not build another walled garden! FluffyChat is fully compatible with any other Matrix client like Element, Nheko, Cinny or NeoChat. Learn more at matrix.org.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Made by volunteers",
      desc: "FluffyChat is a non-profit project based on open standards and driven entirely by volunteers. Infrastructure is funded by donations, and participation is open to everyone.",
      icon: <SunIcon />,
    },
  ],
};


export { benefitOne, benefitTwo };
