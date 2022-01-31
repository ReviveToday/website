---
title: Raspberry Pi Retro Console
layout: page
permalink: /diy/raspberry-pi/
---

Since playing a game on the Atari 2600, we have put a man on the moon, turned the humble cell phone into a device more powerful than most computers, and spend nearly every waking moment communcating around the globe on a super fast internet. You would think in this time you could construct something powerful enough to play these games for a low price, wouldn’t you? In comes the Raspberry Pi.

With the rise of the Raspberry Pi, we have seen a rise in all sorts of hobbyist inventions. You can construct your own drone, home automation kit, and hell even build a small server farm on the cheap! One of those fantastic geniuses has also collected all the various emulators for old games and stuffed them all on the Raspberry Pi. So not only can you have a bit of A’26 frogger, you could even play a bit of _Crash Bandicoot!_

You can keep your degree of Engineering in the cupboard, because realistically this does not need any technical know-how. Setup is so straightforward that you will be showing off your DIY console in a mere couple of hours.

Interested in how something like this can be created? Read on!

## DIY Raspberry Pi Console

Tools you will need:

* Philips Screwdriver (standard screws, size 0-2 will do).

What you will and may need to buy:

* Raspberry Pi 3 (£30 from [Pi Hut](https://thepihut.com/collections/raspberry-pi/products/raspberry-pi-3-model-b)).
* MicroSD Class 10 card (£9 from [Pi Hut](https://thepihut.com/products/noobs-preinstalled-sd-card)).
* USB MicroSD reader (£2 from [Pi Hut](https://thepihut.com/collections/raspberry-pi-store/products/usb-2-0-microsd-card-reader-microsd-to-usb)).
* Power Adapter (£5 from [Pi Hut](https://thepihut.com/products/micro-usb-power-supply-for-the-raspberry-pi)).
* Case (£6 from [Pi Hut](https://thepihut.com/products/official-raspberry-pi-3-case-black-grey)).
* Controller (£6 from [Pi Hut](https://thepihut.com/products/raspberry-pi-compatible-usb-gamepad-controller-snes-style)).
* HDMI cable (£2 from [Pi Hut](https://thepihut.com/products/1-8m-hdmi-cable)).
* **Total Estimate ~ £60!**

Software Needed:

* Disk Imager (Windows, Mac).
* RetroPie Operating System.
* ‘ROMS’ of your desired games (see warning).

<div class="text-center">
	<p class="rt-button"><a href="https://sourceforge.net/projects/win32diskimager/files/latest/download">Disk Imager (Windows)</a></p>
	<p class="rt-button"><a href="http://www.tweaking4all.com/hardware/raspberry-pi/macosx-apple-pi-baker/">Disk Imager (Mac)</a></p>
	<p class="rt-button"><a href="https://retropie.org.uk/download/#Pre-made_images_for_the_Raspberry_Pi">RetroPie</a></p>
	<p class="rt-button"><a href="https://www.sdcard.org/downloads/formatter_4/">SDFormatter</a></p>
</div>

And your console will be able to efficiently emulate:

* Various Arcade systems.
* ZX Spectrum.
* Atari 2600, 5200, and 7800.
* SEGA Genesis / Mega Drive.
* Master System.
* (S)NES.
* Nintendo 64.
* Game Gear.
* Game Boy, Game Boy Color and Game Boy Advance.
* PlayStation 1.
* DOS and Macintosh.

Be warned that DIY consoles are currently a gray area of the law. Please look up the legality in your country. Revive Today takes no responsibility for any legal trouble you encounter following this guide.
{: .rt-alert .error}

## Set up the MicroSD Card

Like your computer has Windows / macOS installed on it, we need to install an operating system onto the MicroSD card. Once set up, the Raspberry Pi console will be able to start up and show us the games menu on our TV. Set up process is easy, needing the MicroSD reader, the MicroSD card and the software downloads mentioned above.

### Set up MicroSD Card

Install SD Formatter from the SD Association mentioned above. Once installed this tool will be effective in setting up the MicroSD card for initial use.

![SD Formatter window](https://revive.today/wp-content/uploads/2016/12/Capture.webp)
{: .article-image }

Select the Drive of the one you plugged in (unless you have other SD adapters and USB sticks plugged in, there should only be one listed) and click Format. Accept the warning and your SD card will be primed for the operating system.

Next, open Win32DiskImager (different tool needed for Macs).

![Disk Imager set to write RetroPie](https://revive.today/wp-content/uploads/2016/12/Capture-1.webp)
{: .article-image }

Select your extracted image file (ends with .img), and change the device to your MicroSD card (should match the same drive letter as SD Formatter used), then click Write. This will write the RetroPie operating system to the MicroSD card, and once finished it can be put in to the Raspberry Pi and executed.

Once write is finished, safely eject your MicroSD card and put it inside the Raspberry Pi. It is _genuinely_ important to safely eject the adapter in this instance, as it uses an older ‘filesystem’ which can experience issues if it is ‘hotplugged’ without warning.

### Setting up the Console

Now that the operating system is set, it’s time to construct the console physically.

Raspberry Pi is a circuit board, and does not like any unexpected sources of power. Before touching any metal component on the board, make sure you ground yourself first. Tapping a mental conductive object will suffice.
{: .rt-alert .warning}

f you purchased a case for your console, then the first thing you should do is get the Raspberry Pi board inside the case, which will safely protect the console from any possible minor damage.

Connect your console up to your TV via the HDMI cable, plug in your controller and finally plug in the Micro USB power block. If all is done correctly, you should see a rainbow square on your TV screen, and then the Retropie start-up screen.

Once the system starts, you will need to configure your controller. This will be a simple run through of pressing buttons in co-ordination with the on-screen prompts, and once this process is finished you will have full interaction with the system.

### Copying Games to the Console

Now you have your basic setup, the next step is to pass over the games for the system to play. There are a couple of good ways to do this.

#### USB Stick

RetroPie lets you synchronise your game library over a USB stick, which is especially useful when your system is offline. Format your memory stick to FAT32 or ExFAT and create a folder in the root called ‘retropie’. When you plug this into the console system, it will populate this folder with your Raspberry Pi console’s emulation BIOS files, configs and any current ROMs on the system.

When you place ROMs or BIOS files into the structure on the memory stick, it will synchronise with your Raspberry Pi. If you wish to unsync the memory stick, simply delete the entire ‘retropie’ folder.

#### Network Share

If you configure your system to use the on-board WiFi, then it will broadcast a network share to the connected network. This will allow you to use your computer’s file browser to connect to the console, revealing the same folder structure as mentioned above. This will let you add and remove files to your system via the network rather than via USB.

### Obtaining Games

Here comes the hard part (depending on the route); obtaining games. In the modern world it is super easy to grab the game files you need, but there are some hefty legal implications on doing so. So you have two methods: Painstakingly obtain them manually, or plunder the pirate ship.

#### Play Flash Carts

[Retrode](http://www.retrode.org/) is a small USB device that allows you to connect up your flash carts to your system. This allows you to legally play your own copies of retro games, and is able to support the majority of retro cartridge-based systems out there – either natively or with an adapter.

Playing the games is completely simple, and works on a plug-and-play basis. If you wish to use the in-built controller adapter, there are some extra steps involved to get them work properly which is [documented on their website](http://www.retrode.org/2013/04/worlds-smallest-multi-cartridge-console/). Following this allows you to construct a completely hot-pluggable interface and turn your retro console into a truely retro experience! Then it becomes a case of eBay hunting to grab all your retro games again.

<div class="text-center">
	<p class="rt-button"><a href="https://www.dragonbox.de/en/search?controller=search&orderby=position&orderway=desc&search_query=retrode&submit_search=">Retrode on Dragonbox (EU)</a></p>
</div>

#### Play Disc-based Games

Unfortunately, the software RetroPie uses to run emulators does not currently support CD drives. If you hook up an external CD/DVD drive to your Pi, it will simply not recognise the game.

All is not lost, as you can rip the content off the disc and store them on the Pi using a similar method below. Most retro games included on the supported list were around before DRM came to exist, so you can easily rip the content off your disc and put it on the Raspberry Pi. Bear in mind that while this a grey area legal-wise, sharing the files with other people is illegal.

#### Downloading ROMs

Revive Today does not condone Copyright violation. Wise up to your country’s Copyright laws, and do so at your own risk.
{: .rt-alert .warning}

![Screenshot of Firefox browsing emuparadise](https://revive.today/wp-content/uploads/2016/12/Screen-Shot-2017-07-19-at-19.35.27.webp)
{: .article-image }

Not often will you pop into your local game store and see a fresh copy of Mario Kart for the N64 being sold. Nor can you go ahead and shove your game cartridge onto Raspberry Pi. So what can you do?

[Emuparadise](https://emuparadise.me) has one of the largest archived games collection available on the internet. If you’re looking for your childhood game, it’s likely to be on here. Emuparadise is a community-run site designed to preserve these ROM files so these games are not lost in the passage of time.

Emuparadise has since stopped providing ROM downloads for all consoles, on legal grounds. Read more about it here. A safe alternative will be provided once one has been discovered, but be cautious with sites listed on search engines.
{: .rt-alert .error}

On their site, you can either search for the game you desire or follow their menus specifying the origin console and game name, and they will provide you a download link (if available). The unarchived format can then be used on your home-made games console.

While these games are not sold from the manufacturer, they **remain the property of the manufacturer and are subject to Copyright laws**. As manufacturers are slowly adopting our love for the games of old, many are disappearing from these sites as they return to production. So while this remains a grey area of the law, please be aware that this can legally constitute as a Copyright violation. While the FBI aren’t going to appear outside your door for downloading a 30 year old game, it remains a good idea to purchase your favourite game should it become marketed on a platform you enjoy, to encourage more firms to start bringing back their ageing franchises.
