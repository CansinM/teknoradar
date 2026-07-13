# TeknoRadar

TeknoRadar; teknoloji haberleri, açık kaynak projeler, geliştirici araçları ve güvenlik uyarılarını tek merkezde toplayan ücretsiz, statik ve GitHub Pages uyumlu bir teknoloji radarıdır.

## Özellikler

- Ana sayfada bugünün öne çıkan teknoloji sinyalleri
- Hacker News ve Dev.to tabanlı haber akışı
- RSS kaynakları için seçili fallback haberleri
- Geliştiriciler için ücretsiz araç kataloğu
- Seçilmiş açık kaynak repo vitrini
- CISA KEV tabanlı güvenlik uyarıları
- Kısa ve kalıcı teknoloji rehberleri
- Bootstrap veya build sistemi gerektirmeyen statik mimari

## Mimari

Proje saf HTML, CSS ve JavaScript ile hazırlandı. GitHub Pages, Cloudflare Pages, Netlify veya herhangi bir statik hosting üzerinde doğrudan çalışır.

Canlı kaynaklara erişim olmazsa uygulama boş ekran göstermek yerine `js/app.js` içindeki seçilmiş fallback veriyle çalışmaya devam eder.

## Kaynaklar

- Hacker News API: https://github.com/HackerNews/API
- Dev.to / Forem API: https://developers.forem.com/api
- GitHub REST API: https://docs.github.com/rest
- CISA Known Exploited Vulnerabilities: https://www.cisa.gov/known-exploited-vulnerabilities-catalog

## Çalıştırma

Dosyaları doğrudan tarayıcıda açabilirsiniz:

```bash
open index.html
```

Yerel HTTP sunucusu ile test etmek için:

```bash
python3 -m http.server 8080
```

Ardından `http://localhost:8080` adresini açın.

## Lisans

MIT
