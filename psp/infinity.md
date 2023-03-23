---
title: PSP Infinity
layout: page
---

![](/assets/img/rocket-psp.webp)
{: .article-image }

The age old process for making custom firmware permanent in older models was to use **IPL Patching**. Unfortunately, Sony patched this process on certain **PSP 2000** models and beyond, and made it an unavailable route. In comes the [PSP homebrew famed developer **Davee**](https://lolhax.org/), who created **Infinity** - a tool to enable permanent custom firmware on **all models** of PSP!

A great big **thank you** to [Davee](https://lolhax.org/), the developer behind this amazing tool.

## Is it risky to install?

If you follow instructions to the letter, no. However you will be modifying essential PSP files so there is always a slight chance of turning your PSP into a paperweight.

Precautions to take are to make sure you **fully understand** the guide. If you don't feel fully comfortable to proceed, then there are many other guides available to follow along with - at the same time or instead of. Check out the **Other Guides** segment below.

Following any guide, make sure you have a **sustainable source of power**. Ideally this should be a **PSP Power Supply**, or a USB charger that provides a strong enough power output. This doesn't take a long time to do, but power outages during certain steps could brick your device.

## I already have _permanent_ CFW, can I install this?

Yes, but you _must_ uninstall the permanent state of your CFW first. Head on over to the [PRO]({% link psp/cfw/pro.md %}) pages to check out how, but keep the package you download to uninstall the permanent CFW, as you can use these with Infinity instead.

## Do I _Need_ it?

If you are one of the unfortunate people to have a PSP with restrictive hardware, then yes – **unless** you don’t mind running the cfw exploit **on every reboot**. If you already have permanent CFW, then strictly speaking you do not need this. The differences between LME and PRO cfw is relatively insignificant, so unless you want to try out both CFWs then you don’t need it.

If you need help deciding, then check out the [PSP Custom Firmware wizard]({% link psp/wizard.html %}) page for guidance.

## How do I install it?

You will be needing:

*   [PSP]({% link psp/index.md %}) (any version, **excluding** Street).
*   [Sony Official firmware]({% link psp/firmware.md %}) (6.61 or 6.60).
*   USB Data Transfer cable, or a card reader.
*   Latest Infinity version (link below).
*   Latest custom firmware release (covered the in article).
*   Latest Chronoswitch (optional, for removing existing CFW/mods).
*   Form of external power (optional, but recommended).

Here you can download Infinity. Make sure to choose the right version for your PSP.

<div class="text-center">
	<p class="rt-button"><a href="https://infinity.lolhax.org/">Infinity</a></p>
	<p class="rt-button"><a href="https://github.com/DaveeFTW/Chronoswitch/releases">Chronoswitch</a></p>
</div>

_Chronoswitch is optional. OFW also needed (covered below)_

### Other Guides

In the interest of making sure everyone can get Infinity setup, these are some community recommended alternative guides you can use to help install Infinity. If you find this guide hard to follow, or you wish to verify steps before proceeding, then check out these guides.

* Infinity installation is covered in Discord Member [**PSP-Cult's** guide on all-things PSP](https://sites.google.com/view/psp-cult/cfw-hacking-guide).
* If you prefer a video installation, there’s a fantastic [step-by-step video on YouTube by **MrMario2011**](https://youtu.be/h-pZeWV5Q8E).

Know of other good guides to list? Let us know in the Discord server.

## Replace official firmware (optional)

This step is optional for those with an already modded/infinity PSP. What this will do is restore your PSP to a vanilla state by **forcing** the PSP installer to run.

Whether you install firmware 6.60 or 6.61 is your choice. **The recommended version is 6.60**, but generally speaking there's a wider range of community support for models running on PSP 6.60, but if you have to install 6.61 then you should be fine to proceed.

You will need to download a copy of the 6.60 or 6.61 updater. [Head over to our firmware downloads]({% link psp/firmware.md %}) page to grab the copy you need. **Download the firmware relevant to your PSP** otherwise you may cause damage to your device.

You should now have a copy of **Chronoswitch v7** and your **PSP update zip**. If so, plug in your PSP and switch it into USB transfer mode.

When you download the file, you should recieve an **EBOOT.PBP** file (if you download from us, it’ll be within the zip). Copy this to **/PSP/GAME/UPDATE**. Inside the archive downloaded from Chronoswitch will also be an **EBOOT.PBP**. Create a folder in **/PSP/GAME** and drop it within that folder.

Eject from your PC, and you should have these two new apps to launch.

![](/assets/img/ICON0.webp)

PSP 6.61 Update

![](/assets/img/ICON1.webp)

Chronoswitch

Run **Chronoswitch Downgrader**. This will state _‘Downgrading from x.xx to 6.61. Continue?_‘. Hit the OK button (prompted on screen), and the regular PSP updater will appear. Treat it like a normal update, and you should end on a clean 6.61 installation. You can now install Infinity!

## Installing custom firmware

**PRO-C** is the example firmware used, but **LME** installation is the same.

Before you would benefit from running Infinity, you need to be running a custom firmware that **isn’t permanent**. This means you run the CFW but you **don’t** run the permanent installation patch they come with. Infinity steps in with the permanent aspect.

Follow our guide for installing PRO-C firmware, without following the optional permanent step. If your system information reports you are running **6.61 PRO-C**, you can stop with that guide!

[PRO-C Installation Guide]({% link psp/cfw/pro.md %})

## Installing Infinity

Before continuing – Ensure your **System Information** screen says either **6.61 PRO-C** or **6.61-LME2.3** and your system is **not** already running Infinity.

Open up the Infinity ZIP, and you should find two folders – **standard** and **pspgo**. Use the relevant folder based on your device.

Plug your PSP into your PC and enable USB transfer mode, or plug your memory stick into a card reader. When the PSP is mounted as a USB drive, you should see **PSP/GAME/UPDATE** folder (if update doesn’t exist, create it).

Copy the **EBOOT.PSP** from the folder of your device, and paste it into **PSP/GAME/UPDATE**. Once done, it should appear within the Games > Memory Stick folder on your PSP.

![](/assets/img/ICON0-1.webp)

Infinity

Open it, and wait at the black screen for a while. You should eventually be greeted with **Infinity Version 2.0.XX**. Press X for install, and then soon after press X again to reboot your PSP.

You should now reboot back into your PSP but with a difference. Head over to **System Information** and it should now say **PSP 6.61∞** which confirms you are now running infinity! Your custom firmware has been removed (since it was tethered), but we have one more step left!

Head back to the **Infinity** installer again, which should still be in your games list. You should now be at a completely different screen from when we last used Infinity. Hit the left button to see a list of firmwares.

**Select the firmware that you have installed**. If you followed the guide for PRO-C, select PRO. Otherwise if you went down the LME route select that one (ME). Now give your PSP a reboot.

On reboot, go back to **System Information** and you should now have **PSP 6.61 <hack>** and the infinity symbol. Congratulations!

## How do I remove it?

[Follow the replace routine!](#chronoswitch)

## Should I use Infinity instead of IPL patching?

It’s your choice, but if you have an original PSP you don’t lose any functionality by going through the traditional permanent method. Personally I would recommend using IPL flashing [if your device is supported]({% link psp/wizard.html %}).
