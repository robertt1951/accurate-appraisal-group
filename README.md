# Accurate Appraisal Group, LLC — static website

A four-page static site to replace the current WordPress site at aagllc-ct.com.

## Pages

- `index.html` — Home
- `about.html` — History, Lisa D. Tarver, how the practice works
- `faq.html` — Common appraisal questions
- `privacy.html` — Privacy policy for a static brochure site

## Design

Colors follow the live WordPress site:

- Header / accent red `#c41212` (matches the red title over the house banner)
- Navy `#0f2f6b` / `#0a2048` (matches the blue bar under the homepage copy)
- Gold center on the target mark `#f5c518`
- White canvas, warm gray body text

The bullseye mark is an original SVG standing in for the target-over-house banner. Swap it for the official logo file if you have one.

## Before you publish

1. Add the real phone number and email in the contact block on `index.html` and in `privacy.html`.
2. Change the form if you want submissions stored online. Easiest options:
   - [Formspree](https://formspree.io) — set `action="https://formspree.io/f/YOUR_ID"` and `method="POST"`
   - [Netlify Forms](https://docs.netlify.com/forms/setup/) — add `netlify` to the `<form>` tag
3. Confirm Lisa’s public bio wording with her. License number RCR.0002070 is from the ASC National Registry and is listed as active in Milford, CT.

## Deploy (no WordPress)

Any static host works. Three simple ones:

### Netlify (drag and drop)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drop this entire folder
3. Point the `aagllc-ct.com` DNS to Netlify when you are ready to leave SiteGround

### Cloudflare Pages

1. Zip this folder or push it to a GitHub repo
2. In Cloudflare: Workers & Pages → Create → Pages
3. Build command: leave empty. Output directory: `/`

### GitHub Pages

1. Create a repository
2. Upload these files
3. Settings → Pages → Deploy from main branch root

Then at your registrar or SiteGround DNS, change `aagllc-ct.com` from the WordPress host to the new host. Keep the WordPress site running until the DNS change propagates so there is no downtime.

## Local preview

Open `index.html` in a browser, or from this folder:

```bash
python3 -m http.server 8080
```

Visit http://localhost:8080
