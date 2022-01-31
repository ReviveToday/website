---
title:  Turn an old (or current) Android Phone into the Best Handheld with RetroArch!
image: /assets/img/IMG_20200727_204844.webp
layout: post
tags:   [Custom, Handheld]
---

**New article. Hell’s bells it must be Christmas. /s**

Yeah, we’ve been away for a bit. We’re sorry! But we’re here with a guide on making the best damn portable retro handheld device ever, and you might not even need to spend a penny – using **RetroArch!**

## Swiss Army Knife of Emulation

![Screenshot of RetroArch app on Android, showing Super Mario Bros., Super Mario Bros 2, and Zelda II Adventure of Link as options.](/assets/img/Screenshot_20200728-151223-1024x576.jpg)
{: .article-image }

If you don’t know what RetroArch is, you **need** to check it out. Rather than having a few different emulators to run your favourite games, RetroArch acts as one interface for all, and lets you load the emulators inside it. Essentially, you can stop playing a SNES game, and start up a PS1 classic without closing the application!

If you checked out our guide for [building a Retro Console with RetroPie]({% link raspberry-pi.md %}), then congratulations – you’ve already been using it!

RetroArch comes on [almost every platform known to mankind](https://www.retroarch.com/?page=platforms) (even runs on Windows 95!), but the one we obviously care about – It’s on the **[Play Store](https://play.google.com/store/apps/details?id=com.retroarch)**.

For our purposes, we re-purposed a **OnePlus 3T**. Your mileage may vary, but typically on game performance than anything else. The heaviest platform we could successfully run was the **PlayStation 1**.

### I have an iPhone 🙁

Don’t fret, it works on iOS too! However, it is not approved to be on the App Store. You can still grab it without needing a jailbreak, if you [follow their guide on using Cydia Impactor](https://docs.libretro.com/guides/install-ios/) (or XCode) to install it on your iPhone.

## Crafting the Perfect Handheld

### Physical Controls

![Vertical orientated phone with Tetris on the top of the screen. The phone is encased in A Nintendo Switch style controller.](/assets/img/IMG_20200728_200254-1-948x1024.jpg)
{: .article-image }

Tetris, anyone?

You could stop here, really. Upload your BIOS files, ROMs and away you go – you got a pretty sweet emulator. Job’s done. But do you really want to be playing on touchscreen controls?

Bluetooth controllers can connect to your phone, and will be picked-up by RetroArch. In fact, you can connect multiple controllers to your device and play two/multiplayer games. Bizarrely, we’ve experienced better performance from generic controllers and keyboards than main brand, but performance may vary based on how complex the controller used is.

We have experienced (and seen reports of) input lag on **PlayStation 4** and **Xbox One** controllers, so be advised your mileage may vary on these common controllers.
{: .rt-alert .warning}

[AliExpress have a bluetooth controller available](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200728104007&origin=y&SearchText=x6+telescopic) called ‘X6 Telescopic’. This is a simple Bluetooth controller that wraps around a phone, and works perfectly for this project. This allows for landscape and portrait orientation, and works without the phone for big-screen gaming.

### Dock Gameplay

This feature will only work with phones that support **MHL** (Mobile High-Definition Link). Check if your phone supports this before trying. Our **OnePlus 3T** unfortunately could not do this.
{: .rt-alert .warning}

Nintendo Switch (and of course, PSP Go owners) will have got used to the glorious modern handheld experience that can turn into a TV console once hooked up to a screen. Neat, right? Well this isn’t a Switch exclusive ability. In fact, your phone might already be able to do this.

If you have a phone that supports **MHL** (Mobile High-Definition Link), you can benefit from USB to HDMI converters to show your gaming experience on the big screen. Combine this with a USB hub with HDMI to have a true dockable experience with wired USB controllers, for the true Switch-esque experience!

If you don’t have MHL, you can use a **Chromecast**. Be aware that since Chromecast operates over WiFi, the performance might be choppy. This can be pretty devistating during gameplay, so this will be need to tested in your own environment.

### Steam Link

Of course RetroArch will be on your retro handheld, but if you’re also a PC gamer you can grab **Steam Link** for your phone for couch PC gaming. This will stream your PC Steam game to your phone, and your button inputs returned, to create a simulated experience on your phone.

Despite this working over WiFi, I’ve generally had positive experiences using this platform. I recommend sitting as **close as you can** to your router to keep the stream consistent, and dropping the quality to get a more constant FPS. Oh, and don’t let anyone turn on the microwave!

If you use an Nvidia graphics card, an alternative to Steam is **[Moonlight Game Streaming](https://play.google.com/store/apps/details?id=com.limelight)**. This uses Nvidia’s GameStream functionality of their graphics cards to stream content instead of via a streamlined VNC-like connection. If you have one of these cards, try both and see which one works for you.

## Show us yours!

Fancy giving this a pop? If you do, post your results in the comments below. Android phones power vary, and in turn the results can be spectacular. If you’re lucky enough to have a MHL phone (Samsung), you could get the best retro switch handheld setup!
