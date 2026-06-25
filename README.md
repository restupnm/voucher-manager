# cloud.spot — WiFi Voucher Manager

A simple, beautiful, **fully static** WiFi voucher manager that runs entirely in the browser. No backend, no API. Database lives in **IndexedDB** on the user's device.

Designed for GitHub Pages.

## Features

- 🔐 **Single-page entry** — guests enter their voucher code; admins enter the secret password
- 📊 **Admin Dashboard** — stats, search, filters, pagination, QR codes
- 🎟️ **Add / Import / Export / Edit / Delete** vouchers
- 💬 **Sell via WhatsApp** — auto-generates the voucher image (PNG) and opens `wa.me` with a prefilled message
- ⏱️ **Live countdown** for active vouchers
- 💾 **Backup / Restore** to JSON or Excel
- 🌐 **3 languages** — English, Bahasa Indonesia, Basa Jawa
- 📱 Fully responsive

## Default admin password

```
admin123
```

You can change it from `Dashboard → Sidebar → Settings → Change Admin Password`.

## Voucher code pattern

| Period   | Prefix | Days |
|----------|--------|------|
| 1 Hari   | `1H`   | 1    |
| 1 Minggu | `1M`   | 7    |
| 1 Bulan  | `1B`   | 30   |

Codes are auto-generated as `<prefix>` + 4 random lowercase alphanumeric chars (e.g. `1Myxj5`, `1Bdx7w`).

## Deploy to GitHub Pages

1. Copy these 3 files into the root of your GitHub repo:
   - `index.html`
   - `app.js`
   - `styles.css`
2. Push to GitHub.
3. In your repo: **Settings → Pages → Source: `main` branch, root** → Save.
4. Done. Visit `https://<your-user>.github.io/<repo>/`.

> All data lives in the browser's IndexedDB on the device that opens the page. Use the **Backup** feature to save copies.

## WhatsApp send flow

When the admin clicks **Send Voucher**:
1. The voucher card is rendered to a PNG and **auto-downloaded** to the device.
2. WhatsApp opens (`wa.me/<phone>`) with a prefilled message that includes the voucher code & validity.
3. The admin manually attaches the downloaded image in WhatsApp.

(There is no way to auto-attach an image via `wa.me` — this is a WhatsApp limitation.)

## Local development

```bash
cd frontend
node server.js
# open http://localhost:3000
```
