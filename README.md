# VoxPunk Studio 🎙️⚡
### School Podcast Production & Audio Suite for RØDECaster Duo

A lightweight, high-energy, web-based podcast production studio tailored for classroom podcasting with **RØDECaster Duo** and **2x RØDE PodMic**.

---

## 🚀 Features
- **Bilingual Interface**: Seamless instant toggle between English (EN) and Italian (IT).
- **Pop-Art Punk Aesthetic**: Middle-school & high-school friendly, high-contrast, comic-zine UI designed for engaged student collaboration.
- **RØDECaster Duo SMART Pads**: 6 physical-like customizable arcade pads with built-in procedural synthesis, keyboard shortcuts (`1`-`6`), custom sound assignment, and 48kHz WAV downloads for SD card loading.
- **Visual Waveform Audio Editor**:
  - Live USB recording directly from RØDECaster Duo with real-time VU meter and digital recording timer.
  - 1-Click SD Card / Folder auto-import with latest take detection.
  - Podcast Normalizer to broadcast standard (-16 LUFS).
  - PodMic Vocal Clarity EQ filter.
  - 1-Click Episode Builder: Auto-crossfades Intro, Voice, Outro, and background Lo-Fi bed with auto-ducking (-12dB).
- **On-Air Teleprompter**:
  - Fullscreen scrollable prompter for student co-hosts with color-coded speaker lines.
  - **Mirror / Flip Mode**: Flips text horizontally for physical teleprompter glass (beam-splitter rigs).
  - Dynamic scroll speed control with pause (`0`) and live slider response.
  - Context-aware keyboard shortcuts (`Space` to toggle auto-scroll, `Esc` to exit).
- **3000x3000px Cover Art Generator**:
  - True 3000x3000px high-resolution PNG export for Spotify and Apple Podcasts compliance.
  - School logo and host photo upload sticker support with retro pop-art comic framing.
- **Master Audio Export**:
  - 48.0 kHz 24-bit/16-bit Broadcast WAV export.
  - 192 kbps MP3 export powered by an offline-ready in-browser MP3 engine.
- **Data Safety & Classroom Workflow**:
  - Real-time `localStorage` autosave so student work is never lost on refresh.
  - `.voxpunk` Project File Save & Open for saving class sessions.
  - Print-ready Classroom Call Sheet with checkboxes and formatted cues.
- **PWA & Offline Classroom Ready**: Service worker and web app manifest for 100% offline use in audio booths and school labs.

---

## 🛠️ Tech Stack
- Pure HTML5, CSS3 (Neo-Brutalist Pop-Art Design System), Vanilla JavaScript.
- Web Audio API for real-time sound synthesis, audio decoding, offline mastering, and WAV encoding.
- `lamejs` embedded offline for client-side MP3 conversion.
- Progressive Web App (PWA) Service Worker cache.

---

## 🌐 Deployment
Hosted on Vercel with custom domain integration at `podcast.edumanu.com` (also surge.sh ready).
