---
layout: "default"
lang: "en"
---
# Contact Us
{% if site.email %}<a href="mailto:{{ site.email }}">{{ site.email }}</a>{% endif %}
{% if site.discord %}<a href="{{ site.url }}{{ site.baseurl }}/discord">{{ site.discord }}</a>{% endif %}
