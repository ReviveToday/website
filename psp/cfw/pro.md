---
title: Custom Firmware with PRO
layout: page
---

The following article details the process of setting up your PSP with the PRO custom firmware. PRO firmware enables your vendor-locked device to do many more functions, including but not limited to:

* Play downloaded and/or backed-up ISO and CSO games.
* Play homebrew games and applications.
* Customise advanced settings, overclock your processor and change to custom themes.

For more details and benefits of cfw, [check out the main article]({% link psp/cfw/index.md %}).

## Prerequisites

To proceed with the custom firmware process, all you need is:

* A working PSP console, any version.
* PSP data transfer cable, or a way to connect the memory stick to your PC.
* Additional file(s) needed for Go! variants, will be mentioned in the article.
* An up-to-date firmware version.

PRO supports the latest firmware (version 6.61) released by Sony, and it is recommended that you upgrade to receive the latest fixes and improvements before proceeding. However, if you do wish to remain with an older firmware, the latest custom firmware version supports back to 6.20. **Ensure you download the version that matches your current firmware version!**

To determine your PSP firmware version, open System Settings on the XMB, then select System Information. The System Software will let you know which version you have.

## Downloads

Ensure you download the version that matches your PSP firmware. If your firmware does not match any of the listed, then consider updating your firmware. Installing a mismatched version may brick your PSP.
{: .rt-alert .warning}

<div class="text-center">
	<p class="rt-button"><a href="https://drive.google.com/file/d/191DSI6qGyoTIbz4RtJUyGZp1diusFI02/view?usp=sharing">PRO-C2 6.61</a></p>
	<p class="rt-button"><a href="https://drive.google.com/file/d/1eGtXQe0xFvPfBSrsxg1nDbRVR54T9db4/view?usp=sharing">PRO-C2 6.60</a></p>
	<p class="rt-button"><a href="https://drive.google.com/drive/folders/147ij0-ztudO9xbyU7KGgB2-8YDJfcd04?usp=sharing">Others</a></p>
</div>

## Setup

Once you’ve downloaded the corresponding custom firmware package for your console, then we’re ready to begin!

Extract your downloaded archive to a place on your computer. The folder is created should look like this inside.

![Window showing the custom firmware filesystem.](/assets/img/Screen-Shot-2017-05-25-at-22.50.33.webp)
{: .article-image }

The developers structure the layout so that it can simply be dropped into the root of your PSP, and the files will be placed where they need to be.

Connect your PSP to your computer with your data cable, or if you have the means to do so connect your Memory Stick Duo (or MicroSD) to your computer. Copy the PSP and seplugin folders from your extracted archive, and paste them into the root of your PSP. The PSP folder is _supposed_ to already be there, so when it asks if you wish to merge folders, say yes.

Now the files are on your PSP, we can now disconnect it from your computer.

## Installing

![](/assets/img/Screen-Shot-2017-02-18-at-20.27.29.webp)
{: .article-image }

Returning to the PSP, you should now have some new entries under Memory Stick menu item in Game. You should have entries for **Pro Update**, **Pro Fast Recovery** and **Pro CIPL Flasher**. If any or all of these come up as corrupted media, then double check your firmware versions and try again.

To install the custom firmware, run the **Pro Update** application. The console will act like it’s running a game. If successful, you should be greeted with a black screen with tiny white text on it. Press X and your PSP will reboot itself into custom firmware mode.

Check your PSP firmware like you did earlier on, and if all was successful your system software will show the custom firmware you installed after it.

![](/assets/img/Screen-Shot-2017-02-18-at-20.02.19.webp)
{: .article-image }
  
That’s it, you’re now running custom firmware! However, this is **not permanent**. Every time you start up your PSP, you will need to run _Pro Fast Recovery_ to return to the custom firmware state. It’s not exactly a difficult process, but in a few cases you do have the option to make this permanent.

If you’re happy to re-run the software on reboot, then feel free to delete **CIPL Flasher** and **Pro Update** from your console.

## (Optional) Making it Permanent

If you have a an older PSP, such as a PSP 100X or early PSP 200X then you are in luck and this process is super quick. Simply after the reboot occurs and you are in the custom firmware state, run the last of the PRO package, **CIPL Flasher**.

Now this tool will write your custom firmware to the tiny, tiny onboard storage the PSP has for operation. This process is tried and tested, but ensure you follow the on-screen prompts when running it. After installing it, there should be a brief pause and your PSP will reboot into custom firmware mode again.

Check to see if it worked by rebooting your PSP, and without running PRO Update check your Firmware version and see if you have PRO mentioned in it. If so, your custom firmware is permanent! You can now delete all the entries for PRO in the Games menu.

If later on you decide to _remove_ your permanent custom firmware, simply download the package again and re-run CIPL Flasher. There will be an option to remove it and return to the original firmware state.

This article is still in progress, but please let us know what details you would like to be seen!
{: .rt-alert .info}
