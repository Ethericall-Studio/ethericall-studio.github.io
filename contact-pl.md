---
layout: "default"
lang: "pl"
---
# Napisz do nas
{% if site.email %}<a href="mailto:{{ site.email }}">{{ site.email }}</a>{% endif %}
{% if site.discord %}<a href="{{ site.url }}{{ site.baseurl }}/discord">{{ site.discord }}</a>{% endif %}
