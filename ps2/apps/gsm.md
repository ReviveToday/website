---
title: GS Mode Selector
layout: page
---

As a Brit, when you would buy a game it would _always_ be a PAL. Then, once you had booted the games up (especially later ones), they would ask you if you wanted to give NTSC a pop. Why? PAL and NTSC are analogue video standards, and back in those days we lived in the tail end of the analogue era (thanks to our lord and saviour, the holy HDMI). PAL was often interlaced at 576i, and NTSC at 480i (the good old slow internet YouTube fallback). Due to this transitioning period from analogue to digital, the PS2 received the ability to [transmit over Component]({% link ps2/display-output.md %}#cable-component), the highest quality you could possibly get through an analogue signal, but the games themselves had to support this.

Step in [Graphic Synthesiser Mode Selector](http://psx-scene.com/forums/f291/gs-mode-selector-development-feedback-61808/), or GSM. With this amazing tool, you can run a large number of games with screen settings that a preferable to you, rather than to how the game was configured. This means that with your [Component]({% link ps2/display-output.md %}#cable-component) setup you can squeeze games to output a more preferable signal to your TV, up to a maximum of **1080i**!

GSM is already making miracles by converting signals, but this is _not_ a dedicated upscaler. Be aware that this console is still the PS**2**, and will not anti-alias the signal or increase the graphic settings. You will still get jagged edges and slightly choppy output with games not designed for such high outputs, but it will – depending on your preference and TV – be better than relying on your TV to handle an old signal.

## Built-in to OPL

If you run your games through [Open PS2 Loader]({% link ps2/apps/opl.md %}), then you will not need a separate installation. OPL has a form which includes a built-in edition of GSM, allowing you to store GSM configurations per game. This edition also allows you to configure GSM through the OPL interface. If you wish to run DVD-Loaded games then you will be better off grabbing this copy, but otherwise this is a route you can go down.

## Download

The community over at PSX Scene currently actively maintain GSM. This wonderful community maintains development of the standalone edition, and recommends following their thread to receive update notifications. Their documentation also lists various configurations that can work with your cable and TV setups.

<div class="text-center">
	<p class="rt-button"><a href="http://psx-scene.com/forums/f291/gs-mode-selector-development-feedback-61808/#post_message_457518">Downloads (PSX-Scene)</a></p>
</div>

Alternatively, you can download **0.38** if the website is down, or you are confident you know how to use the ELF.

<div class="text-center">
	<p class="rt-button"><a href="https://drive.google.com/file/d/10dcvl--9jmV6ZoNKuuEPnfSDrY9rUzQl/view?usp=sharing">Download</a></p>
</div>
