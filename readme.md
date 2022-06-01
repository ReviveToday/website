# ReviveToday Website

<p align="center">
  <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://img.shields.io/badge/license-CC--BY--NC--SA--4.0-black" /></a>
  <a href="#"><img alt="Website status" src="https://img.shields.io/website?down_message=offline&up_message=online&url=https%3A%2F%2Frevive.today" /></a>
  <a href="https://revive.today/discord"><img alt="Discord" src="https://img.shields.io/discord/823021126199934977?color=%235765f2&logo=discord&logoColor=white"></a>
  <a href="https://securityheaders.com/?q=revive.today&followRedirects=on"><img alt="Security Headers" src="https://img.shields.io/security-headers?url=https%3A%2F%2Frevive.today" /></a>
  <a href="https://observatory.mozilla.org/analyze/revive.today"><img alt="Mozilla HTTP Observatory Grade" src="https://img.shields.io/mozilla-observatory/grade-score/revive.today?publish" /></a>
</p>

![Screenshot 2022-01-30 at 22 37 01](https://user-images.githubusercontent.com/11209477/151720833-73527e6f-6575-44db-ba2a-f61163db2d99.png)

The ReviveToday website, built and composed with **Jekyll** and deployed onto **GitHub Pages**. Theme is **[Modoki Lite](https://github.com/ReviveToday/Modoki-Lite)**.

## Cloudflare Pages Setup

This site is installed onto [CloudFlare pages](https://revivetoday.pages.dev). Custom changes for CloudFlare support:

* `_redirects` file for setting up [Pages-syntax redirections](https://developers.cloudflare.com/pages/platform/redirects).

## Converting Images to WEBP using ffmpeg

```bash
# PNG
for i in *.png; do ffmpeg -i "$i" -lossless 1 "${i%.*}.webp"; done
# JPEG
for i in *.jpg; do ffmpeg -i "$i" -lossless 1 -c libwebp "${i%.*}.webp"; done
# GIF
for i in *.gif; do ffmpeg -i "$i" -vcodec webp -loop 1 -pix_fmt yuv420p "${i%.*}.webp"; done
```
