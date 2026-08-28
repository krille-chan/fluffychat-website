import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy | FluffyChat",
  description: "Privacy policy for FluffyChat",
};

const pushNotificationExample = `{
  "notification": {
    "event_id": "$3957tyerfgewrf384",
    "room_id": "!slw48wfj34rtnrf:example.com",
    "counts": {
      "unread": 2,
      "missed_calls": 1
    },
    "devices": [
      {
        "app_id": "chat.fluffy.fluffychat",
        "pushkey": "V2h5IG9uIGVhcnRoIGRpZCB5b3UgZGVjb2RlIHRoaXM/",
        "pushkey_ts": 12345678,
        "data": {
          "client_name": "<random-identifier-for-the-client-in-case-of-multi-account-usage>"
        },
        "tweaks": {
          "sound": "bing"
        }
      }
    ]
  }
}`;

const tocItems = [
  { href: "#matrix", label: "Matrix" },
  { href: "#database", label: "Database" },
  { href: "#encryption", label: "Encryption" },
  { href: "#app-permissions", label: "App Permissions" },
  { href: "#push-notifications", label: "Push Notifications" },
  { href: "#crash-reports", label: "Crash Reports" },
  { href: "#playstore-safety", label: "PlayStore Safety Standards" },
  { href: "#calls", label: "Group calls" },
];

const articleClassName =
  "max-w-3xl mx-auto space-y-5 text-base leading-relaxed text-gray-600 dark:text-gray-300 " +
  "[&_h2]:scroll-mt-8 [&_h2]:pt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-800 dark:[&_h2]:text-white [&_h2]:border-b [&_h2]:border-gray-200 dark:[&_h2]:border-trueGray-700 [&_h2]:pb-3 " +
  "[&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-800 dark:[&_h3]:text-white " +
  "[&_h4]:pt-4 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-gray-700 dark:[&_h4]:text-gray-200 " +
  "[&_p]:leading-7 " +
  "[&_a]:text-indigo-600 dark:[&_a]:text-indigo-400 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-indigo-500 dark:hover:[&_a]:text-indigo-300 " +
  "[&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:my-4 " +
  "[&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_ol]:my-4 " +
  "[&_li]:leading-7 " +
  "[&_code]:rounded [&_code]:bg-gray-100 dark:[&_code]:bg-trueGray-800 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:font-mono [&_code]:text-gray-800 dark:[&_code]:text-gray-200 " +
  "[&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-gray-200 dark:[&_pre]:border-trueGray-700 [&_pre]:bg-gray-900 [&_pre]:p-4 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-sm [&_pre_code]:text-gray-100";

