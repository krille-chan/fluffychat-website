import type { Metadata } from "next";

const changelogUrl =
  "https://github.com/krille-chan/fluffychat/blob/main/CHANGELOG.md";

export const metadata: Metadata = {
  title: "Changelog | FluffyChat",
  description: "Changelog for FluffyChat",
};

export default function Changelog() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${changelogUrl}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(changelogUrl)});`,
        }}
      />
      <p className="p-8 text-center">
        Redirecting to the <a href={changelogUrl}>changelog</a>…
      </p>
    </>
  );
}
