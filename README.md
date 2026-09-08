# The Swamp — Capstone prototype

The Swamp is an interactive artist campaign dashboard for reviewing performance, social signals, audience concentration, recommendations, and campaign results.

## Run it

```bash
npm run dev
```

Then open `http://localhost:4173`.

The presentation preview is protected by a static client-side password gate. Use the password supplied by the project owner. Access lasts for the current browser session; add `?lock=1` to any route to show the gate again.

## Demo path

1. Open **Decision Queue** to review the three highest-priority campaign signals.
2. Use the campaign selector to switch between the KenTheMan, Stray Kids, and Mergui illustrative mocks.
3. Follow the analysis pipeline from data collection through measurement.
4. Review signal criteria, analytics, source comments, audience attribution, and the recommended action.
5. Add a strategy note, approve the action, and preview the illustrative result.
6. Select **Share** to create a local public-brief URL, or **Preview brief** to copy the brief into Google Docs or download HTML.
7. Open **Implementation Guide** for the proposed APIs, credentials, data contract, and frontend integration.

## Prototype routes

- `index.html` — artist campaign dashboard
- `signal-library.html` — prioritized decision queue
- `audiences.html` — cross-campaign audience shifts
- `shared-briefs.html` — artist-ready brief archive
- `implementation-guide.html` — backend handoff and data integration guide
- `share.html?artist=kentheman&range=48` — mock public brief page

The current artist profile figures are the provided Republic Distro data. The September 2025–August 2026 sparklines, interval-level signal curves, comparison periods, and campaign narratives are clearly labeled illustrative mock data.

The share URLs are functional local previews, not individually token-protected pages. A production backend should issue signed, revocable, expiring links and keep platform credentials out of browser code.

The included password gate is appropriate only for a presentation mock. Because the site is static, it does not replace server-side authentication and should not be used to protect sensitive or production data.

## Artist image sources

- KenTheMan: [Houston Chronicle portrait](https://www.houstonchronicle.com/music/article/Meet-KenTheMan-a-rising-rapper-Northside-native-17165499.php)
- Stray Kids: [official Spotify artist profile](https://open.spotify.com/artist/2dIgFjalVxs4ThymZ67YCE)
- Mergui: [official Shazam artist profile](https://www.shazam.com/artist/mergui/1423596903)
