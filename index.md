---
title: Don't Bin it, Revive it!
layout: home
---

[PlayStation 1 & 2]({% link ps2/index.md %}) have over 2,500 titles each, and the [PlayStation Portable]({% link psp/index.md %}) has 1,500. [Dreamcast]({% link dreamcast/index.md %})? it had more than 600 known releases. Have you played all of these?

Dust off your old PlayStation, replace the VMU battery of your Dreamcast, and ready your stylus for your [Nintendo DS]({% link nds/index.md %}). Here at Revive Today we will show you what you’ve missed out on and more. We will show you the latest modifications that will ensure the best possible experience, and make sure you will want to continue enjoying that old machine of wonders. Don’t have a retro console to revive? Then [build one out of a Raspberry Pi]({% link raspberry-pi.md %})!  

As more consoles get retro-status from the passage of time, we will continue to provide you with the best resources you can get. Here we commit to ensuring we have:

* Up-to-Date Guides, with date stamps for verification.
* Comprehensive resource on what you can do.
* Homebrew guides and information.
* Directions to the most active and trusted platform communities.

**What are you waiting for? Join us on the retro revival!**

## News & Blog

<div class="container">
	<div class="row g-2 pb-2 align-items-start">
		{%- for post in site.posts limit:4 -%}
		{% assign sep = forloop.index | modulo: 2 %}
		<div class="col">
			{%- if post.image -%}
			<div class="rt-homegrid" style="background-image:url('{{- post.image | relative_url -}}')"></div>
			{%- else -%}
			<div class="rt-homegrid" style="background-image:url('/assets/img/rt-default-banner.png')"></div>
			{%- endif -%}
			<h3><a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
			<div>
				<p class="rt-button"><a href="{{ post.url | relative_url }}">Read More</a></p>
			</div>
		</div>
		{% if sep == 0 %}
		</div>
		<div class="row g-2 pb-2 align-items-start">
		{% endif %}
		{%- endfor -%}
	</div>
</div>

<div class="text-center">
	<p class="rt-button"><a href="{% link blog/index.html %}">View the archive</a></p>
</div>
