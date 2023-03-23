---
title: PSP Infinity
layout: page
---

![](/assets/img/rocket-psp.webp)
{: .article-image }

There are quality issues with this article, and is [pending review](https://github.com/ReviveToday/website/issues/4). For now, it is recommended to follow the [PSP cult guide](https://sites.google.com/view/psp-cult/cfw-hacking-guide) or the [Mr Mario video on the subject](https://youtu.be/h-pZeWV5Q8E).
{: .rt-alert .warning}

Infinity has roots in custom firmware, but is not – in itself – a custom firmware. Instead, it grants your PSP the ability to turn into Buzz Lightyear install ‘hybrid’ custom firmwares instead of just one. And due to the special nature of operations, it can **make CFW for all PSP’s permanent!**

Unless you’re interested by such concept, you’ve likely come here because you have a restricted PSP 200X, 300X or Go, as they can’t simply install a standard custom firmware by themselves.

If you own a PSP Street, unfortunately you are out of luck with installing Infinity or a permanent cfw. Doesn’t stop you from [_running_ one though]({% link psp/cfw/index.md %}).

A great big **thank you** to [Davee](https://lolhax.org/), the developer behind this amazing tool. If not for his work, the only solution for newer PSPs would be to run the exploit on each boot. Thank you!

## Is it risky to install?

If you follow instructions to the letter, no. However you will be modifying essential PSP files so there is a slight chance of turning your PSP into a paperweight.

Precautions to take are to make sure you **fully understand** the guide. Feel free to message me if something isn’t clear, or have a look at the many other guides out there on the internet.

**AC Power**, big ol’ battery pack, whatever – do not rely on the PSP battery for this! In the current years PSP batteries are often as reliable as a car with no fuel, so don’t take any chances. As Windows always says – Do not turn off your device!

## I already have _permanent_ CFW, can I install this?

Yes, but you _must_ uninstall the permanent state of your CFW first. Head on over to the ME or [PRO]({% link psp/cfw/pro.md %}) pages to check out how, but keep the package you download to uninstall the permanent CFW, as you can use these with Infinity instead.

## Do I _Need_ it?

If you are one of the unfortunate people to have a PSP with restrictive hardware, then yes – **unless** you don’t mind running the cfw exploit **on every reboot**. If you already have permanent CFW, then strictly speaking you do not need this. The differences between LME and PRO cfw is relatively insignificant, so unless you want to try out both CFWs then you don’t need it.

## How do I install it?

There is a chance of bricking your PSP. Please back up before proceeding, and only attempt this if you are certain. Give a shout in the comment box below if you need help!
{: .rt-alert .warning}

You will be needing:

*   [PSP]({% link psp/index.md %}) (any version, **excluding** Street).
*   Latest [Sony Official firmware]({% link psp/firmware.md %}) (6.61, or 6.60).
*   USB Data Transfer cable, or a card reader.
*   Latest Infinity version (link below).
*   Latest custom firmware release (covered the in article).
*   Latest Chronoswitch (optional, for removing existing CFW/mods).
*   Form of external power (optional, but recommended).

Here you can download Infinity. Please choose the right version for your PSP.

<div class="text-center">
	<p class="rt-button"><a href="https://infinity.lolhax.org/">Infinity</a></p>
	<p class="rt-button"><a href="https://github.com/DaveeFTW/Chronoswitch/releases">Chronoswitch</a></p>
</div>

_Chronoswitch is optional. OFW also needed (covered below)_

If you prefer a video installation, there’s a fantastic [step-by-step video on YouTube here](https://youtu.be/HsfSaDsswUo).

## Replace official firmware (optional)

This step is optional for those with an already modded/infinity PSP. What this will do is restore your PSP to a vanilla state by **forcing** the PSP installer to run. If you are running 6.60, you could simply grab the 6.61 update file and install that for the same effect.

**We recommend installing 6.61**, the latest firmware. There’s absolutely no reason to keep 6.60, but the guide will still work if you substitute 6.60 in place of .61.

You will need to download a copy of the 6.61 updater. [Head over to our firmware downloads]({% link psp/firmware.md %}) page to grab the copy you need. **Download the firmware relevant to your PSP** otherwise you may cause damage to your device.

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
