from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote

root=Path(__file__).resolve().parent
class Page(HTMLParser):
    def __init__(self,text):
        super().__init__(); self.links=[]; self.ids=set(); self.h1=0; self.title=''; self.in_title=False; self.description=None; self.robots=None; self.feed(text)
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='h1': self.h1+=1
        if tag=='title': self.in_title=True
        if 'id' in a: self.ids.add(a['id'])
        for key in ['href','src']:
            if key in a: self.links.append(a[key])
        if tag=='meta' and a.get('name')=='description': self.description=a.get('content')
        if tag=='meta' and a.get('name')=='robots': self.robots=a.get('content')
    def handle_endtag(self,tag):
        if tag=='title': self.in_title=False
    def handle_data(self,data):
        if self.in_title: self.title+=data

pages={p.resolve():Page(p.read_text(encoding='utf-8')) for p in root.rglob('*.html')}
errors=[]; titles=set(); descriptions=set(); checks=0
for path,page in pages.items():
    if page.h1!=1: errors.append(f'{path.name}: expected one H1')
    if not page.title or page.title in titles: errors.append(f'{path.name}: missing or duplicate title')
    if not page.description or page.description in descriptions: errors.append(f'{path.name}: missing or duplicate description')
    if page.robots and 'noindex' in page.robots: errors.append(f'{path.name}: page marked noindex')
    titles.add(page.title); descriptions.add(page.description)
    for link in page.links:
        u=urlsplit(link)
        if u.scheme or u.netloc: continue
        target=(path.parent/unquote(u.path)).resolve() if u.path else path
        checks+=1
        if not target.exists(): errors.append(f'{path.name}: missing {link}')
        elif u.fragment and target in pages and u.fragment not in pages[target].ids: errors.append(f'{path.name}: missing anchor {link}')
if errors: raise SystemExit('\n'.join(errors))
print(f'PASS: {len(pages)} pages; {checks} local links/resources; unique titles/descriptions; H1 and indexing.')
