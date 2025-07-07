#!/usr/bin/env python3
"""
generate_sitemap.py

Auto-generate sitemap.xml for PromptHive.
"""

import os
import datetime
from xml.etree.ElementTree import Element, SubElement, ElementTree

# Base URL of your site
SITE_URL = 'https://myprompthive.com'

def generate_sitemap():
    urls = []
    # Walk through docs/ for HTML files
    for root, dirs, files in os.walk('docs'):
        for file in files:
            if not file.endswith('.html'):
                continue
            # Compute URL path relative to docs/
            rel_path = os.path.relpath(os.path.join(root, file), 'docs')
            web_path = rel_path.replace(os.sep, '/')
            urls.append(f"{SITE_URL}/{web_path}")

    # Build XML tree
    urlset = Element('urlset', xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    today = datetime.date.today().isoformat()
    for url in urls:
        url_el = SubElement(urlset, 'url')
        loc = SubElement(url_el, 'loc')
        loc.text = url
        lastmod = SubElement(url_el, 'lastmod')
        lastmod.text = today

    # Write out sitemap.xml to docs/
    tree = ElementTree(urlset)
    tree.write('docs/sitemap.xml', encoding='utf-8', xml_declaration=True)
    print(f"Generated docs/sitemap.xml with {len(urls)} URLs.")

if __name__ == "__main__":
    generate_sitemap()
