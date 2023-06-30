---
title: Don't Bin it, Revive it!
layout: home
---

After many wonderful years serving the community in retro revival, this website has come to a close. You can [read more in the latest blog entry]({% link _posts/2023-06-30-goodbye-from-revivetoday.md %}).
{: .rt-alert .warning}

**The community is stronger than ever - thanks for the wonderful memories.**

## News & Blog

<div class="container">
	<div class="row g-2 pb-2 align-items-start">
		{%- for post in site.posts limit:4 -%}
		{%- assign date_format = site.bootstrap.date_format | default: "%b %-d, %Y" -%}
		{%- assign sep = forloop.index | modulo: 2 -%}
		<div class="col">
			{%- if post.image -%}
			<div class="rt-homegrid" style="background-image:url('{{- post.image | relative_url -}}')"></div>
			{%- else -%}
			<div class="rt-homegrid" style="background-image:url('/assets/img/rt-default-banner.webp')"></div>
			{%- endif -%}
			<h3><a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>	
			<span class="post-meta text-muted">Posted {{ post.date | date: date_format }}</span>
			<div>
				<p class="rt-button"><a href="{{ post.url | relative_url }}">Read More</a></p>
			</div>
		</div>
		{%- if sep == 0 -%}
		</div>
		<div class="row g-2 pb-2 align-items-start">
		{%- endif -%}
		{%- endfor -%}
	</div>
</div>

<div class="text-center">
	<p class="rt-button"><a href="{% link blog/index.html %}">View the archive</a></p>
</div>
