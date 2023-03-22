---
title: What to Buy
layout: page
---

This article is still **undergoing quality control** due to missing information – be advised things may change.
{: .rt-alert .warning}

<div class="container rt-columncase">
<div class="row align-items-start">

<div class="col" markdown="1">

## Original / “phat”

![](/assets/img/1280px-PS3-Fat-Console-Vert.webp)

Shiny shell, Raimi Spiderman font, heavyweight.

* CPU: 3.2 GHz
* GPU: Nvidia G70-based 500 Mhz
* RAM: 512 MB ( 50:50 split CPU/GPU)
* Storage: 20 GB, 60GB, 80 GB (replaceable 2.5″ SATA)
* PS2 compat: Yes\*
* USB Ports: 2 – 4
* PSU: 380W – 280 W

</div><div class="col" markdown="1">

## Slim

![](/assets/img/800px-PS3-Slim-Console-Vert.webp)

Matte shell, PS3 emboss logo, defined buttons, slimmer profile.

* CPU: 3.2 Ghz
* GPU: Nvidia G70-based 500 Mhz
* RAM: 512 MB ( 50:50 split CPU/GPU)
* Storage: 120 GB, 250 GB, later 160 GB and 320 GB (replaceable 2.5″ SATA)
* PS2 compat: No
* USB Ports: 2
* PSU: 250 W to 200 W

</div><div class="col" markdown="1">

## Super Slim

![](/assets/img/1920px-Sony-PlayStation-PS3-SuperSlim-Console-FL.webp)

Corrugated top shell, flat PS3 logo, face-side tiny buttons, pancake.

* CPU: 3.2 Ghz
* GPU: Nvidia G70-based 500 Mhz
* RAM: 512 MB ( 50:50 split CPU/GPU)
* Storage: 250 GB, 500 GB (replaceable 2.5″ SATA)
* PS2 compat: No
* USB Ports: 2
* PSU: 190 W

</div>

</div>
</div>

_\* Heavily dependant on the phat console generation. First generation ( 4 USB ports) has the PS2 GPU, enabling full hardware emulation. Second generation could run PS2 games via software rendering, and all other generations dropped PS2 emulation for **PS2 classics**._

Can’t find the drive size for you? **Don’t bother**, [replace it **yourself**](https://www.ifixit.com/Guide/PlayStation+3+Slim+Hard+Drive+Replacement/3223)!
{: .rt-alert .info}

## 🤔 Which Should I Buy?

Want to play PS2 games? [Buy a PS2]({% link ps2/index.md %}) and a **PS3 Slim**.

For gaming, the Slim truly is the best model in the line up. Generally (later the model, the truer this is) they are much less susceptible to the [dreaded **YLOD**](#YLOD), they came in generally good hard drive offerings, and were significantly quieter and lower on energy consumption. Put it this way – phat was the test, slim was the improvement, super was the cheap.

If you were keen on more advanced offerings that came with the PlayStation, they mostly lived and died with the phat. **PS2 emulation and Console Linux** were designed and worked with the phat, so you’ll need one of the **earliest models** they made (4 USB ports and a card reader). However, bear in mind that these consoles may need a lot of TLC in this day and age.

## 🤫 Best Model for Custom Firmware

**Phats** (and early **Slim** models) are the most flexible for custom firmware, but **[all models can use PS3HEN](https://youtu.be/xGS_Ryx_7r8)**. We’ll cover custom firmware soon, but the best resource for these type of questions currently is the [ConsoleMods.org Wiki on Reddit](https://consolemods.org/wiki/PS3:PS3_Mods_Wiki).

## ☠ Yellow Light of Death

It seems like both the **original PlayStation 3** and the **original Xbox 360** have something in common – **heat death**. It seems like with the race to release the next generation, both consoles didn’t account for something that was not something easily tested on tight deadlines. That is the multi-hour gaming.

![](/assets/img/ps3thisisfine.webp)
{: .article-image }

While the Xbox 360 was famous for the three **Red Ring of Death**, the PlayStation 3 was as-famous with the **Yellow Light of Death** – the console’s way of letting you know there’s a hardware failure. The reason? Well, it would be making it easy if it told you now, wouldn’t it.

A shared common fault between the 360 and the PS3 was **heat**. Extended gaming sessions or badly ventilated areas would naturally cause the console to heat up. Over time, this could **stress** out the **solder joints**. These ‘joints’ are what connects electrical components together, and stressed out joints equals bad connections. And fixing these stressed joints is **console repairman-level fixes**. The fix was always to **reball** the motherboard – basically, give it a quick pop in the oven and bake it into a Raspberry Pi. This would melt all the solder in your console, and hopefully – cool it right back into place. To be clear, this **not recommended** as you’re not _fixing_ the problem. You’re basically slapping a band-aid on your leg, then sticking your leg in the oven.

Another break-through, PS3 phat-specific discovery for some YLOD issues was the **NEC Tokins**. Simply put, they’re **flat capacitors**. The problem was that a lot of community hardware hackers discovered they had a tendency to fail. This was especially noticeable by those who tried the original method and found it worked _temporarily_. Because baking your motherboard reset the solder joint balls and often the Tokins, you didn’t actually _fix_ the initial issue – round-and-round we go!

The modern fixes for older PlayStation 3’s are (in order):

1. **Re-apply the thermal paste** (Thermal compound can degrade over time, but the amount differs for all consoles).
   * Keep an eye on temperatures to work out if this is needed. Generally speaking it might be required if you find your console is getting very hot (above 60-70°C during gameplay). Bear in mind you might find that cleaning your PS3 will be sufficient, but if you plan on **deep cleaning**, you'll need to detach the heatsink and at that point, you might as well do it anyway.
2. (modded consoles) use **webMANs**‘ version of fan control, or set the fan to run at a fixed minimum speed (40-50 minimum should be sufficient).
3. (advanced) [Replace/bypass the NIC Tokins with Tantalum capacitors](https://www.psx-place.com/threads/tutorial-research-nec-tokin-capacitors-replacement-ylod-fix.25260/) (you **need a lot** of soldering equipment & patience).
   * This becomes a **requirement** if you find you are getting a constant yellow light upon boot (YLOD mentioned above).
4. Air-condition your room to 15°C and/or play in the Arctic.
5. [Water cool your PS3](https://www.gearfuse.com/water-cooled-ps3-someone-was-bound-to-do-it/) (Linus would be proud).

As a fortunate owner of a phat that does not suffer from the YLOD, I’ve found great success in simply **ramping up the fan speed (set a minimum of 40%)** and **keeping the console and surrounding areas clean and free**. Unfortunately this does make the console sound loud, but it’s a fair trade-off for a broken, non-functional console.

The problem primarily affected the **PS3 Phat**. Unfortunately some generations of the **Slim** can experience similar problems, especially as they age. Later generation models of **Slim** and **Super Slim** are much less susceptible to it, so long as there is good ventilation around the unit. In short, for YLOD – **the newer, the better**.
