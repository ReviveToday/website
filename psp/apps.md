---
title: Essential Applications
layout: page
permalink: /psp/apps/
---

Now you’ve got your freshly-hacked PSP, you need a suitable toolkit to get the best out of your handheld! We will keep you updated on the must-have homebrew apps and emulators to keep you entertained.

Keep in mind if you dont know already that for the following suggestions to work, you will need the ability to run unsigned PSP applications, which requires custom firmware.

Page is still undergoing improvements – please tread with caution.
{: .rt-alert .warning}

All applications have been **tested** on a **PSP 1000** running **6.61**. Your mileage may vary.
{: .rt-alert .info}

## Emulators

<div class="container text-center">
	<div class="row align-items-start">
		<div class="col" style="background-image:url('https://revive.today/wp-content/uploads/2021/06/PIC1.png')">
			<h3>RetroArch</h3>
			<p><strong>Multi-platform</strong></p>
			<img src="https://revive.today/wp-content/uploads/2021/06/ICON0-7.png">
			<div>
				<p class="rt-button"><a href="http://buildbot.libretro.com/stable/1.9.5/playstation/psp/RetroArch.7z">Download</a></p>
			</div>
			<p>(<a href="https://www.retroarch.com/?page=platforms">source</a>)</p>
		</div>
		<div class="col" style="background-image:url('https://revive.today/wp-content/uploads/2021/06/RINMENU.png')">
			<h3>RIN</h3>
			<p><strong>Gameboy (Color)</strong></p>
			<img src="https://revive.today/wp-content/uploads/2021/06/ICON0-2.png">
			<div>
				<p class="rt-button"><a href="https://github.com/mbarczak/psp_rin/releases/download/v2.0/RIN_1_32_RM_v2_0.zip">Download</a></p>
			</div>
			<p>(<a href="https://github.com/mbarczak/psp_rin">source</a>)</p>
		</div>
		<div class="col" style="background-image:url('https://revive.today/wp-content/uploads/2021/06/PIC1-1.png')">
			<h3>uo gpSP Kai</h3>
			<p><strong>Gameboy Advance</strong></p>
			<img src="https://revive.today/wp-content/uploads/2021/06/ICON0.png">
			<div>
				<p class="rt-button"><a href="https://revive.today/wp-content/uploads/2018/02/UO-gpSP-kai-v3.4-test-4-build-225.zip">Download</a></p>
			</div>
			<p>(<span class="text-muted">source</span>)</p>
		</div>
	</div>
	<div class="row align-items-start">
		<div class="col" style="background-image:url('https://revive.today/wp-content/uploads/2021/06/background.png')">
			<h3>SMS+ PSP</h3>
			<p><strong>SEGA Master System</strong></p>
			<img src="https://revive.today/wp-content/uploads/2021/06/ICON0-3.png">
			<div>
				<p class="rt-button"><a href="https://revive.today/wp-content/uploads/2021/06/smsplus-1.3.1-1.0.zip">Download</a></p>
			</div>
			<p>(<a href="http://psp.akop.org/smsplus.htm">source</a>)</p>
		</div>
		<div class="col" style="background-image:url('https://revive.today/wp-content/uploads/2021/06/ICON0-1.png')">
			<h3>DGEN</h3>
			<p><strong>SEGA Mega Drive/Genesis</strong></p>
			<img src="https://revive.today/wp-content/uploads/2021/06/ICON0-1.png">
			<div>
				<p class="rt-button"><a href="https://revive.today/wp-content/uploads/2018/02/DGEN_170_Lite.zip">Download</a></p>
			</div>
			<p>(<a href="http://dgen.sourceforge.net/">source</a>)</p>
		</div>
		<div class="col"></div>
	</div>
</div>

## Tools

<div class="container text-center">
	<div class="row align-items-start">
		<div class="col">
			<h3>Fusa Gamepad</h3>
			<p><strong>Physical Controller Emulator</strong></p>
			<img src="https://revive.today/wp-content/uploads/2021/06/ICON0-4.png">
			<div>
				<p class="rt-button"><a href="https://revive.today/wp-content/uploads/2021/06/FusaGamePad.zip">Download</a></p>
			</div>
			<p>(<span class="text-muted">source</span>)</p>
		</div>
		<div class="col">
			<h3>PSPDisp</h3>
			<p><strong>PSP as Monitor (ADVANCED)</strong></p>
			<img src="https://revive.today/wp-content/uploads/2021/06/ICON0-5.png">
			<div>
				<p class="rt-button"><a href="https://revive.today/wp-content/uploads/2021/06/PSPdisp.zip">Download</a></p>
			</div>
			<p>(<span class="text-muted">source</span>)</p>
		</div>
		<div class="col">
			<h3>PSPKVM</h3>
			<p><strong>Java Applet Support</strong></p>
			<img src="https://revive.today/wp-content/uploads/2021/06/ICON0-6.png">
			<div>
				<p class="rt-button"><a href="https://sourceforge.net/projects/pspkvm/files/pspkvm/v0.5.5/Release/pspkvm-bin-0.5.5-fr-cfw-allinone.zip/download">Download</a></p>
			</div>
			<p>(<a href="https://sourceforge.net/projects/pspkvm/files/pspkvm/v0.5.5/Release/">source</a>)</p>
		</div>
	</div>
</div>

Missing anything? [Let us know](https://revive.today/contact/) or [join the Discord](https://revive.today/blog/revivetoday-now-on-discord/)!

## Installing Applications

Each download comes as a zip or rar file. Inside the file should be a folder, and inside that folder – an EBOOT.PBP file.

**The folder containing EBOOT.PBP** should be copied over to your PSP directory **/PSP/GAME**. So if your application was **foobar/EBOOT.PBP**, you would copy **foobar** to **/PSP/GAME** so it would display as **/PSP/GAME/foobar**. If done correctly, your application will now show up in the **Memory StickTM folder** of Game on the PSP.

A lot of emulators will expect the games to be installed in a specific manner. Check each zip file for a file titled **readme** for details on how the emulator is supposed to see the ROM files. Commonly the app will come with subfolders named something like ROM to put these files in.
