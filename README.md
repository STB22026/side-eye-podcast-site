# The Side-Eye Podcast — Website

This is your starter site: a homepage with your cover art, listen links,
an about section, a "merch coming soon" section, and an email signup form.
It's plain HTML/CSS/JS — no build tools, no frameworks — so it's easy to
open and edit in VS Code even with no coding background.

## Files

```
side-eye-podcast-site/
├── index.html          the page itself — all the text lives here
├── css/style.css        colors, fonts, spacing, layout
├── js/main.js           mobile menu + signup form behavior
├── images/podcast-cover.png   your cover art
└── README.md            this file
```

To edit text: open `index.html` in VS Code and change the words between
the tags. To change colors: open `css/style.css` — the color palette is
defined once at the top under `:root`, so changing a value there updates
it everywhere.

## 1. Open it in VS Code

1. Install [VS Code](https://code.visualstudio.com/) if you don't have it.
2. Unzip this folder somewhere on your computer.
3. In VS Code: File → Open Folder → select `side-eye-podcast-site`.
4. Install the "Live Server" extension (search it in the Extensions panel,
   the icon on the left sidebar). Right-click `index.html` → "Open with
   Live Server" to preview the site in your browser as you edit. Every
   save auto-refreshes the preview.

## 2. Put it on GitHub

Cloudflare Pages deploys from a GitHub repository, so:

1. Create a free account at [github.com](https://github.com) if you don't
   have one.
2. Create a new repository (e.g. `side-eye-podcast-site`). Leave it empty
   (no README, no .gitignore — you already have files).
3. In VS Code's built-in terminal (Terminal → New Terminal), run:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/side-eye-podcast-site.git
   git push -u origin main
   ```
   (VS Code's Source Control panel — the icon that looks like a branching
   line — can also do all of this with buttons instead of typing commands,
   if you prefer.)

## 3. Deploy on Cloudflare Pages (free)

1. Sign up / log in at [dash.cloudflare.com](https://dash.cloudflare.com).
2. Go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select your `side-eye-podcast-site` repo.
4. Build settings: leave the build command blank and the output directory
   as `/` (this is a plain static site, nothing to build).
5. Click Deploy. You'll get a free `*.pages.dev` URL immediately — that's
   your site, live.

Every time you push a change to GitHub, Cloudflare redeploys automatically.

## 4. Connect thesideeyepodcast.com

Since the domain is already set up:

1. In the Cloudflare dashboard, go to your Pages project → **Custom
   domains** → **Set up a custom domain**.
2. Enter `thesideeyepodcast.com` (and `www.thesideeyepodcast.com` if you
   want both).
3. If the domain's nameservers are already pointed at Cloudflare, this is
   just a couple of clicks. If the domain lives elsewhere (GoDaddy,
   Namecheap, etc.), Cloudflare will show you the DNS record to add there
   — usually a single CNAME record.

## 5. Connect the email signup form

The form in `index.html` (search for `id="signup-form"`) currently just
shows a placeholder message. To make it actually collect emails, pick a
free email tool and swap in its form action:

**Option A — Beehiiv (recommended for a podcast; free tier, built for
newsletters):**
1. Create a free account at [beehiiv.com](https://beehiiv.com).
2. Create a subscribe form, copy its embed/action URL.
3. In `index.html`, replace `action="#"` on the `<form>` tag with that URL.
4. In `js/main.js`, you can remove the placeholder `if` block once it's
   connected, so submissions go straight through.

**Option B — Mailchimp (free up to 500 contacts):**
1. Create a free account, create an Audience.
2. Under Audience → Signup forms → Embedded forms, grab the form's
   `action` URL and the hidden input fields it uses.
3. Paste those into the `<form>` in `index.html`.

Either way, I'm happy to wire this up for you directly once you've picked
one and created the account — just share the form details.

## 6. Merch (later)

When you're ready, the easiest path is a free print-on-demand storefront
(Printful or Fourthwall) — no inventory, no upfront cost, they handle
printing/shipping/checkout. The `#merch` section in `index.html` is
already in place as a "Coming Soon" placeholder; when the store's ready
we'll either embed it directly or turn that section into a link/button
to your store.

## Notes on the content already in place

- Listen links are wired to the 5 platforms you gave me (Spotify, Apple
  Podcasts, Amazon Music, iHeartRadio, YouTube).
- Colors were pulled from the podcast cover art (cream, blush pink, dusty
  rose, gold, black).
- No Instagram/TikTok links are in the footer yet — send those over any
  time and I'll add them.
