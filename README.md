# The Swamp — Capstone prototype

The Swamp is an interactive artist intelligence dashboard for reviewing a roster, social and streaming performance, content, audiences, sentiment, and analytics-backed recommendations.

## Run it

```bash
npm run dev
```

Then open `http://localhost:4173`.

The presentation preview is protected by a static client-side password gate. Use the password supplied by the project owner. Access lasts for the current browser session; add `?lock=1` to any route to show the gate again.

## Demo path

1. Open **Portfolio** for the daily executive snapshot across KenTheMan, Stray Kids, and Mergui.
2. Select an artist card to review headline growth, engagement, monthly listeners, and streaming totals.
3. Move through Social, Content, Audience, Sentiment, and Alerts to see the deeper dashboard.
4. Save or dismiss an alert, expand representative comments, and add an internal strategy note.
5. Select **Share** to generate a working artist-facing report link.
6. Select **Export PDF** and use the browser print dialog to save a frozen report snapshot.
7. Open **Setup Guide** for the proposed APIs, credentials, data contract, and frontend integration.

## Prototype routes

- `index.html` — executive portfolio (artist query parameters open the artist workspace)
- `signal-library.html` — prioritized alerts
- `audiences.html` — cross-artist audience comparison
- `shared-briefs.html` — artist-facing report archive
- `implementation-guide.html` — backend handoff and data integration guide
- `share.html?artist=kentheman&range=48` — mock artist-facing report page

The supplied monthly-listener, Instagram-follower, TikTok-follower, and all-time stream totals are preserved. All other platform values, histories, content performance, audience details, sentiment, comparisons, and recommendations are clearly treated as illustrative mock data.

The share URLs are functional local previews, not individually token-protected pages. A production backend should issue signed, revocable, expiring links and keep platform credentials out of browser code.

The included password gate is appropriate only for a presentation mock. Because the site is static, it does not replace server-side authentication and should not be used to protect sensitive or production data.

## Artist image sources

- KenTheMan: [Houston Chronicle portrait](https://www.houstonchronicle.com/music/article/Meet-KenTheMan-a-rising-rapper-Northside-native-17165499.php)
- Stray Kids: [official Spotify artist profile](https://open.spotify.com/artist/2dIgFjalVxs4ThymZ67YCE)
- Mergui: [official Shazam artist profile](https://www.shazam.com/artist/mergui/1423596903)