export default function PrivacyPage() {
  return (
    <Container className="py-10 lg:py-16">
      <header className="max-w-3xl mx-auto mb-10">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-800 lg:text-4xl dark:text-white">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
          FluffyChat is available on Android, iOS, Linux and as a web version.
          Desktop versions for Windows and macOS may follow.
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
        <h2 id="matrix">Matrix</h2>
        <p>
          FluffyChat uses the Matrix protocol. This means that FluffyChat is just
          a client that can be connected to any compatible matrix server. The
          respective data protection agreement of the server selected by the user
          then applies.
        </p>
        <p>
          For convenience, one or more servers are set as default that the
          FluffyChat developers consider trustworthy. The developers of FluffyChat
          do not guarantee their trustworthiness. Before the first communication,
          users are informed which server they are connecting to.
        </p>
        <p>
          FluffyChat only communicates with the selected server and with{" "}
          <a href="https://openstreetmap.org">OpenStreetMap</a> to display maps.
        </p>
        <p>
          More information is available at:{" "}
          <a href="https://matrix.org">https://matrix.org</a>
        </p>

        <h2 id="database">Database</h2>
        <p>
          FluffyChat caches some data received from the server in a local sqflite
          database on the device of the user. On web indexedDB is used. FluffyChat
          always tries to encrypt the database by using SQLCipher and stores the
          encryption key in the{" "}
          <a href="https://pub.dev/packages/flutter_secure_storage">
            Secure Storage
          </a>{" "}
          of the device.
        </p>
        <p>
          More information is available at:{" "}
          <a href="https://pub.dev/packages/sqflite">
            https://pub.dev/packages/sqflite
          </a>{" "}
          and{" "}
          <a href="https://pub.dev/packages/sqlcipher_flutter_libs">
            https://pub.dev/packages/sqlcipher_flutter_libs
          </a>
        </p>

        <h2 id="encryption">Encryption</h2>
        <p>
          All communication of substantive content between Fluffychat and any
          server is done in secure way, using transport encryption to protect it.
        </p>
        <p>
          FluffyChat also uses End-To-End-Encryption by using{" "}
          <a href="https://github.com/matrix-org/vodozemac">Vodozemac</a> and
          enables it by default for private chats.
        </p>

        <h2 id="app-permissions">App Permissions</h2>
        <p>
          The permissions are the same on Android and iOS but may differ in the
          name. This are the Android Permissions:
        </p>
        <h4>Internet Access</h4>
        <p>
          FluffyChat needs to have internet access to communicate with the Matrix
          Server.
        </p>
        <h4>Vibrate</h4>
        <p>
          FluffyChat uses vibration for local notifications. More informations
          about this are at the used package:{" "}
          <a href="https://pub.dev/packages/flutter_local_notifications">
            https://pub.dev/packages/flutter_local_notifications
          </a>
        </p>
        <h4>Record Audio</h4>
        <p>
          FluffyChat can send voice messages in a chat and therefore needs to
          have the permission to record audio.
        </p>
        <h4>Write External Storage</h4>
        <p>
          The user is able to save received files and therefore app needs this
          permission.
        </p>
        <h4>Read External Storage</h4>
        <p>
          The user is able to send files from the device&apos;s file system.
        </p>
        <h4>Location</h4>
        <p>
          FluffyChat makes it possible to share the current location via the
          chat. When the user shares their location, FluffyChat uses the device
          location service and sends the geo-data via Matrix.
        </p>

        <h2 id="push-notifications">Push Notifications</h2>
        <p>
          FluffyChat uses the Firebase Cloud Messaging service for push
          notifications on Android and iOS. This takes place in the following
          steps:
        </p>
        <ol>
          <li>
            The matrix server sends the push notification to the FluffyChat Push
            Gateway
          </li>
          <li>
            The FluffyChat Push Gateway forwards the message in a different format
            to Firebase Cloud Messaging
          </li>
          <li>
            Firebase Cloud Messaging waits until the user&apos;s device is online
            again
          </li>
          <li>
            The device receives the push notification from Firebase Cloud
            Messaging and displays it as a notification
          </li>
        </ol>
        <p>
          The source code of the push gateway can be viewed here:{" "}
          <a href="https://github.com/krille-chan/fluffygate">
            https://github.com/krille-chan/fluffygate
          </a>
        </p>
        <p>
          <code>event_id_only</code> is used as the format for the push
          notification. A typical push notification therefore only contains:
        </p>
        <ul>
          <li>Event ID</li>
          <li>Room ID</li>
          <li>Unread Count</li>
          <li>Information about the device that is to receive the message</li>
        </ul>
        <p>A typical push notification could look like this:</p>
        <pre>
          <code>{pushNotificationExample}</code>
        </pre>
        <p>
          FluffyChat sets the <code>event_id_only</code> flag at the Matrix
          Server. This server is then responsible to send the correct data.
        </p>
        <p>
          FluffyChat also supports UnifiedPush. When UnifiedPush is used, the
          UnifiedPush provider acts as the push notification service. Learn
          more at <a href="https://unifiedpush.org/">unifiedpush.org</a>.
        </p>

        <h2 id="crash-reports">Crash Reports</h2>
        <p>
          FluffyChat can optionally assist with reporting errors. This feature is
          opt-in and can be toggled in the security settings.
        </p>
        <p>
          When an error occurs, FluffyChat queries the public GitHub API with an
          anonymous hash to check for an existing issue. If found, the issue is
          opened in the browser. Otherwise, a pre-filled GitHub new-issue form is
          opened. No data is sent automatically — the user must actively submit
          the form.
        </p>
        <p>
          More information:{" "}
          <a href="https://github.com/krille-chan/fluffychat/issues">
            https://github.com/krille-chan/fluffychat/issues
          </a>
        </p>

        <h2 id="playstore-safety">
          Explanation of FluffyChat&apos;s Compliance with Google Play
          Store&apos;s Safety Standards
        </h2>
        <p>
          FluffyChat is committed to promoting a safe and respectful environment
          for all users. As a Matrix client, FluffyChat connects users to various
          Matrix servers. Please note that FluffyChat does not host or manage any
          servers directly, and as such, we do not have the capability to enforce
          content moderation or deletion within the app itself.
        </p>
        <p>
          To enhance user safety and help protect against the sexual abuse and
          exploitation of children, FluffyChat enables users to report
          inappropriate content directly to server administrators.
        </p>
        <h4>Reporting Content or Users:</h4>
        <ol>
          <li>
            Mark a message in the chat: Tap and hold the message you wish to
            report.
          </li>
          <li>Report the message: Select the &quot;Report&quot; option.</li>
          <li>
            Provide a reason and score: Enter the reason for reporting and assign
            a score from 1-100 to indicate how offensive the content is.
          </li>
          <li>
            Notification to admin: The server administrator will be notified of
            the reported content.
          </li>
        </ol>
        <p>
          In addition to reporting messages, users can also report other users
          following a similar process.
        </p>
        <p>
          We encourage server administrators to adhere to strict safety standards
          and provide mechanisms for addressing and moderating inappropriate
          content. For more information on the Matrix protocol and its safety
          standards, please refer to the following link:{" "}
          <a href="https://matrix.org/docs/older/moderation/">
            https://matrix.org/docs/older/moderation/
          </a>
        </p>

        <h2 id="calls">Calls</h2>
        <p>
          FluffyChat supports Matrix RTC calls via LiveKit. These calls use
          LiveKit encryption with asymmetric keys shared via Matrix's olm-encrypted
          to-device messaging.
        </p>
        <p>
          The SFU used depends on the origin of the call. Each
          homeserver can define its preferred SFU in a static file, which is then
          downloaded by the client. When starting a new call, the client uses the
          SFU defined by the homeserver. When joining an existing call, the client
          instead uses the SFU with which the call was created, which may be a foreign
          SFU instance.
        </p>
      </article>
    </Container>
  );
}
