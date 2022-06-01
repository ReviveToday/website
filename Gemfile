source "https://rubygems.org"

gem "jekyll", "~> 4.2.2"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-paginate"
  gem "jekyll-seo-tag"
  gem "jekyll-remote-theme"
  # And (always) last, the sitemap.
  gem "jekyll-sitemap"
end

# Crashes without this for some stupid reason.
gem "webrick"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data
# gem and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
