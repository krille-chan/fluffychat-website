---
title: Changelog
layout: "article.njk"
pagination:
  data: i18n.languages
  size: 1
  alias: lang
eleventyComputed:
  permalink: "{{ lang }}/changelog/index.html"
  lang: "{{ lang }}"
---

# {{ i18n[lang].changelog }}

