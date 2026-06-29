# TemplateHub - Project Notes

## 📌 Website Info

- **URL:** https://iqbalrn.github.io/digital-freebies/
- **Repo:** https://github.com/iqbalrn/digital-freebies

---

## 🛠️ Tech Stack

| Item | Value |
|------|-------|
| Framework | Astro 4.x |
| Styling | Tailwind CSS |
| Icons | Lucide |
| Hosting | GitHub Pages |
| Domain | Belum ada |

---

## 📁 Project Structure

```
digital-freebies/
├── src/
│   ├── components/
│   │   ├── Header.astro      # Navigasi + search
│   │   ├── Footer.astro      # Footer links
│   │   ├── TemplateCard.astro    # Card template
│   │   ├── CategoryCard.astro    # Card kategori
│   │   └── AdBanner.astro        # Slot iklan Adsterra
│   ├── layouts/
│   │   └── MainLayout.astro      # Layout utama + SEO
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── templates.astro      # Semua template
│   │   ├── categories.astro    # Daftar kategori
│   │   ├── category/[cat].astro # Halaman kategori
│   │   ├── template/[slug].astro # Detail template
│   │   ├── download/[slug].astro # Download page
│   │   ├── about.astro
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   └── 404.astro
│   └── data/
│       └── templates.json      # Database template
├── public/
│   ├── templates/              # Upload screenshot di sini
│   └── favicon.svg
├── astro.config.mjs
├── tailwind.config.mjs
└── .github/workflows/deploy.yml
```

---

## 🎨 Design

- **Theme:** Light mode only (dark mode dihapus karena bug)
- **Primary Color:** Violet → Indigo gradient (#7c3aed → #4f46e5)
- **Base Path:** `/digital-freebies`

---

## ✅ Fitur yang Sudah Dibuat

1. ✅ Homepage dengan Hero + Search
2. ✅ Featured Templates
3. ✅ Category Grid (Excel, Canva, Video, PowerPoint, Word)
4. ✅ Template Cards dengan rating & format badge
5. ✅ Template Detail Page
6. ✅ Download Page dengan countdown 5 detik
7. ✅ Related Templates
8. ✅ Adsterra Banner Slots (placeholder)
9. ✅ Responsive Design (mobile-friendly)
10. ✅ SEO Meta Tags
11. ✅ GitHub Pages Auto-Deploy

---

## 📝 Cara Menambah Template

Edit `src/data/templates.json`:

```json
{
  "id": "14",
  "title": "Nama Template Baru",
  "slug": "nama-template-baru",
  "category": "excel",
  "subcategory": "keuangan",
  "description": "Deskripsi template...",
  "format": "xlsx",
  "fileSize": "2 MB",
  "rating": 4.8,
  "reviews": 50,
  "downloads": 100,
  "featured": false,
  "thumbnail": "/templates/nama-file.jpg",
  "tags": ["tag1", "tag2"],
  "createdAt": "2026-06-29"
}
```

---

## 📸 Upload Thumbnail

1. Screenshot template
2. Simpan di `public/templates/`
3. Update path di `templates.json`: `"thumbnail": "/templates/nama-file.jpg"`

---

## 🔗 Setup Download Link

Edit `src/pages/download/[slug].astro`:

```javascript
// Line ~150, ganti alert dengan redirect
window.location.href = "https://drive.google.com/...";
```

---

## 💰 Setup Adsterra

1. Daftar di https://adsterra.com
2. Buat ad zones
3. Copy kode ke `src/components/AdBanner.astro`

---

## 🚀 Cara Edit & Deploy

```bash
# 1. Edit file di src/

# 2. Commit & push
git add .
git commit -m "Update deskripsi"
git push

# 3. GitHub Actions auto-deploy (~2 menit)
```

---

## 📌 TODO

- [ ] Setup Adsterra ads
- [ ] Setup shortlink untuk download
- [ ] Ganti template data dengan data asli
- [ ] Upload thumbnail semua template
- [ ] Beli domain custom
- [ ] Setup newsletter (email service)

---

## 🔧 Troubleshooting

### CSS tidak loading?
- Pastikan `base: '/digital-freebies'` di `astro.config.mjs`

### Link 404 saat navigasi?
- Pastikan semua link pakai `${base}/...`

### Build error?
```bash
npm run build
```

---

*Created: June 29, 2026*
