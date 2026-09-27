import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Homeserver Privacy Policy | fluffy.chat",
  description: "Privacy policy for the fluffy.chat Matrix homeserver",
};

const tocItems = [
  { href: "#controller", label: "Data Controller" },
  { href: "#account", label: "Registration & Account" },
  { href: "#messages", label: "Messages & Content" },
  { href: "#calls", label: "Calls" },
  { href: "#logs", label: "Server Logs" },
  { href: "#retention", label: "Retention & Deletion" },
  { href: "#rights", label: "Your Rights" },
];

const articleClassName =
  "max-w-3xl mx-auto space-y-5 text-base leading-relaxed text-gray-600 dark:text-gray-300 " +
  "[&_h2]:scroll-mt-8 [&_h2]:pt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-800 dark:[&_h2]:text-white [&_h2]:border-b [&_h2]:border-gray-200 dark:[&_h2]:border-trueGray-700 [&_h2]:pb-3 " +
  "[&_p]:leading-7 " +
  "[&_a]:text-indigo-600 dark:[&_a]:text-indigo-400 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-indigo-500 dark:hover:[&_a]:text-indigo-300 " +
  "[&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:my-4 " +
  "[&_li]:leading-7";

export default function ServerPrivacyPage() {
  return (
    <Container className="py-10 lg:py-16">
      <header className="max-w-3xl mx-auto mb-10">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-800 lg:text-4xl dark:text-white">
          Homeserver Privacy Policy
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
          This notice covers the fluffy.chat Matrix homeserver, i.e. the
          server infrastructure that the FluffyChat client can
          connect to. For the privacy practices of the FluffyChat app itself,
          see our <Link href="/privacy">app privacy policy</Link>.
        </p>
      </header>

      <nav
        aria-label="Table of contents"
        className="max-w-3xl mx-auto mb-12 rounded-2xl border border-gray-100 bg-gray-50 p-6 dark:border-trueGray-700 dark:bg-trueGray-800"
      >
        <h2 className="text-sm font-bold tracking-wider text-gray-500 uppercase dark:text-gray-400">
          On this page
        </h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {tocItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-gray-700 underline-offset-2 hover:text-indigo-600 hover:underline dark:text-gray-200 dark:hover:text-indigo-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <article className={articleClassName}>
        <h2 id="controller">Data Controller</h2>
        <p>
          The data controller responsible for processing personal data on
          this homeserver is:
        </p>
        <p>
          krille-chan - Christian Kußowski
          <br /> c/o Online-Impressum #8198
          <br /> Europaring 90
          <br /> 53757 St Augustin
          <br />
          E-Mail: christian-kussowski[at]posteo.de
        </p>
        <p>
          Feel free to reach out to this address with any questions about
          this privacy policy or your data.
        </p>

        <h2 id="account">Registration & Account</h2>
        <p>
          Using the homeserver requires an account. Authentication is handled
          by the{" "}
          <a href="https://element-hq.github.io/matrix-authentication-service/">
            Matrix Authentication Service (MAS)
          </a>
          , which stores at least your username, an e-mail address for
          account recovery, and a securely hashed password. MAS also manages
          your active sessions and devices, so you can review and revoke
          access to your account at any time. MAS also allows to login by
          SSO with external services like Google or Apple.
        </p>

        <h2 id="messages">Messages & Content</h2>
        <p>
          Private chats and most rooms use end-to-end encryption. In that
          case, the homeserver only relays encrypted message content and
          cannot read it. For unencrypted rooms, in particular public rooms,
          the content is visible to the server.
        </p>
        <p>
          Regardless of content encryption, the server inevitably processes
          metadata, such as who is a member of which room, message
          timestamps, and technical event identifiers. Learn more about which
          metadata are stored at <a href="https://matrix.org">matrix.org</a>.
        </p>

        <h2 id="calls">Calls</h2>
        <p>
          Audio and video calls (Matrix RTC) are routed through a{" "}
          <a href="https://livekit.io/">LiveKit</a> SFU (Selective Forwarding
          Unit) that we operate. The SFU forwards the media streams between
          call participants to connect them. The transmission is encrypted,
          and encryption keys are exchanged end-to-end over Matrix, so voice
          and video data is generally not accessible to the operator. Call
          content is not recorded or permanently stored; it is only processed
          for the duration of the call.
        </p>

        <h2 id="logs">Server Logs</h2>
        <p>
          As with any server, operating the service produces technical log
          data, such as IP addresses, access times, and the client used.
          This data is used to maintain the security and stability of the
          service, for example to detect abuse, and is automatically deleted
          after a short period.
        </p>

        <h2 id="retention">Retention & Deletion</h2>
        <p>
          Account data and messages are stored for as long as your account
          exists. You can delete your account, as well as individual
          messages, at any time by yourself at
          <a href="https://auth.fluffy.chat">auth.fluffy.chat</a>.
          Once your account is deleted, your personal data is removed.
          Since Matrix rooms are federated,
          copies of messages you sent to rooms with participants from other
          servers may persist on those servers.
        </p>

        <h2 id="rights">Your Rights</h2>
        <p>
          Under the GDPR, you have the right to access, rectify, erase, and
          restrict the processing of your data, as well as the right to data
          portability. You also have the right to lodge a complaint with a
          data protection supervisory authority. To exercise your rights,
          please contact us using the address above.
        </p>
      </article>
    </Container>
  );
}
