import urllib.request
import os

os.makedirs('public/assets/logos', exist_ok=True)

logos = {
    'scansecure.png': 'https://scansecure.in/fav-icon.png',
    'spillx.webp': 'https://spillx.in/wp-content/uploads/2025/08/cropped-Spillx-removebg-preview-192x192.webp',
    'galigram.png': 'https://galigram.com/assets/logos.png',
    'galigram-fav.png': 'https://galigram.com/assets/favicon.png',
    'webpconverter.png': 'https://webpconverter.tech/assets/logo.png',
    'cyberzip.png': 'https://cyberzip.in/img/Cyberzip-Icon.png'
}

for name, url in logos.items():
    path = os.path.join('public/assets/logos', name)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = resp.read()
            with open(path, 'wb') as f:
                f.write(data)
        print('Downloaded', name, len(data), 'bytes')
    except Exception as e:
        print('Failed to download', name, e)
