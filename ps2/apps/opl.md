---
title: Open PS2 Loader
layout: page
---

Ifcaro ps2homebrew’s Open PS2 Loader is one of the titans of the PS2 homebrew scene. By the time you finish reading (or ignored everything and scrolled down to Download) you will be installing OPL on your console, if you don’t already have it.

OPL is a game and application loader designed for the PS2 and PS3. OPL is the de facto way of playing your games and homebrew applications on your console, replacing the ageing HD Loader. with OPL you can play your games through numerous different methods, depending on your console and preferences.

OPL is versatile enough to support the following methods of loading your games:

* Hard drive (Early models of PS2).
* Network drive.
* USB drive (_not recommended_).

It doesn’t stop there! Depending on the version you obtain, it also comes with additional features such as memory card emulation, sophisticated cheat engine, enhanced display output settings, and child proofing capabilities.

The installation section is in progress.

## Open Source

A kicker of OPL is that it is completely open source. This means that not just the author of OPL is working on enhancing this tool, but a whole team of volunteers and coders ensuring this project lives on. If the author themself abandons the project, then the community can run with the project and keep it updated.

<div class="text-center">
	<p class="rt-button"><a href="https://github.com/ps2homebrew/Open-PS2-Loader">Open PS2 Loader GitHub</a></p>
</div>

## Downloads

Open PS2 Loader comes in many different varieties depending on what you need.

*   **Normal** – The standard release. Comes with the base package designed to help get you up and running with PS2 game & app loading.
*   **Childproof** – If you’re sharing your PS2 with someone who is prone to wander and tinker, this disables most operations that will cause damage to the OPL installation or your games.
*   **VMC** – Comes with the ability to emulate your memory cards, so you do not need to buy _actual_ memory cards for your games to save. Useful if you have a hard drive, or you’re sharing your game saves over the net.
*   **GSM** – An extremely powerful tool for your graphical outputs. We will cover GSM seperately at a later date, but this tool can help you squeeze the absolute most you can get out of your PS2.
*   **PS2RD** – Comes with the extremely powerful PS2RD Cheat Engine built right into the application, making cheating at and modding games a lot simpler.

All of these editions can be found in the downloadable ZIP file, including combinations and mixtures of the types above.

<div class="text-center">
	<p class="rt-button"><a href="https://github.com/ps2homebrew/Open-PS2-Loader/releases">Official Downloads</a></p>
	<p class="rt-button"><a href="https://files.soupbowl.io/rt/ps2/apps/OpenPS2Loader_0.9.3.zip">Download</a></p>
</div>

## Installation

To install this, you need the following at your disposal:

* A modified PS2 (soft or hard modded).
  *   Got a compatible, yet unmodded console? Check out our [FreeMCBoot]({% link ps2/freemcboot-tutorial.md %}) and [FreeHDBoot]({% link ps2/freehdboot-tutorial.md %}) guides.
* ULaunchELF.
* A USB storage device.
  * Needs to be formatted to FAT or FAT32, or ULELF might not recognise it.

Installation is incredibly simple with all the right tools. Simply download the archive and extract it to your FAT(32)-formatted memory stick. Once finished, eject it and whack it in your USB port of your PS2.

Boot up your PS2 and run ULaunchELF (for FMCB, this’ll be in the boot menu). From here, you should be able to browse to mass: and access your memory stick. Once you’ve decided which edition of OPL you wish to install, browse to that particular folder in the memory stick. You should find OPL.ELF file, or something alike. With OPL you can do the following:

* Leave it here and boot it off your Memory Stick.
* If you have **a lot** of Memory Card space, create a folder /APP on your memory card, and paste it in there.
  * If you have an in-built HDD (Original PS2 with Network Adapter and IDE Drive), you won’t need to worry about space so much, as the config and directories will be [stored on a properly-formatted HDD]({% link ps2/freehdboot-tutorial.md %}).
  * Also, if you plan to use network sharing, the brunt of the files will be off-loaded to the network drive.

With either choice, you’ll be able to boot OPL.ELF from ULaunchELF.

Depending on where you’ve installed it, OPL will create directories and configuration files for it to use upon starting. On OPL itself on your PS2, make sure you click ‘save configuration’ if you are happy, and from there you will be able to start configuring it.
