---
title: FreeMCBoot Tutorial
layout: page
---

FreeMCBoot is one of the most tried and tested [softmod]({% link ps2/softmodding.md %}) methods you can find. Once you have a memory card that is _FMCB_‘ed, the PS2 will detect it on the Memory Card and boot it up. This guide will show you how to create a Memory Card capable with FMCB capabilities, as well as explaining how it will work. An exploited memory card will work on _all_ versions of the PS2.

This softmod requires access to a console has already been modded, which will be used to transfer the mod data to the Memory Card.
{: .rt-alert .error}

Back up the Memory Card you wish to install FreeMCBoot on. If something goes wrong during install, you could potentially lose your game saves.
{: .rt-alert .error}

You must have **either** of these:

* A hardmodded PS2 console (had a chip installed to give it modded abilities).
* An original (Fat) PS2 with [FreeHDBoot softmod]({% link ps2/freehdboot-tutorial.md %}) installed on it.
* An already existing, working FreeMCBoot Memory Card.

You also need:

* A computer (operating system does not matter).
* A USB removable storage drive (512MB or more).
* An 8mb Memory Card (official 8mb is preferable, third party is a risk).

You also need the following software (all free):

* FreeMCBoot ([original](http://ichiba.geocities.jp/ysai187/PS2/FMCB/index.htm)).
* uLaunchELF or other ELF launcher (supplied by existing mod).

<div class="text-center">
	<p class="rt-button"><a href="https://revive.today/wp-content/uploads/2016/09/FMCBInstaller-1.952.zip">Download FreeMCBoot</a></p>
</div>

The FreeMCBot package comes with a file that ends with .ELF. ELF file are executable by a modified PlayStation system, and in the package provided comes with a FreeMCBoot installer. Unfortunately, that’s why you need a pre-modded console.

## FreeMCBoot Installer

Firstly, download the files above and place them on a FAT/FAT32 formatted memory stick. Extract the entire zip archive onto the memory stick, as all the files in the zip archive are required for the console to be able to open it. Safely eject the memory stick from your machine to ensure the files are correctly written to the memory stick, and then transfer it to the PS2.

![ULaunchELF displaying the contents of a memory stick](/assets/img/DSC_0011_O.webp)
{: .article-image }

Boot up the PS2 and open up uLaunchELF. Navigate to MASS:/ to access the memory stick we have plugged in. The memory stick should show up similar to above (files beginning with a dot is junk from my mac, which may not be there for you – which is fine). If so, launch up FMCBInstaller.elf.

![FMCB Installer main menu](/assets/img/DSC_0012_O.webp)
{: .article-image }

The launcher will display the FreeMCBoot Installer, a multi-purpose tool which will allow you to prep a memory card for FreeMCBoot, as well as install FreeHDBoot to a hard drive and various other memory card related functions. For the purposes of preparing FreeMCBoot for another console, we will need Multi-install.

![FMCB Installer displaying a multi-install warning](/assets/img/DSC_0013_O.webp)
{: .article-image }

The FMCB installer will warn you about the multi-installation process. So long as you backed up your Memory Card, this should be okay. The warning is that the filesystem needs to be modified to allow all systems to be able to read the FreeMCBoot exploit, which is obviously not a designed function for the Memory Card. If something goes wrong during install, your Memory Card could become corrupted. FMCB Installer can revive the Memory Card, but your save data will be lost. If you back up your saves, you will be fine. If you do not back up, beware.

![FMCB installer installing on a memory card](/assets/img/DSC_0014_O.webp)
{: .article-image }

The system will then ask you what memory card you will like exploited. If only one is present in the Memory Card slots, it will automatically detect it. Select OK and the FMCB Installer will proceed to exploiting your Memory Card with FreeMCBoot.

Once the installation is complete, you can safely exit out of the installer. Once the console drops back to the browse menu, turn it off and plug your newly exploited memory card into your non-exploited console.

## FreeMCBoot

![The FreeMCBoot PS2 Menu](/assets/img/DSC_0001_O.webp)
{: .article-image }

When you boot your PS2 up with the FreeMCBoot memory card inserted, you will find the boot sequence will not execute. Also, instead of just ‘Browser’ and ‘System Configuration’, you should now have a lot more options available. If so, congratulations you have successfully softmodded your console!

If you have opted for a multi-install as instructed in this guide, then the memory card can be used to execute the FreeMCBoot on any console that is **not** the latest release of the slimline console (SCPH-9000x). This means that combined with the memory stick (unless you copy your FMCB Installer files to your memory card via uLaunchELF), you can potentially install this on your friends’ consoles, and then everyone can benefit from the world of [softmodding]({% link ps2/softmodding.md %}).

## FreeMCBoot without Pre-modded Console

For those new to the scene, it’s a pretty tall ask to _already_ have a modded console. If you are unable to go through the [FreeHDBoot method]({% link ps2/freehdboot-tutorial.md %}) which can be done without one, then your next course of action is to purchase a FreeMCBoot memory card.

Unfortunately we do not provide such service (yet), however the PS2 Reddit community has a contact that will do this for you with no labour charge. Simply pay the fee for the memory card unit, and they will send you one with multi FreeMCBoot pre-installed. Like mentioned in this guide, this will work for all PS2 consoles excluding the last production range (SCPH-9 range). Details can be found in the sidebar on Reddit (mobile users, click community information).

<div class="text-center">
	<p class="rt-button"><a href="https://www.reddit.com/r/ps2/">FreeMCBoot Card</a></p>
</div>

* * *

If you have any questions about FreeMCBoot, FMCB Installer or this guide, please let me know in the comments below.
