# TeknoRadar

TeknoRadar; teknoloji haberleri, acik kaynak projeler, gelistirici araclari ve guvenlik uyarilarini tek merkezde toplayan ucretsiz, statik ve GitHub Pages uyumlu bir teknoloji radaridir.

## Ozellikler

- Ana sayfada bugunun one cikan teknoloji sinyalleri
- Hacker News ve Dev.to tabanli haber akisi
- RSS kaynaklari icin secili fallback haberleri
- Gelistiriciler icin ucretsiz arac katalogu
- Secilmis acik kaynak repo vitrini
- CISA KEV tabanli guvenlik uyarilari
- Kisa ve kalici teknoloji rehberleri
- Bootstrap veya build sistemi gerektirmeyen statik mimari

## Mimari

Proje saf HTML, CSS ve JavaScript ile hazirlandi. GitHub Pages, Cloudflare Pages, Netlify veya herhangi bir statik hosting uzerinde dogrudan calisir.

Canli kaynaklara erisim olmazsa uygulama bos ekran gostermek yerine `app.js` icindeki secilmis fallback veriyle calismaya devam eder.

## Kaynaklar

- Hacker News API: https://github.com/HackerNews/API
- Dev.to / Forem API: https://developers.forem.com/api
- GitHub REST API: https://docs.github.com/rest
- CISA Known Exploited Vulnerabilities: https://www.cisa.gov/known-exploited-vulnerabilities-catalog

## Calistirma

Dosyalari dogrudan tarayicida acabilirsiniz:

```bash
open index.html
```

Yerel HTTP sunucusu ile test etmek icin:

```bash
python3 -m http.server 8080
```

Ardindan `http://localhost:8080` adresini acin.

## Lisans

MIT
