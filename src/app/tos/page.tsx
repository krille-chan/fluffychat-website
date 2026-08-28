import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Terms of Service | FluffyChat",
  description: "Terms of service for FluffyChat",
};

const articleClassName =
  "max-w-3xl mx-auto space-y-5 text-base leading-relaxed text-gray-600 dark:text-gray-300 " +
  "[&_p]:leading-7 " +
  "[&_a]:text-indigo-600 dark:[&_a]:text-indigo-400 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-indigo-500 dark:hover:[&_a]:text-indigo-300";

export default function TermsPage() {
  return (
    <Container className="py-10 lg:py-16">
      <header className="max-w-3xl mx-auto mb-10">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-800 lg:text-4xl dark:text-white">
          Terms of Service
        </h1>
      </header>

      <article className={articleClassName}>
        <p>
          FluffyChat is a client application for the Matrix messaging network. It
          does not provide or operate any messaging servers.
        </p>
        <p>
          FluffyChat may suggest or preconfigure certain servers for user
          convenience. These servers are operated by independent third parties.
          The developers of FluffyChat have no control over these servers and are
          not responsible for their availability, security, privacy practices, or
          the content transmitted through them.
        </p>
        <p>
          Your messages and data are processed and stored by the server you choose
          to connect to. Please review the terms and privacy policies of the server
          operator you use.
        </p>
        <p>
          FluffyChat is provided &quot;as is&quot;, without warranties of any kind,
          express or implied. The developers of FluffyChat are not liable for any
          damages, data loss, service interruptions, or other issues arising from
          the use of the application or from the servers you connect to.
        </p>
        <p>
          By using FluffyChat, you agree to use the application in compliance with
          applicable laws and the policies of the server you choose.
        </p>
      </article>
    </Container>
  );
}
