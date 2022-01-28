---
title: Complete Guide to PSP Custom Firmware
layout: page
---

## About Custom Firmware

![Screen cap of About PSP showing version 6.60 with custom firmware PRO-B10 installed.](https://revive.today/wp-content/uploads/2016/08/Screen-Shot-2017-02-18-at-20.02.19-300x169.png)
{: .article-image }

You can play games in the UMD drive, you can play games you bought from the store, but when it comes to trying to play games in an unconventional manner, you will hit a road block. If you try to play a backup copy of a game, activate a non-sony theme, or install an emulator you will find you can’t progress in some manner. That is where Custom Firmware steps in.

Custom Firmware (abbreviated CFW) relaxes restrictions put in place by Sony, and allows you to do much more than you could do before with your PSP. The common feature of all custom firmware available for the PSP is to relax the signing process for PSP applications, so that applications that developers that aren’t Sony approved can be installed.

### Permanent vs Non-Permanent

All forms of CFW will mention whether or not they are permanent. A permanent CFW is when you turn off your PSP by holding the power switch or running out of battery, and you see the ‘Sony Computer Entertainment’ boot logo, the CFW remains installed. If the CFW is not permanent, when you restart it returns back to the original state.

There is normally a wider choice if you are okay to go down the non-permanent route, but if you intend to use the features of CFW every time you use your PSP, you will need to reinstall the CFW every time you start your PSP, which will become quickly tedious.

Owners of the PSP 1000 and old 2000 versions will find that a majority of the CFW choices out there are permanent. Sony fixed up some of the exploits used to make the CFW permanent in the remainder editions, but for these devices Infinity can be used to simulate permanent CFW.

So far, the PSP Street (E) is the only device not capable of custom firmware. Correction: As the community have lovingly shared in the Disqus comments, this is **not true**. It’s not capable of **permanent** CFW, which in itself has also had varying successes with Infinity. You always have the option of just not making it permanent and running the package on startup.

## How to Install

### Deciding on your Custom Firmware

All devices (but Street) are capable of custom firmware, but not all of them are as straightforward as the PSP 1000. You can use our wizard or the Hackinformer site to specify your PSP and discover which process will work for yours.  

<div class="container text-center">
	<div class="row align-items-start">
		<div class="col">
            <div>
				<p class="rt-button"><a href="https://revive.today/psp/wizard/">Custom firmware wizard</a></p>
			</div>
            <p><a href="https://hackinformer.com/PlayStationGuide/PSP/DEVICE_PSP.html">Original Hackinformer version</a></p>
        </div>
    </div>
</div>


### Specific Guides

For more in depth step-by-step processes, we are writing up guides for each firmware with their pros and cons.

<div class="text-center">
	<p class="rt-button"><a href="{% link psp/cfw/pro.md %}">PRO Custom Firmware Guide</a></p>
</div>

### Copying to your PSP

From here on, this guide will focus on the editor choice **PRO** CFW. Your milage may vary, and the other recommendations are **ME** and **Infinity**

Ensure you downloaded the **correct version** for your PSP. If you installed a 6.60 CFW on 6.61 OFW you could potentially brick your device. If you are unsure, feel free to ask. Carelessness causes (metaphorical) fire.

So you’ve now obtained an archive of the custom firmware you need for your PSP version. Extract this folder and you should see a folder named either PSP or GAME. If so, you need to copy this folder to your PSP.

![Windows Explorer showing the contents of CFW 6.61 PRO-C.](https://revive.today/wp-content/uploads/2016/08/Screen-Shot-2017-02-18-at-20.22.17.png)
{: .article-image }

Connect your PSP to your computer via USB, and go to USB Connection mode. Once it appears in your File Explorer (It’ll appear like a memory stick), open it up. You should see a folder named PSP (If your archive contained a folder named GAME, then open up the PSP folder). Extract your folder here as if you’re overwriting the folder, as your computer should only add the new files. Once done, you can now disconnect your PSP from your computer.

Open up your memory stick under the Game section. You should now see some new exciting options (examples from PRO-C)!

![Screenshot of PSP showing the PRO-C Hack files](https://revive.today/wp-content/uploads/2016/08/Screen-Shot-2017-02-18-at-20.27.29.png)
{: .article-image }

Now here’s the really difficult part. Prepare a brew and dig out the biggest pack of biscuits you’ve got, this is going to take a while. Open 661 PRO-C Fast Recovery (PRO), and wait for your PSP to reboot.

That’s it, now you’re running tethered custom firmware.

### Is that _really_ it?

Depends on what you want. What you’ve _really_ done is rebooted your PSP into custom firmware mode. When you turn off or reboot your PSP it will go back to original firmware until you click fast recovery again. If you’re happy doing this (especially if you just keep your PSP in stand by), then you can stop here (PRO can delete all CFW files but Fast Recovery). However, in certain circumstances you can make this permanent. This varies between PSP models, chipsets and custom firmware support.

### Making custom firmware permanent

This isn’t as nefarious as it sounds. Some custom firmwares (PRO for one) will allow you to make the cfw _permanent_ if your PSP supports it. This doesn’t mean you’re stuck with it whether you like it or not. Instead of having to manually boot the PRO firmware, a utility will write it to a secret portion of the PSP that controls the start-up process. This means when your PSP boots up, it will run the cfw instantly instead of needing manual activation.

What are the benefits? If you use a large memory card that official firmware cannot detect, it will more likely be detected on boot by the custom firmware. You no longer need to open up fast recovery, or even keep any of the custom firmware utilities on your PSP. However, your PSP must be able to support this as certain models do not. The Hackinformer guide will inform you whether this process is compatible with your PSP.

If your device is capable as pointed out by the wizard, open up the CIPL Flasher utility that came with your custom firmware, and once a black screen with white text opens, press the button that corresponds with ‘install CIPL’. Once done, it will reboot your PSP. Now if you go to system > System Information on your PSP, it should now say you are running the custom firmware you desired. Even without opening the fast recovery utility!

If your device is not listed, you will need to install via Infinity. [Please check out our Infinity guide](https://revive.today/psp/infinity/) instead for installation on semi-permanent capable devices.

## FAQ

### How can I see whether my custom firmware is running?

![Screen cap of About PSP showing version 6.60 with custom firmware PRO-B10 installed.](https://revive.today/wp-content/uploads/2016/08/Screen-Shot-2017-02-18-at-20.02.19-300x169.png)
{: .article-image }

All cfws like to modify the system information screen to show what custom firmware you’re running. Open System Settings and then System Information. If ‘System Software’ shows just a number and your full mac address is shown, then you are running official firmware. Custom firmware will add their moniker to this segment (e.g. 6.61 PRO-C2).

### Should I hold back on updating my PSP?

No. Official firmware 6.61 has been cracked, and comes with internal system fixes. If you are running 6.60 then you can comfortably stay on that version, but other versions will benefit from a systems upgrade.

### How do I remove/uninstall custom firmware?

Either do not run, or even delete the ‘fast recovery’ option and reboot your PSP. You should find the system software will not mention custom firmware in it, indicating that it is not running.

### Is the process safe? Can I ‘brick’ my PSP?

While the procedure for most custom firmwares are tried and tested, yes it is possible to brick your PSP.

To avoid bricking your PSP, make sure you checked your console beforehand, as the following **may** cause a brick:

*   Installing the wrong CFW for your version and device.
*   Not uninstalling a permanent cfw prior to install (nowadays it should be fine, but still runs a risk with older firmware).
*   Running out of battery/power during the install process.
*   Shutting down the PSP during install or flashing (like Windows tells you not to shut down during an update).

Once bricked, unless you have a first generation PSP your best bet is to purchase another one. First gen owners can make or purchase a _Pandora battery_, which will force the PSP into recovery mode and can then restore the damaged firmware.
