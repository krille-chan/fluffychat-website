---
title: FAQ
layout: "article.njk"
permalink: faq/index.html
---

<p class="text-center"><input id="searchField" type="text" placeholder="Search" class="placeholder:text-slate-400 text-center text-slate-700 text-3xl bg-slate-100 border border-slate-200 rounded-full w-full px-8 py-4 my-8"/></p>

<div id="faqEntries">

## How can I support FluffyChat?

**FluffyChat needs YOUR help!**

FluffyChat is developed by volunteers and will always be free for everyone. But hosting and development are not possible without financial support.

Right now I spend almost all of my free time developing FluffyChat, completely unpaid. However, this is not something I can do forever. The future of FluffyChat depends on people like you.

Most people will ignore this message. But if FluffyChat is useful to you, please consider making a small donation.

Support FluffyChat here:
- <https://ko-fi.com/krille>
- <https://liberapay.com/KrilleChritzelius>

Thank you for helping keep FluffyChat alive and independent.

## What is FluffyChat?

FluffyChat is a user-friendly, free, and ad-free open-source app based on the [Matrix protocol](https://matrix.org) and works similarly to Telegram or WhatsApp.

With FluffyChat, you can chat with your friends privately, create group chats, exchange voice messages, share pictures and videos, and even send your location.

And the best part: **FluffyChat is compatible with other Matrix messengers!**

## Who is FluffyChat for?

FluffyChat is for anyone looking for a fast, user-friendly, and secure alternative to centralized messaging apps like WhatsApp, Telegram, or WeChat.

## Who created FluffyChat?

FluffyChat is developed by the community and was initiated by Christian ([Krille](https://krille-chan.github.io/)) Kußowski. However there are a lot of contributors, either code or translations. You can find them [here](https://github.com/krille-chan/fluffychat/graphs/contributors).

## How is FluffyChat funded?

FluffyChat is a non-profit project driven by volunteers and totally funded by donations.

## Is FluffyChat available on my device?

Yes! You can use FluffyChat on mobile phones, tablets, and as a web version on your PC. Available on Android (Play Store and F-Droid), iOS (App Store), as a web app and as a desktop app for Linux (Flathub, Snap Store). It even works on Linux phones by using the Arm64 version of the Flatpak/Snap. You can compile it for MacOS and Windows by yourself if you like, but that is not yet supported.

## How do I create a FluffyChat account?

When you first launch the app, you'll be asked to create a new Matrix account. Select a server (e.g., matrix.org), enter your desired username, and a secure password. Optionally, you can add an email address (this is helpful for password recovery, but not required).

## What is a Matrix ID?

Your **Matrix ID** is your unique username on the network, e.g., @name:matrix.org. It consists of your name and the server on which your account is located.

## How do I log in to FluffyChat?

If you already have a Matrix account, simply enter your Matrix ID (e.g., @name:matrix.org) and password. You can log in to any Matrix-compatible server because FluffyChat is decentralized.

## Do I need an email address for FluffyChat?

No, an email address is not required. However, it is recommended if you want to reset your password or verify your account.

## I forgot my password. What now?

If you provided an email address when creating your account, you can reset your password via the server website (e.g., https://matrix.org). Unfortunately, recovery is not possible without an email address. In this case, you will need to create a new account.

## I changed my device and now all my messages are encrypted. What now?

To read your encrypted messages on the new device, you need to restore the backup you created previously. Enter your backup key or password when setting up FluffyChat on the new device. Only then can your messages be decrypted. If you haven't created a backup or have lost the key, your encrypted messages unfortunately cannot be restored.

## How do I create a backup key in FluffyChat?

Open FluffyChat and go to the **settings** to the **Chat Backup**. There you can set up an <u>encrypted</u> chat backup. You will be asked to save a recovery key. Important: Make a note of this key or keep it safe. **Without it, you won't be able to restore your encrypted messages on a new device.**

## I found a bug. What now?

You can report bugs directly on Github. Alternatively, there's a public group chat on Messenger (#fluffy-space:matrix.org) where you can ask questions or send feedback.

## How can I get Push Notifications without Google Services?

Push notifications are a great way to make sure you don't miss important messages in FluffyChat. For users who do not use Google Services (for example Huawei Phones, Amazon Fire tablets or custom roms), setting up push notifications is slightly different.

FluffyChat attempts to set up push notifications automatically every time you launch the app. However, if you do not have Google Services on your device, you may receive an error message. In this case, it is necessary to use an [UnifiedPush app](https://unifiedpush.org/#quick-start) such as Ntfy, UP-FCM Distributor (Google) or Conversations.

### Using Ntfy

In this article, we'll show you how to configure push notifications on your Android device using the **ntfy** app.

#### 🏪 Step 1: Installing and Setting Up ntfy

1. Download and install the [ntfy app](https://ntfy.sh/) from F-Droid or Google Play.
2. Open ntfy and note the topic URL displayed (e.g., `https://ntfy.sh/your-topic`).

#### 🔋 Step 2: Deactivate Battery Optimization for ntfy

Go to your device's **Settings > Apps > ntfy > Battery** and select **Unrestricted** to ensure ntfy runs in the background.

#### ✅ Step 3: Checking Push Configuration in FluffyChat

Open FluffyChat, go to **Settings > Notifications** and verify that the push provider shows ntfy.

#### 🥳 Step 4: Receiving Push Notifications

Send yourself a test message. You should receive a push notification from ntfy.

### Using Conversations

Install [Conversations](https://conversations.im/) and enable it as a UnifiedPush distributor in its settings. FluffyChat will automatically detect it on next launch.

## How can I verify the authenticity of the Android application?

Using tools like [apksigner](https://developer.android.com/tools/apksigner) (CLI) or [AppVerifier](https://github.com/soupslurpr/AppVerifier) (Android application), you can compare the certificate fingerprint of the downloaded apk / installed application with the values indicated below.

**GooglePlay / Github releases:**
```
5E:DB:5C:43:95:B2:F2:D9:BA:68:2F:6A:1D:27:51:70:CC:E5:36:5A:6F:A2:7D:22:20:EA:8D:52:A6:D9:5F:07
```

**F-Droid releases:**
```
05:7A:C4:51:64:A2:E6:E3:1F:6D:DE:55:5A:5F:2C:CC:B4:D8:83:4C:B1:85:25:49:68:1B:00:E3:46:68:CA:F3
```

## How can I extend this FAQ?

You can edit the FAQ by editing the [source file on GitHub](https://github.com/krille-chan/fluffychat-website/blob/main/src/faq.md).

## How to use end to end encryption?

FluffyChat supports end to end encryption. You can enable it per chat. Once enabled it cannot be disabled anymore for security reasons. You can not enable encryption for public rooms as this makes no sense when anyone can join and leave the room anyway. Once you have enabled encryption, the server is no longer able to read the content of your messages. It will encrypt all text messages and files.

To be safe from man-in-the-middle attacks, you should take a look at the device list. You can do this in the encryption settings of a chat. Is there a suspicious device which you or your chat partner don't know? Then you can block it by moving the toggle to the left.

The color of the toggle shows you the security state. Orange means that this device is not verified. Grey means that it is blocked and won't receive the encryption keys — this means that this device won't be able to read your messages anymore! Green means that this device is verified.

To verify the devices of another user, start the verification in a direct chat. For this you have a "Start verification" button in the encryption settings of a direct chat. Be sure that you are standing next to this person or you are connected via phone or any other secure channel. When you have started the verification, you will both see a set of emojis on your device. Compare them and tap on "They match". Wait a little bit and then you should see that all devices become green.

## How can I fork FluffyChat?

### 1. License

FluffyChat is licensed under AGPL. Read the [license](https://github.com/krille-chan/fluffychat/blob/main/LICENSE) and make sure that your fork is open source under the same license and that you fulfill all requirements. Maybe you should consider contacting a lawyer **before** you publish your fork.

### 2. Disable end-to-end encryption!

Due to US export regulations you are not allowed to publish your app in a store or anywhere on a US server before you have removed everything regarding the encryption or fulfill the regulations.

Learn more: <https://www.bis.doc.gov/index.php/policy-guidance/encryption>

### 3. Stay up to date!

FluffyChat contains security related stuff. If we find a security bug, we will try to fix it as soon as possible and ship it with a new version. But this means that your fork is out of date and a security risk. You must decide how you protect your users by choosing one of the following methods:

1. Make your fork as minimal as possible and enable repository mirroring. Set up a CI which publishes new versions automatically if FluffyChat publishes a bug fix.
2. Monitor the FluffyChat repository yourself and update your fork in time.

### 4. Official Support

If you need help from us with using E2EE in your fork, please reach out via the public Matrix room [#fluffy-space:matrix.org](https://matrix.to/#/#fluffy-space:matrix.org).

## How do I find other users?

There are several ways to find other users in FluffyChat.

1. **Search by display name:** You can enter a person's display name in the search. This only works if:
   - You've already shared a chat with the person,
   - They're in a public room known to your server, or
   - Your server allows searching for other users.

2. **Enter Matrix ID directly:** If you know the Matrix ID (e.g., `@krille:janian.de`), you can enter it directly in the search. It works similarly to an email address: `@username:servername`.

3. **Scan QR code:** You can scan the other person's QR code or display your own for scanning.

4. **Share invitation link:** Anyone can share an invitation link to a room or chat. Clicking the link will connect you directly.

## How do I get stickers?

You can add a sticker pack from the internet. For example [volpeon.ink](https://volpeon.ink/emojis/) does an incredible job.

Just follow these steps:

1. Download one of the packs as a zip file
2. Open FluffyChat
3. Go to "Settings" > "Chat" > "Custom emotes and stickers"
4. Tap on the three dot menu top right and tap on "Import from zip file"
5. Select the zip file and if you like edit the sticker names

You can also find preconfigured sticker packs in Matrix. I recommend Nico's Sticker Collection:
<https://matrix.to/#/#nico's-stickers:neko.dev>

The sticker collection for FluffyChat unfortunately does not have yet a large selection:
<https://matrix.to/#/#fluffychat-stickers:janian.de>

1. Join the public room
2. Open the three dot menu top right and tap on "Emote Settings"
3. Select the sticker pack in the room you like
4. Toggle "Enable emote pack globally"

Have fun with your stickers! :-)

</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById("searchField");
    inputField.oninput = (_) => {
      const query = inputField.value.toLowerCase();
      const headings = document.querySelectorAll("#faqEntries h2");
      for (var i = 0; i < headings.length; i++) {
        const heading = headings[i];
        // Collect all sibling nodes until the next h2
        let sibling = heading.nextElementSibling;
        const answerNodes = [];
        while (sibling && sibling.tagName !== "H2") {
          answerNodes.push(sibling);
          sibling = sibling.nextElementSibling;
        }
        const answerText = answerNodes.map(n => n.innerText).join(" ").toLowerCase();
      const headingText = heading.innerText.replace("🔗", "").trim().toLowerCase();
        const match = headingText.includes(query) || answerText.includes(query);
        heading.hidden = !match;
        answerNodes.forEach(n => n.hidden = !match);
      }
    };
  });
</script>
