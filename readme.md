# ReviveToday Website

<p align="center">
<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
</p>

![Screenshot 2022-01-30 at 22 37 01](https://user-images.githubusercontent.com/11209477/151720833-73527e6f-6575-44db-ba2a-f61163db2d99.png)

The ReviveToday website, built and composed with **Jekyll** and deployed onto **GitHub Pages**. 

## Features

* [Bootstrap 5 theme](https://github.com/jonaharagon/jekyll-bootstrap-theme).
* [Modoki theme](https://github.com/ReviveToday/Modoki) overlayed.
* All features ported over, but with 1/8<sup>th</sup> of the bloat.

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
