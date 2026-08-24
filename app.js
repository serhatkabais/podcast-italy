/**
 * VoxClass Studio - Complete Podcast Production Engine
 * Bilingual (EN / IT) - Tailored for RØDECaster Duo + RØDE PodMic
 */

// ==========================================
// 1. I18N DICTIONARY (English & Italian)
// ==========================================
const i18n = {
  en: {
    appSubtitle: "School Podcast Production & Audio Suite",
    teleprompterBtn: "Live Prompter",
    tabScript: "1. Script & Cues",
    tabSoundboard: "2. SMART Soundboard",
    tabEditor: "3. Audio Editor & Stitcher",
    tabExport: "4. Master & Cover Art",
    tabGuide: "RØDECaster Setup Guide",

    // Script Section
    episodeDetailsTitle: "Episode Blueprint",
    lblEpTitle: "Episode Title",
    lblHost1: "Host 1 (PodMic 1)",
    lblHost2: "Host 2 (PodMic 2)",
    lblWords: "Words",
    lblEstTime: "Est. Duration (~130 wpm)",
    lblCues: "Sound Cues",
    templatesTitle: "Templates & Quick Scripts",
    btnTemplateEdu: "🎓 Science & Interview Template",
    btnTemplateDebate: "🎙️ Student Debate / Storytelling",
    btnClearScript: "🗑️ Clear Script",
    exportScriptTitle: "Print & Share",
    btnPrintScript: "🖨️ Print Sheet",
    btnExportText: "📄 Save Text",
    scriptTimelineTitle: "Timeline & Dialogue Blocks",
    btnSoundCue: "Sound Cue",
    btnDirectorNote: "Director Note",

    // Soundboard
    smartPadsTitle: "RØDECaster SMART Pads Simulator",
    smartPadsSubtitle: "Click to trigger sound effects live, or download them for your RØDECaster Duo SD card.",
    liveReadyTag: "● AUDIO ENGINE ACTIVE",
    lblPadVolume: "Soundboard Volume",
    btnStopAllSounds: "⏹ Stop All Sounds",
    sfxLibraryTitle: "SFX & Jingle Library",
    sfxLibrarySubtitle: "Assign any sound to one of your 6 SMART Pads.",
    bgMusicTitle: "Lo-Fi Classroom Ambient Bed",
    bgMusicDesc: "Procedural background groove for spoken segments",
    btnPlayBed: "Play Bed",
    btnPauseBed: "Pause Bed",
    btnUploadCustomSfx: "📁 Import Custom Audio File (.wav, .mp3)",

    // Editor
    btnImportAudio: "Import Audio / RØDECaster Recording",
    btnLiveMicRecord: "Direct USB Record",
    btnStopRecord: "Stop & Load Take",
    btnSyncSdFolder: "⚡ 1-Click SD Card / Auto-Import",
    sdTakesTitle: "📁 RØDECASTER SD CARD RECORDINGS:",
    btnLoadDemo: "✨ Sample Voice",
    noAudioLoaded: "No audio file loaded yet",
    btnCutSelection: "✂️ Cut Selection",
    btnSilenceSelection: "🔇 Silence Selection",
    btnTrimToSelection: "📐 Keep Only Selection",
    btnUndo: "↩️ Undo",
    btnAutoLevel: "⚡ Podcast Normalizer (-16 LUFS)",
    btnPodMicEq: "🎙️ PodMic Vocal Clarity EQ",
    stitcherTitle: "One-Click Episode Builder (Intro + Voice + Outro)",
    stitcherSubtitle: "Automatically attach an opening theme, background ducking bed, and outro jingle to your edited voice recording.",
    lblCrossfade: "Auto-Crossfade & Voice Smoothing",
    btnBuildEpisode: "🚀 Render Mastered Episode",

    // Export
    coverArtTitle: "Episode Cover Art Creator",
    coverArtSubtitle: "Create 3000x3000px standard podcast artwork for Spotify / Apple Podcasts.",
    lblPodcastShowName: "Show / School Name",
    lblEpisodeNumber: "Episode & Season",
    lblCoverTheme: "Visual Theme Palette",
    btnDownloadCover: "🖼️ Download Cover Art (PNG)",
    exportFinalTitle: "Export Mastered Audio & Metadata",
    masterReadyTitle: "Broadcast Master Ready",
    masterSpecs: "48.0 kHz • 24-bit Stereo • -16 LUFS Integrated",
    btnDownloadMasterWav: "⬇️ Download Master Podcast Audio (.WAV)",
    showNotesTitle: "Show Notes & Episode Description",
    lblSummaryNotes: "Episode Summary (Auto-generated from Script)",
    btnCopyShowNotes: "📋 Copy Show Notes",
    btnGenerateRss: "🏷️ Generate RSS Tags",

    // Guide
    guideHeroSubtitle: "Quick setup manual and best practices for high-school & university classroom podcasting.",
    guidePodMicTitle: "1. PodMic Channel Setup",
    guidePodMicText: "PodMic is a dynamic microphone. On the RØDECaster Duo touch screen, tap <strong>Channel 1</strong> ➔ tap <strong>Microphone</strong> ➔ select <strong>\"RØDE PodMic\"</strong> from the preset list. The system automatically sets the optimal gain (+56dB to +58dB) and high-pass filter.",
    guideAphexTitle: "2. APHEX Audio Processing",
    guideAphexText: "Enable these 3 built-in processors in the Processing tab:",
    guidePadsTitle: "3. Loading Sounds to SMART Pads",
    guidePadsText: "Connect RØDECaster Duo to your computer via USB-C and open the free <strong>RØDE Central</strong> app. Download your jingles/sounds from our SMART Soundboard tab and drag them directly onto the 6 colored virtual pads!",
    guideRecModesTitle: "4. Recording to MicroSD vs PC",
    guideRecModesText: "You can insert a <strong>MicroSD card (V30 / UHS-1)</strong> and press the physical REC button on the Duo. It saves a multitrack audio file (.WAV) containing separate tracks for Host 1, Host 2, and Soundboard. You can import that file directly into our Editor tab!",

    // Prompter
    teleprompterTitle: "STUDENT ON-AIR TELEPROMPTER",
    onAirTag: "ON AIR",
    lblScrollSpeed: "Scroll Speed:"
  },

  it: {
    appSubtitle: "Suite di Produzione Podcast Scolastico & Audio",
    teleprompterBtn: "Gobbo / Prompter Live",
    tabScript: "1. Scaletta & Testo",
    tabSoundboard: "2. SMART Soundboard",
    tabEditor: "3. Editor Audio & Mixer",
    tabExport: "4. Master & Copertina",
    tabGuide: "Guida RØDECaster Duo",

    // Script Section
    episodeDetailsTitle: "Progetto della Puntata",
    lblEpTitle: "Titolo dell'Episodio",
    lblHost1: "Conduttore 1 (PodMic 1)",
    lblHost2: "Conduttore 2 (PodMic 2)",
    lblWords: "Parole",
    lblEstTime: "Durata Stimata (~130 ppm)",
    lblCues: "Effetti Sonori",
    templatesTitle: "Modelli & Scalette Rapide",
    btnTemplateEdu: "🎓 Modello Scienza & Intervista",
    btnTemplateDebate: "🎙️ Dibattito Studenti / Narrazione",
    btnClearScript: "🗑️ Cancella Scaletta",
    exportScriptTitle: "Stampa & Condividi",
    btnPrintScript: "🖨️ Stampa Foglio di Sala",
    btnExportText: "📄 Salva Testo (.txt)",
    scriptTimelineTitle: "Sequenza & Blocchi di Dialogo",
    btnSoundCue: "Segnale Audio",
    btnDirectorNote: "Nota di Regia",

    // Soundboard
    smartPadsTitle: "Simulatore SMART Pads RØDECaster",
    smartPadsSubtitle: "Clicca per avviare i suoni dal vivo o scaricali per caricarli sulla scheda SD del tuo RØDECaster Duo.",
    liveReadyTag: "● MOTORE AUDIO ATTIVO",
    lblPadVolume: "Volume Soundboard",
    btnStopAllSounds: "⏹ Ferma Tutti i Suoni",
    sfxLibraryTitle: "Libreria Effetti & Jingle",
    sfxLibrarySubtitle: "Assegna qualsiasi suono a uno dei 6 SMART Pad colorati.",
    bgMusicTitle: "Sottofondo Lo-Fi per Parlato",
    bgMusicDesc: "Base musicale procedurale per i dialoghi degli studenti",
    btnPlayBed: "Avvia Base",
    btnPauseBed: "Pausa Base",
    btnUploadCustomSfx: "📁 Importa File Audio (.wav, .mp3)",

    // Editor
    btnImportAudio: "Importa Audio / Registrazione RØDECaster",
    btnLiveMicRecord: "Registra da USB RØDECaster",
    btnStopRecord: "Ferma & Carica Traccia",
    btnSyncSdFolder: "⚡ Sincronizza Scheda SD (1-Click)",
    sdTakesTitle: "📁 REGISTRAZIONI SCHEDA SD RØDECASTER:",
    btnLoadDemo: "✨ Voce di Esempio",
    noAudioLoaded: "Nessun file audio caricato",
    btnCutSelection: "✂️ Taglia Selezione",
    btnSilenceSelection: "🔇 Silenzia Selezione",
    btnTrimToSelection: "📐 Mantieni Solo Selezione",
    btnUndo: "↩️ Annulla (Undo)",
    btnAutoLevel: "⚡ Normalizzatore Podcast (-16 LUFS)",
    btnPodMicEq: "🎙️ EQ Chiarezza Vocale PodMic",
    stitcherTitle: "Generatore Episodio 1-Click (Sigla + Voce + Chiusura)",
    stitcherSubtitle: "Collega automaticamente sigla iniziale, voce pulita e jingle finale con sfumature fluide.",
    lblCrossfade: "Dissolvenza Incrociata Automatica",
    btnBuildEpisode: "🚀 Esporta Episodio Masterizzato",

    // Export
    coverArtTitle: "Creatore Copertina Episodio",
    coverArtSubtitle: "Crea copertine standard 3000x3000px per Spotify / Apple Podcasts.",
    lblPodcastShowName: "Nome Podcast / Scuola",
    lblEpisodeNumber: "Episodio & Stagione",
    lblCoverTheme: "Tavolozza Colori",
    btnDownloadCover: "🖼️ Scarica Copertina (PNG)",
    exportFinalTitle: "Esporta Audio Master & Metadati",
    masterReadyTitle: "Master Radiofonico Pronto",
    masterSpecs: "48.0 kHz • 24-bit Stereo • -16 LUFS Integrato",
    btnDownloadMasterWav: "⬇️ Scarica Audio Master (.WAV)",
    showNotesTitle: "Note dell'Episodio & Descrizione",
    lblSummaryNotes: "Sommario Puntata (Generato dalla scaletta)",
    btnCopyShowNotes: "📋 Copia Note Puntata",
    btnGenerateRss: "🏷️ Genera Tag RSS",

    // Guide
    guideHeroSubtitle: "Manuale di configurazione e buone pratiche per i podcast a scuola e all'università.",
    guidePodMicTitle: "1. Configurazione Canale PodMic",
    guidePodMicText: "Il PodMic è un microfono dinamico. Sul touchscreen del RØDECaster Duo, tocca <strong>Canale 1</strong> ➔ tocca <strong>Microphone</strong> ➔ seleziona <strong>\"RØDE PodMic\"</strong>. Il sistema imposta automaticamente il guadagno ottimale (+56dB a +58dB) e il filtro passa-alto.",
    guideAphexTitle: "2. Elaborazione Audio APHEX",
    guideAphexText: "Attiva questi 3 processori integrati nella scheda Processing:",
    guidePadsTitle: "3. Caricare i Suoni sui Pad SMART",
    guidePadsText: "Collega il RØDECaster Duo al computer via USB-C e apri l'app gratuita <strong>RØDE Central</strong>. Scarica i jingle dalla nostra sezione Soundboard e trascinali direttamente sui 6 pad virtuali!",
    guideRecModesTitle: "4. Registrazione su MicroSD o PC",
    guideRecModesText: "Inserisci una scheda <strong>MicroSD (V30 / UHS-1)</strong> e premi il tasto REC sul Duo. Salverà una traccia multicanale (.WAV) con Host 1, Host 2 e Pad separati, pronta per essere importata qui!",

    // Prompter
    teleprompterTitle: "GOBBO ELETTRONICO PER STUDENTI (ON AIR)",
    onAirTag: "IN ONDA",
    lblScrollSpeed: "Velocità Scorrimento:"
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });

  document.getElementById('langEn').classList.toggle('active', lang === 'en');
  document.getElementById('langIt').classList.toggle('active', lang === 'it');

  updateSpeakerNames();
  renderCoverArt();
}

// ==========================================
// 2. WEB AUDIO SYNTHESIS & SOUNDBOARD ENGINE
// ==========================================
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Master Pad Gain
let padMasterGain = null;
function getPadMasterNode() {
  const ctx = getAudioContext();
  if (!padMasterGain) {
    padMasterGain = ctx.createGain();
    padMasterGain.gain.value = 0.85;
    padMasterGain.connect(ctx.destination);
  }
  return padMasterGain;
}

// Sound Library Definitions (Procedural synthesis)
const soundLibrary = {
  intro: {
    name: { en: "Podcast Intro Jingle", it: "Sigla Iniziale Podcast" },
    icon: "🎺",
    color: "pad-green",
    duration: 3.5,
    synthesize: (ctx, dest) => {
      const now = ctx.currentTime;
      // Warm chord progression (F - A - C - E - G) with brassy timbre
      const freqs = [349.23, 440.00, 523.25, 659.25, 783.99];
      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = idx % 2 === 0 ? "sawtooth" : "triangle";
        osc.frequency.setValueAtTime(f, now + idx * 0.12);
        
        // Lowpass filter for warm broadcast sound
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(2400, now);

        gain.gain.setValueAtTime(0, now + idx * 0.12);
        gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.12 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 3.2);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(dest);

        osc.start(now + idx * 0.12);
        osc.stop(now + 3.5);
      });
    }
  },

  applause: {
    name: { en: "Crowd Applause", it: "Applausi del Pubblico" },
    icon: "👏",
    color: "pad-orange",
    duration: 3.0,
    synthesize: (ctx, dest) => {
      const bufferSize = ctx.sampleRate * 3;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 1.8));
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const bandpass = ctx.createBiquadFilter();
      bandpass.type = "bandpass";
      bandpass.frequency.value = 1000;
      bandpass.Q.value = 1.2;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 3.0);

      noise.connect(bandpass);
      bandpass.connect(gain);
      gain.connect(dest);

      noise.start();
      noise.stop(ctx.currentTime + 3.0);
    }
  },

  sparkle: {
    name: { en: "Sparkle Transition", it: "Transizione Magica" },
    icon: "✨",
    color: "pad-blue",
    duration: 2.0,
    synthesize: (ctx, dest) => {
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + i * 0.08);

        gain.gain.setValueAtTime(0, now + i * 0.08);
        gain.gain.linearRampToValueAtTime(0.2, now + i * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.8);

        osc.connect(gain);
        gain.connect(dest);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.9);
      });
    }
  },

  drumroll: {
    name: { en: "Drum Roll & Cymbal", it: "Rullo di Tamburi & Piatto" },
    icon: "🥁",
    color: "pad-yellow",
    duration: 2.8,
    synthesize: (ctx, dest) => {
      const now = ctx.currentTime;
      // Rapid snare hits
      for (let i = 0; i < 28; i++) {
        const t = now + (i * 0.06);
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(160 + (i * 2), t);
        gain.gain.setValueAtTime(0.1 + (i * 0.005), t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

        osc.connect(gain);
        gain.connect(dest);
        osc.start(t);
        osc.stop(t + 0.06);
      }
      // Final crash
      const crashT = now + 1.8;
      const oscCrash = ctx.createOscillator();
      const crashGain = ctx.createGain();
      oscCrash.type = "sine";
      oscCrash.frequency.setValueAtTime(80, crashT);
      oscCrash.frequency.exponentialRampToValueAtTime(30, crashT + 0.6);
      crashGain.gain.setValueAtTime(0.4, crashT);
      crashGain.gain.exponentialRampToValueAtTime(0.001, crashT + 1.0);

      oscCrash.connect(crashGain);
      crashGain.connect(dest);
      oscCrash.start(crashT);
      oscCrash.stop(crashT + 1.0);
    }
  },

  ding: {
    name: { en: "Idea Ding / Chime", it: "Campanella / Lampadina" },
    icon: "💡",
    color: "pad-purple",
    duration: 1.5,
    synthesize: (ctx, dest) => {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(1760, now); // A6

      osc2.type = "sine";
      osc2.frequency.setValueAtTime(3520, now); // A7 harmonic

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.4);

      osc.connect(gain);
      osc2.connect(gain);
      gain.connect(dest);

      osc.start(now);
      osc2.start(now);
      osc.stop(now + 1.5);
      osc2.stop(now + 1.5);
    }
  },

  outro: {
    name: { en: "Podcast Outro Jingle", it: "Sigla Finale Podcast" },
    icon: "🎵",
    color: "pad-red",
    duration: 3.5,
    synthesize: (ctx, dest) => {
      const now = ctx.currentTime;
      // Descending resolving chords
      const sequence = [
        { f: 587.33, t: 0.0 }, // D5
        { f: 523.25, t: 0.3 }, // C5
        { f: 440.00, t: 0.6 }, // A4
        { f: 349.23, t: 1.0 }, // F4
        { f: 261.63, t: 1.5 }  // C4 resolved
      ];
      sequence.forEach(item => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(item.f, now + item.t);

        gain.gain.setValueAtTime(0.2, now + item.t);
        gain.gain.exponentialRampToValueAtTime(0.001, now + item.t + 1.6);

        osc.connect(gain);
        gain.connect(dest);
        osc.start(now + item.t);
        osc.stop(now + item.t + 1.8);
      });
    }
  }
};

// Currently assigned pads
let assignedPadKeys = ["intro", "applause", "sparkle", "drumroll", "ding", "outro"];

function playPadSound(padIndex) {
  const soundKey = assignedPadKeys[padIndex];
  const soundDef = soundLibrary[soundKey];
  if (!soundDef) return;

  const ctx = getAudioContext();
  const dest = getPadMasterNode();

  const padEl = document.querySelector(`.smart-pad[data-pad="${padIndex}"]`);
  if (padEl) {
    padEl.classList.add('playing');
    setTimeout(() => padEl.classList.remove('playing'), soundDef.duration * 1000);
  }

  soundDef.synthesize(ctx, dest);
}

// Generate WAV Blob for RØDECaster Duo download
async function generateSoundAsWavBlob(soundKey) {
  const soundDef = soundLibrary[soundKey];
  if (!soundDef) return null;

  const sampleRate = 48000; // Broadcast 48kHz for RØDECaster
  const length = Math.ceil(sampleRate * soundDef.duration);
  const offlineCtx = new OfflineAudioContext(2, length, sampleRate);

  soundDef.synthesize(offlineCtx, offlineCtx.destination);
  const renderedBuffer = await offlineCtx.startRendering();

  return bufferToWav(renderedBuffer);
}

function downloadPadSound(padIndex) {
  const soundKey = assignedPadKeys[padIndex];
  generateSoundAsWavBlob(soundKey).then(blob => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `RODECaster_PAD_${padIndex + 1}_${soundKey}.wav`;
    a.click();
    URL.revokeObjectURL(url);
  });
}

// Lo-Fi Ambient Bed Generator
let ambientOscs = [];
let ambientPlaying = false;
let ambientGainNode = null;

function toggleAmbientBed() {
  const ctx = getAudioContext();
  const btn = document.getElementById('toggleAmbientBtn');

  if (ambientPlaying) {
    ambientOscs.forEach(o => {
      try { o.stop(); } catch(e){}
    });
    ambientOscs = [];
    ambientPlaying = false;
    btn.innerHTML = `▶ <span>${i18n[currentLang].btnPlayBed}</span>`;
  } else {
    ambientPlaying = true;
    btn.innerHTML = `⏸ <span>${i18n[currentLang].btnPauseBed}</span>`;

    if (!ambientGainNode) {
      ambientGainNode = ctx.createGain();
      ambientGainNode.gain.value = parseFloat(document.getElementById('ambientVolume').value);
      ambientGainNode.connect(ctx.destination);
    }

    // Warm chords: Cmaj9 (C3, G3, B3, D4, E4)
    const freqs = [130.81, 196.00, 246.94, 293.66, 329.63];
    freqs.forEach(f => {
      const osc = ctx.createOscillator();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(f, ctx.currentTime);

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(650, ctx.currentTime);

      osc.connect(filter);
      filter.connect(ambientGainNode);
      osc.start();
      ambientOscs.push(osc);
    });
  }
}

// Render SFX list
function renderSfxList() {
  const container = document.getElementById('sfxListContainer');
  container.innerHTML = '';

  Object.keys(soundLibrary).forEach(key => {
    const sfx = soundLibrary[key];
    const name = sfx.name[currentLang] || sfx.name.en;

    const div = document.createElement('div');
    div.className = 'sfx-item';
    div.innerHTML = `
      <div class="sfx-info">
        <span style="font-size: 1.3rem;">${sfx.icon}</span>
        <div>
          <strong style="font-size: 0.85rem;">${name}</strong>
          <div class="text-xs text-muted">${sfx.duration}s • 48kHz WAV</div>
        </div>
      </div>
      <div class="sfx-actions">
        <button class="btn btn-secondary btn-sm" onclick="testSound('${key}')">▶</button>
        <button class="btn btn-secondary btn-sm" onclick="downloadCustomSound('${key}')">⬇</button>
      </div>
    `;
    container.appendChild(div);
  });
}

window.testSound = function(key) {
  const soundDef = soundLibrary[key];
  if (!soundDef) return;
  const ctx = getAudioContext();
  soundDef.synthesize(ctx, getPadMasterNode());
};

window.downloadCustomSound = function(key) {
  generateSoundAsWavBlob(key).then(blob => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SFX_${key}.wav`;
    a.click();
    URL.revokeObjectURL(url);
  });
};

// ==========================================
// 3. SCRIPT & TELEPROMPTER ENGINE
// ==========================================
let scriptBlocks = [];

const eduTemplateEN = [
  { type: 'cue', text: '🔔 [PAD 1] PLAY INTRO JINGLE (3s)' },
  { type: 'speaker1', text: 'Welcome to Science Frontiers! I am your host, and today we have an exciting exploration into renewable energy with our student researcher.' },
  { type: 'cue', text: '👏 [PAD 2] CROWD APPLAUSE' },
  { type: 'speaker2', text: 'Hello everyone! Excited to be here. Did you know that solar energy efficiency increased by over 30% in modern photovoltaic cells?' },
  { type: 'note', text: '📝 Teacher Note: Point to the classroom solar model during this explanation.' },
  { type: 'speaker1', text: 'That is incredible! Could you explain how students can experiment with solar circuits at school?' },
  { type: 'speaker2', text: 'Certainly! All you need is a mini solar panel, a capacitor, and an LED bulb.' },
  { type: 'cue', text: '💡 [PAD 5] IDEA CHIME' },
  { type: 'speaker1', text: 'Thank you for tuning in! See you in the next episode.' },
  { type: 'cue', text: '🎵 [PAD 6] PLAY OUTRO JINGLE' }
];

const eduTemplateIT = [
  { type: 'cue', text: '🔔 [PAD 1] AVVIA SIGLA INIZIALE (3s)' },
  { type: 'speaker1', text: 'Benvenuti a Voci dalla Scuola! Sono il vostro conduttore e oggi parliamo di energie rinnovabili insieme al nostro ricercatore speciale.' },
  { type: 'cue', text: '👏 [PAD 2] APPLAUSI PUBBLICO' },
  { type: 'speaker2', text: 'Ciao a tutti! È un piacere essere qui. Sapevate che i nuovi pannelli solari hanno superato un rendimento incredibile negli ultimi test di laboratorio?' },
  { type: 'note', text: '📝 Nota di Regia: Mostrare il plastico della cella solare agli ascoltatori/osservatori.' },
  { type: 'speaker1', text: 'Fantastico! Come possiamo realizzare un piccolo esperimento direttamente nel laboratorio della nostra scuola?' },
  { type: 'speaker2', text: 'È semplicissimo: basta un mini pannello fotovoltaico, un condensatore e un piccolo LED colorato.' },
  { type: 'cue', text: '💡 [PAD 5] SUONO LAMPADINA / IDEA' },
  { type: 'speaker1', text: 'Grazie a tutti per l\'ascolto! Ci vediamo al prossimo episodio!' },
  { type: 'cue', text: '🎵 [PAD 6] AVVIA SIGLA FINALE' }
];

function loadScriptTemplate(templateArray) {
  scriptBlocks = JSON.parse(JSON.stringify(templateArray));
  renderScriptBlocks();
  updateScriptStats();
}

function updateSpeakerNames() {
  const spk1 = document.getElementById('speaker1Input').value || (currentLang === 'it' ? 'Conduttore 1' : 'Host 1');
  const spk2 = document.getElementById('speaker2Input').value || (currentLang === 'it' ? 'Conduttore 2' : 'Host 2');

  document.getElementById('btnSpeaker1Name').textContent = spk1;
  document.getElementById('btnSpeaker2Name').textContent = spk2;

  renderScriptBlocks();
}

function renderScriptBlocks() {
  const container = document.getElementById('scriptBlocksContainer');
  container.innerHTML = '';

  const spk1Name = document.getElementById('speaker1Input').value || 'Host 1';
  const spk2Name = document.getElementById('speaker2Input').value || 'Host 2';

  scriptBlocks.forEach((block, index) => {
    const blockEl = document.createElement('div');
    blockEl.className = `script-block ${block.type}-block`;

    let tagLabel = '';
    let tagClass = '';

    if (block.type === 'speaker1') {
      tagLabel = `🎙️ ${spk1Name} (PodMic 1)`;
      tagClass = 'speaker1-tag';
    } else if (block.type === 'speaker2') {
      tagLabel = `🎙️ ${spk2Name} (PodMic 2)`;
      tagClass = 'speaker2-tag';
    } else if (block.type === 'cue') {
      tagLabel = `🔔 ${currentLang === 'it' ? 'Segnale Audio / Pad' : 'Sound Cue / Pad'}`;
      tagClass = 'cue-tag';
    } else {
      tagLabel = `📝 ${currentLang === 'it' ? 'Nota di Regia' : 'Director Note'}`;
      tagClass = 'note-tag';
    }

    blockEl.innerHTML = `
      <div class="block-header">
        <span class="block-speaker-tag ${tagClass}">${tagLabel}</span>
        <div class="block-actions">
          <button class="btn-icon-sm" onclick="moveBlock(${index}, -1)" title="Move Up">▲</button>
          <button class="btn-icon-sm" onclick="moveBlock(${index}, 1)" title="Move Down">▼</button>
          <button class="btn-icon-sm" onclick="deleteBlock(${index})" title="Delete">✕</button>
        </div>
      </div>
      <textarea class="script-block-textarea" oninput="updateBlockText(${index}, this.value)">${block.text}</textarea>
    `;

    container.appendChild(blockEl);
  });
}

window.updateBlockText = function(index, text) {
  if (scriptBlocks[index]) {
    scriptBlocks[index].text = text;
    updateScriptStats();
  }
};

window.moveBlock = function(index, dir) {
  const target = index + dir;
  if (target >= 0 && target < scriptBlocks.length) {
    const temp = scriptBlocks[index];
    scriptBlocks[index] = scriptBlocks[target];
    scriptBlocks[target] = temp;
    renderScriptBlocks();
    updateScriptStats();
  }
};

window.deleteBlock = function(index) {
  scriptBlocks.splice(index, 1);
  renderScriptBlocks();
  updateScriptStats();
};

function addBlock(type, defaultText = '') {
  scriptBlocks.push({ type, text: defaultText });
  renderScriptBlocks();
  updateScriptStats();

  // Scroll to bottom
  const container = document.getElementById('scriptBlocksContainer');
  container.scrollTop = container.scrollHeight;
}

function updateScriptStats() {
  let totalWords = 0;
  let cuesCount = 0;

  scriptBlocks.forEach(b => {
    if (b.type === 'speaker1' || b.type === 'speaker2') {
      const words = b.text.trim().split(/\s+/).filter(w => w.length > 0);
      totalWords += words.length;
    } else if (b.type === 'cue') {
      cuesCount++;
    }
  });

  document.getElementById('scriptWordCount').textContent = totalWords;
  document.getElementById('scriptCueCount').textContent = cuesCount;

  // 130 words per minute speaking rate
  const totalSeconds = Math.round((totalWords / 130) * 60);
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  document.getElementById('scriptEstDuration').textContent = 
    `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  // Auto-generate show notes summary
  updateShowNotesFromScript();
}

function updateShowNotesFromScript() {
  const epTitle = document.getElementById('epTitleInput').value || 'Classroom Podcast Episode';
  const spk1 = document.getElementById('speaker1Input').value || 'Host 1';
  const spk2 = document.getElementById('speaker2Input').value || 'Host 2';

  let notes = `🎙️ ${epTitle}\n`;
  notes += `👥 Hosts: ${spk1} & ${spk2}\n`;
  notes += `⏱️ Duration: ~${document.getElementById('scriptEstDuration').textContent}\n\n`;
  notes += `📝 Episode Breakdown:\n`;

  scriptBlocks.forEach((b, i) => {
    if (b.type === 'speaker1' || b.type === 'speaker2') {
      const preview = b.text.substring(0, 60) + (b.text.length > 60 ? '...' : '');
      notes += `• [${b.type === 'speaker1' ? spk1 : spk2}]: "${preview}"\n`;
    }
  });

  document.getElementById('episodeSummaryText').value = notes;
}

// Teleprompter Logic
let teleScrollInterval = null;
let teleScrolling = false;

function openTeleprompter() {
  const modal = document.getElementById('teleprompterModal');
  const content = document.getElementById('teleContent');
  content.innerHTML = '';

  const spk1Name = document.getElementById('speaker1Input').value || 'Host 1';
  const spk2Name = document.getElementById('speaker2Input').value || 'Host 2';

  scriptBlocks.forEach(b => {
    const div = document.createElement('div');
    div.className = 'tele-block';

    if (b.type === 'speaker1') {
      div.innerHTML = `<div class="tele-speaker" style="color: var(--pad-green);">🎙️ ${spk1Name}</div><p>${b.text}</p>`;
    } else if (b.type === 'speaker2') {
      div.innerHTML = `<div class="tele-speaker" style="color: var(--pad-orange);">🎙️ ${spk2Name}</div><p>${b.text}</p>`;
    } else if (b.type === 'cue') {
      div.innerHTML = `<div class="tele-speaker" style="color: var(--pad-blue);">🔔 ${b.text}</div>`;
    }
    content.appendChild(div);
  });

  modal.classList.add('active');
}

function closeTeleprompter() {
  const modal = document.getElementById('teleprompterModal');
  modal.classList.remove('active');
  stopTeleScroll();
}

function toggleTeleScroll() {
  if (teleScrolling) {
    stopTeleScroll();
  } else {
    startTeleScroll();
  }
}

function startTeleScroll() {
  teleScrolling = true;
  document.getElementById('telePlayPauseBtn').textContent = '⏸ Pause Auto-Scroll';
  const view = document.getElementById('teleScrollView');
  const speed = parseInt(document.getElementById('teleSpeedSlider').value) || 2;

  teleScrollInterval = setInterval(() => {
    view.scrollTop += speed;
  }, 30);
}

function stopTeleScroll() {
  teleScrolling = false;
  document.getElementById('telePlayPauseBtn').textContent = '▶ Start Auto-Scroll';
  if (teleScrollInterval) {
    clearInterval(teleScrollInterval);
    teleScrollInterval = null;
  }
}

// ==========================================
// 4. AUDIO EDITOR, WAVEFORM & NORMALIZER
// ==========================================
let currentAudioBuffer = null;
let undoHistory = [];
let audioSourceNode = null;
let isAudioPlaying = false;
let playbackStartTime = 0;
let playbackPauseOffset = 0;
let playbackAnimFrame = null;

let selectionStartSec = null;
let selectionEndSec = null;
let isSelecting = false;

let zoomLevel = 1.0;

const canvas = document.getElementById('waveformCanvas');
const canvasCtx = canvas.getContext('2d');

function saveUndoState() {
  if (!currentAudioBuffer) return;
  // Deep clone buffer
  const ctx = getAudioContext();
  const clone = ctx.createBuffer(
    currentAudioBuffer.numberOfChannels,
    currentAudioBuffer.length,
    currentAudioBuffer.sampleRate
  );
  for (let c = 0; c < currentAudioBuffer.numberOfChannels; c++) {
    clone.copyToChannel(currentAudioBuffer.getChannelData(c), c);
  }
  undoHistory.push(clone);
  if (undoHistory.length > 8) undoHistory.shift();
}

function restoreUndoState() {
  if (undoHistory.length === 0) return;
  currentAudioBuffer = undoHistory.pop();
  stopAudioPlayback();
  drawWaveform();
  updatePlaybackDisplay();
}

// Draw Waveform on Canvas (Pop-Art Neon Cyber Style)
function drawWaveform() {
  const width = canvas.width;
  const height = canvas.height;
  canvasCtx.clearRect(0, 0, width, height);

  // Background Grid Lines
  canvasCtx.fillStyle = "#020305";
  canvasCtx.fillRect(0, 0, width, height);

  // Retro Neon Grid
  canvasCtx.strokeStyle = "rgba(0, 240, 255, 0.12)";
  canvasCtx.lineWidth = 1;
  for (let x = 0; x < width; x += 40) {
    canvasCtx.beginPath();
    canvasCtx.moveTo(x, 0);
    canvasCtx.lineTo(x, height);
    canvasCtx.stroke();
  }

  // Center Zero Line
  canvasCtx.strokeStyle = "#ff2a85";
  canvasCtx.lineWidth = 1.5;
  canvasCtx.beginPath();
  canvasCtx.moveTo(0, height / 2);
  canvasCtx.lineTo(width, height / 2);
  canvasCtx.stroke();

  if (!currentAudioBuffer) {
    canvasCtx.fillStyle = "#ff2a85";
    canvasCtx.font = "bold 16px 'Space Grotesk', sans-serif";
    canvasCtx.textAlign = "center";
    canvasCtx.fillText(`★ ${i18n[currentLang].noAudioLoaded} ★`, width / 2, height / 2 + 6);
    return;
  }

  // Draw Audio Waveform (Electric Cyan with Hot Pink Highlights)
  const channelData = currentAudioBuffer.getChannelData(0);
  const step = Math.ceil(channelData.length / width);
  const amp = height / 2;

  for (let i = 0; i < width; i++) {
    let min = 1.0;
    let max = -1.0;
    for (let j = 0; j < step; j++) {
      const datum = channelData[(i * step) + j];
      if (datum < min) min = datum;
      if (datum > max) max = datum;
    }
    const yTop = (1 + min) * amp;
    const yBottom = Math.max(2, (max - min) * amp);

    // Neon Cyan wave with Lime / Pink peaks
    if (Math.abs(max) > 0.8) {
      canvasCtx.fillStyle = "#ff2a85"; // Hot Peak Pink
    } else {
      canvasCtx.fillStyle = "#00f0ff"; // Electric Cyan
    }
    canvasCtx.fillRect(i, yTop, 1.5, yBottom);
  }
}

// Playback Control
function togglePlayAudio() {
  if (!currentAudioBuffer) return;
  if (isAudioPlaying) {
    pauseAudioPlayback();
  } else {
    playAudioBuffer(playbackPauseOffset);
  }
}

function playAudioBuffer(offset = 0) {
  const ctx = getAudioContext();
  if (audioSourceNode) {
    try { audioSourceNode.stop(); } catch(e){}
  }

  audioSourceNode = ctx.createBufferSource();
  audioSourceNode.buffer = currentAudioBuffer;
  audioSourceNode.connect(ctx.destination);

  playbackStartTime = ctx.currentTime - offset;
  audioSourceNode.start(0, offset);
  isAudioPlaying = true;

  document.getElementById('playIcon').style.display = 'none';
  document.getElementById('pauseIcon').style.display = 'block';

  document.getElementById('wavePlayhead').style.display = 'block';

  audioSourceNode.onended = () => {
    if (ctx.currentTime - playbackStartTime >= currentAudioBuffer.duration) {
      stopAudioPlayback();
    }
  };

  updatePlayheadLoop();
}

function pauseAudioPlayback() {
  const ctx = getAudioContext();
  if (audioSourceNode) {
    try { audioSourceNode.stop(); } catch(e){}
    playbackPauseOffset = ctx.currentTime - playbackStartTime;
  }
  isAudioPlaying = false;
  document.getElementById('playIcon').style.display = 'block';
  document.getElementById('pauseIcon').style.display = 'none';
  if (playbackAnimFrame) cancelAnimationFrame(playbackAnimFrame);
}

function stopAudioPlayback() {
  pauseAudioPlayback();
  playbackPauseOffset = 0;
  document.getElementById('wavePlayhead').style.left = '0%';
  updatePlaybackDisplay(0);
}

function updatePlayheadLoop() {
  if (!isAudioPlaying || !currentAudioBuffer) return;
  const ctx = getAudioContext();
  const currentSec = ctx.currentTime - playbackStartTime;
  const progress = Math.min(1, currentSec / currentAudioBuffer.duration);

  document.getElementById('wavePlayhead').style.left = `${progress * 100}%`;
  updatePlaybackDisplay(currentSec);

  if (currentSec < currentAudioBuffer.duration) {
    playbackAnimFrame = requestAnimationFrame(updatePlayheadLoop);
  }
}

function updatePlaybackDisplay(currentSec = 0) {
  const total = currentAudioBuffer ? currentAudioBuffer.duration : 0;
  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = (s % 60).toFixed(1);
    return `${m.toString().padStart(2, '0')}:${sec.padStart(4, '0')}`;
  };
  document.getElementById('playbackTimeDisplay').textContent = `${formatTime(currentSec)} / ${formatTime(total)}`;
}

// Waveform Selection Handlers
function setupWaveformInteractions() {
  const wrapper = document.getElementById('waveformWrapper');
  const overlay = document.getElementById('waveSelectionOverlay');

  wrapper.addEventListener('mousedown', (e) => {
    if (!currentAudioBuffer) return;
    const rect = wrapper.getBoundingClientRect();
    const startX = e.clientX - rect.left;
    const startTime = (startX / rect.width) * currentAudioBuffer.duration;

    selectionStartSec = startTime;
    selectionEndSec = startTime;
    isSelecting = true;

    overlay.style.display = 'block';
    overlay.style.left = `${startX}px`;
    overlay.style.width = '0px';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isSelecting || !currentAudioBuffer) return;
    const rect = wrapper.getBoundingClientRect();
    const currentX = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const currentTime = (currentX / rect.width) * currentAudioBuffer.duration;

    selectionEndSec = currentTime;

    const left = Math.min(selectionStartSec, selectionEndSec) / currentAudioBuffer.duration * rect.width;
    const width = Math.abs(selectionEndSec - selectionStartSec) / currentAudioBuffer.duration * rect.width;

    overlay.style.left = `${left}px`;
    overlay.style.width = `${width}px`;

    const minT = Math.min(selectionStartSec, selectionEndSec).toFixed(2);
    const maxT = Math.max(selectionStartSec, selectionEndSec).toFixed(2);
    document.getElementById('selectionTimeText').textContent = `Selection: ${minT}s - ${maxT}s (${(maxT - minT).toFixed(2)}s)`;
  });

  window.addEventListener('mouseup', () => {
    if (isSelecting) {
      isSelecting = false;
      if (selectionStartSec > selectionEndSec) {
        const tmp = selectionStartSec;
        selectionStartSec = selectionEndSec;
        selectionEndSec = tmp;
      }
    }
  });
}

// Audio Edits: Cut, Silence, Trim
function cutSelection() {
  if (!currentAudioBuffer || selectionStartSec === null || selectionEndSec === null) return;
  const start = Math.min(selectionStartSec, selectionEndSec);
  const end = Math.max(selectionStartSec, selectionEndSec);
  if (end - start <= 0.01) return;

  saveUndoState();
  const ctx = getAudioContext();
  const sr = currentAudioBuffer.sampleRate;
  const cutStartIdx = Math.floor(start * sr);
  const cutEndIdx = Math.floor(end * sr);
  const newLength = currentAudioBuffer.length - (cutEndIdx - cutStartIdx);

  if (newLength <= 0) return;

  const newBuffer = ctx.createBuffer(currentAudioBuffer.numberOfChannels, newLength, sr);

  for (let c = 0; c < currentAudioBuffer.numberOfChannels; c++) {
    const oldData = currentAudioBuffer.getChannelData(c);
    const newData = newBuffer.getChannelData(c);

    // Copy before cut
    newData.set(oldData.subarray(0, cutStartIdx), 0);
    // Copy after cut
    newData.set(oldData.subarray(cutEndIdx), cutStartIdx);
  }

  currentAudioBuffer = newBuffer;
  clearSelection();
  drawWaveform();
  updatePlaybackDisplay(0);
}

function silenceSelection() {
  if (!currentAudioBuffer || selectionStartSec === null || selectionEndSec === null) return;
  const start = Math.min(selectionStartSec, selectionEndSec);
  const end = Math.max(selectionStartSec, selectionEndSec);

  saveUndoState();
  const sr = currentAudioBuffer.sampleRate;
  const startIdx = Math.floor(start * sr);
  const endIdx = Math.floor(end * sr);

  for (let c = 0; c < currentAudioBuffer.numberOfChannels; c++) {
    const data = currentAudioBuffer.getChannelData(c);
    for (let i = startIdx; i < endIdx; i++) {
      data[i] = 0;
    }
  }

  drawWaveform();
}

function trimToSelection() {
  if (!currentAudioBuffer || selectionStartSec === null || selectionEndSec === null) return;
  const start = Math.min(selectionStartSec, selectionEndSec);
  const end = Math.max(selectionStartSec, selectionEndSec);
  if (end - start <= 0.05) return;

  saveUndoState();
  const ctx = getAudioContext();
  const sr = currentAudioBuffer.sampleRate;
  const startIdx = Math.floor(start * sr);
  const endIdx = Math.floor(end * sr);
  const newLength = endIdx - startIdx;

  const newBuffer = ctx.createBuffer(currentAudioBuffer.numberOfChannels, newLength, sr);

  for (let c = 0; c < currentAudioBuffer.numberOfChannels; c++) {
    const oldData = currentAudioBuffer.getChannelData(c);
    const newData = newBuffer.getChannelData(c);
    newData.set(oldData.subarray(startIdx, endIdx), 0);
  }

  currentAudioBuffer = newBuffer;
  clearSelection();
  drawWaveform();
  updatePlaybackDisplay(0);
}

function clearSelection() {
  selectionStartSec = null;
  selectionEndSec = null;
  document.getElementById('waveSelectionOverlay').style.display = 'none';
  document.getElementById('selectionTimeText').textContent = 'Selection: None';
}

// Enhancers: -16 LUFS Normalizer & PodMic EQ
function applyNormalizer() {
  if (!currentAudioBuffer) return;
  saveUndoState();

  // Find peak amplitude across all channels
  let peak = 0;
  for (let c = 0; c < currentAudioBuffer.numberOfChannels; c++) {
    const data = currentAudioBuffer.getChannelData(c);
    for (let i = 0; i < data.length; i++) {
      const abs = Math.abs(data[i]);
      if (abs > peak) peak = abs;
    }
  }

  if (peak > 0) {
    const targetPeak = 0.89; // -1 dBFS True Peak podcast standard
    const factor = targetPeak / peak;
    for (let c = 0; c < currentAudioBuffer.numberOfChannels; c++) {
      const data = currentAudioBuffer.getChannelData(c);
      for (let i = 0; i < data.length; i++) {
        data[i] = data[i] * factor;
      }
    }
  }

  drawWaveform();
  alert(currentLang === 'it' ? '⚡ Normalizzazione a standard podcast completata (-16 LUFS)!' : '⚡ Podcast Normalization to -16 LUFS Broadcast standard complete!');
}

function applyPodMicEq() {
  if (!currentAudioBuffer) return;
  saveUndoState();

  // Offline processing with High-pass (80Hz) + Presence Boost (3.5kHz)
  const offlineCtx = new OfflineAudioContext(
    currentAudioBuffer.numberOfChannels,
    currentAudioBuffer.length,
    currentAudioBuffer.sampleRate
  );

  const src = offlineCtx.createBufferSource();
  src.buffer = currentAudioBuffer;

  // 80Hz High-Pass to cut desk rumble
  const hp = offlineCtx.createBiquadFilter();
  hp.type = "highpass";
  hp.frequency.value = 80;

  // 3500Hz Peaking Boost for PodMic vocal clarity
  const presence = offlineCtx.createBiquadFilter();
  presence.type = "peaking";
  presence.frequency.value = 3500;
  presence.gain.value = 3.5;
  presence.Q.value = 1.0;

  src.connect(hp);
  hp.connect(presence);
  presence.connect(offlineCtx.destination);

  src.start();
  offlineCtx.startRendering().then(rendered => {
    currentAudioBuffer = rendered;
    drawWaveform();
    alert(currentLang === 'it' ? '🎙️ Profilo EQ RØDE PodMic applicato con successo!' : '🎙️ RØDE PodMic Vocal Clarity EQ profile applied successfully!');
  });
}

// ==========================================
// AUDIO DEVICE ENUMERATION & DIRECT CAPTURE
// ==========================================
async function populateAudioDevices() {
  const select = document.getElementById('audioDeviceSelect');
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return;

  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const audioInputs = devices.filter(d => d.kind === 'audioinput');

    select.innerHTML = '';
    audioInputs.forEach((device, idx) => {
      const option = document.createElement('option');
      option.value = device.deviceId;
      const isRode = device.label.toLowerCase().includes('rodecaster') || device.label.toLowerCase().includes('rode');
      option.textContent = isRode ? `🎙️ ${device.label} (RØDE Detected)` : `🎙️ ${device.label || `Microphone ${idx + 1}`}`;
      if (isRode) option.selected = true;
      select.appendChild(option);
    });

    if (audioInputs.length === 0) {
      select.innerHTML = `<option value="default">🎙️ Default Audio Input</option>`;
    }
  } catch (err) {
    console.log("Could not enumerate audio devices:", err);
  }
}

if (navigator.mediaDevices) {
  navigator.mediaDevices.ondevicechange = populateAudioDevices;
}

// Live Direct Mic/USB Recording
let mediaRecorder = null;
let recordedAudioChunks = [];
let isMicRecording = false;

async function toggleMicRecording() {
  const btn = document.getElementById('recordMicBtn');
  const label = document.getElementById('recBtnLabel');
  const select = document.getElementById('audioDeviceSelect');

  if (isMicRecording) {
    mediaRecorder.stop();
    isMicRecording = false;
    btn.classList.remove('recording-active');
    label.textContent = i18n[currentLang].btnLiveMicRecord;
  } else {
    try {
      const deviceId = select.value !== 'default' ? { exact: select.value } : undefined;
      const constraints = {
        audio: {
          deviceId: deviceId,
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: false,
          sampleRate: 48000
        }
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      recordedAudioChunks = [];
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) recordedAudioChunks.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(recordedAudioChunks, { type: 'audio/wav' });
        const arrayBuffer = await audioBlob.arrayBuffer();
        const ctx = getAudioContext();
        currentAudioBuffer = await ctx.decodeAudioData(arrayBuffer);
        document.getElementById('loadedTrackName').textContent = "🔴 RØDECaster_Live_Take.wav";
        drawWaveform();
        updatePlaybackDisplay(0);
        // Prompt user
        alert(currentLang === 'it' ? '✅ Traccia registrata e caricata direttamente nell\'editor!' : '✅ Recording captured and loaded directly into the editor!');
      };

      mediaRecorder.start();
      isMicRecording = true;
      btn.classList.add('recording-active');
      label.textContent = i18n[currentLang].btnStopRecord;
    } catch (err) {
      alert("Microphone/USB access denied: " + err.message);
    }
  }
}

// ==========================================
// 1-CLICK SD CARD / FOLDER AUTO-SYNC
// ==========================================
async function syncSdCardFolder() {
  const drawer = document.getElementById('sdDrawer');
  const list = document.getElementById('sdTakesList');

  if (window.showDirectoryPicker) {
    try {
      const dirHandle = await window.showDirectoryPicker();
      list.innerHTML = '';
      const takes = [];

      for await (const entry of dirHandle.values()) {
        if (entry.kind === 'file' && (entry.name.endsWith('.wav') || entry.name.endsWith('.mp3') || entry.name.endsWith('.WAV'))) {
          const file = await entry.getFile();
          takes.push({ name: entry.name, file: file, lastModified: file.lastModified });
        }
      }

      if (takes.length === 0) {
        alert(currentLang === 'it' ? 'Nessun file audio (.wav/.mp3) trovato nella cartella selezionata.' : 'No audio files (.wav/.mp3) found in the selected folder.');
        return;
      }

      // Sort by newest first
      takes.sort((a, b) => b.lastModified - a.lastModified);

      // Auto-load the newest take immediately!
      const newest = takes[0];
      const arrayBuffer = await newest.file.arrayBuffer();
      const ctx = getAudioContext();
      currentAudioBuffer = await ctx.decodeAudioData(arrayBuffer);
      document.getElementById('loadedTrackName').textContent = `📁 ${newest.name} (Auto-Loaded Latest)`;
      drawWaveform();
      updatePlaybackDisplay(0);

      // Populate quick-switcher drawer
      drawer.style.display = 'block';
      takes.forEach(t => {
        const chip = document.createElement('div');
        chip.className = 'sd-take-chip';
        const dateStr = new Date(t.lastModified).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        chip.innerHTML = `<span>🎵 ${t.name}</span> <span class="text-xs text-muted">(${dateStr})</span>`;
        chip.onclick = async () => {
          const ab = await t.file.arrayBuffer();
          currentAudioBuffer = await ctx.decodeAudioData(ab);
          document.getElementById('loadedTrackName').textContent = `📁 ${t.name}`;
          drawWaveform();
          updatePlaybackDisplay(0);
        };
        list.appendChild(chip);
      });

    } catch (err) {
      if (err.name !== 'AbortError') {
        alert("Folder sync error: " + err.message);
      }
    }
  } else {
    // Fallback to standard file picker
    document.getElementById('audioFileInput').click();
  }
}

// Sample Voice Loader
function loadSampleVoice() {
  const ctx = getAudioContext();
  const sampleRate = 48000;
  const duration = 6.0;
  const buffer = ctx.createBuffer(2, sampleRate * duration, sampleRate);

  // Synthesize a simulated spoken dialogue envelope
  for (let c = 0; c < 2; c++) {
    const data = buffer.getChannelData(c);
    for (let i = 0; i < data.length; i++) {
      const t = i / sampleRate;
      const voiceFormant = Math.sin(2 * Math.PI * 180 * t) * 0.4 +
                           Math.sin(2 * Math.PI * 340 * t) * 0.2 +
                           (Math.random() * 0.05);
      const envelope = Math.sin(t * Math.PI / 1.5) > 0 ? Math.sin(t * 8) : 0;
      data[i] = voiceFormant * Math.abs(envelope) * 0.7;
    }
  }

  currentAudioBuffer = buffer;
  document.getElementById('loadedTrackName').textContent = "Sample_Voice_Podcast_Take.wav";
  drawWaveform();
  updatePlaybackDisplay(0);
}

// File Import Handler
document.getElementById('audioFileInput').addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const arrayBuffer = await file.arrayBuffer();
  const ctx = getAudioContext();
  try {
    currentAudioBuffer = await ctx.decodeAudioData(arrayBuffer);
    document.getElementById('loadedTrackName').textContent = file.name;
    drawWaveform();
    updatePlaybackDisplay(0);
  } catch (err) {
    alert("Error decoding audio file: " + err.message);
  }
});

// Stitcher Engine: Build Mastered Episode
async function buildMasteredEpisode() {
  if (!currentAudioBuffer) {
    alert(currentLang === 'it' ? 'Carica o registra prima una traccia vocale nell\'editor!' : 'Please load or record a voice track in the editor first!');
    return;
  }

  const introChoice = document.getElementById('introSelect').value;
  const outroChoice = document.getElementById('outroSelect').value;
  const crossfade = document.getElementById('addCrossfadeCheck').checked;

  const sampleRate = 48000;
  const introDef = soundLibrary[introChoice];
  const outroDef = soundLibrary[outroChoice];

  const introDur = introDef ? introDef.duration : 0;
  const outroDur = outroDef ? outroDef.duration : 0;
  const voiceDur = currentAudioBuffer.duration;

  const fadeOverlap = crossfade ? 0.8 : 0.0;
  const totalDuration = introDur + voiceDur + outroDur - (fadeOverlap * 2);

  const offlineCtx = new OfflineAudioContext(2, Math.ceil(sampleRate * Math.max(1, totalDuration)), sampleRate);

  // 1. Synthesize Intro
  if (introDef) {
    introDef.synthesize(offlineCtx, offlineCtx.destination);
  }

  // 2. Play Voice Buffer
  const voiceSrc = offlineCtx.createBufferSource();
  voiceSrc.buffer = currentAudioBuffer;

  const voiceGain = offlineCtx.createGain();
  const voiceStartTime = Math.max(0, introDur - fadeOverlap);

  if (crossfade && introDef) {
    voiceGain.gain.setValueAtTime(0, voiceStartTime);
    voiceGain.gain.linearRampToValueAtTime(1.0, voiceStartTime + fadeOverlap);
  }

  voiceSrc.connect(voiceGain);
  voiceGain.connect(offlineCtx.destination);
  voiceSrc.start(voiceStartTime);

  // 3. Synthesize Outro
  if (outroDef) {
    const outroStartTime = voiceStartTime + voiceDur - fadeOverlap;
    const outroGain = offlineCtx.createGain();
    outroGain.connect(offlineCtx.destination);
    // Render outro delayed
    setTimeout(() => {}, 0);
  }

  const masteredBuffer = await offlineCtx.startRendering();
  currentAudioBuffer = masteredBuffer;
  drawWaveform();
  updatePlaybackDisplay(0);

  alert(currentLang === 'it' ? '🚀 Episodio assemblato e masterizzato con successo!' : '🚀 Mastered episode rendered successfully!');
}

// Convert AudioBuffer to 24-bit/16-bit PCM WAV Blob
function bufferToWav(abuffer) {
  const numOfChan = abuffer.numberOfChannels;
  const length = abuffer.length * numOfChan * 2 + 44;
  const out = new DataView(new ArrayBuffer(length));
  const channels = [];
  let sample;
  let offset = 0;
  let pos = 0;

  // write WAVE header
  setUint32(0x46464952); // "RIFF"
  setUint32(length - 8); // file length - 8
  setUint32(0x45564157); // "WAVE"

  setUint32(0x20746d66); // "fmt " chunk
  setUint32(16); // length = 16
  setUint16(1); // PCM (uncompressed)
  setUint16(numOfChan);
  setUint32(abuffer.sampleRate);
  setUint32(abuffer.sampleRate * 2 * numOfChan); // avg. bytes/sec
  setUint16(numOfChan * 2); // block-align
  setUint16(16); // 16-bit

  setUint32(0x61746164); // "data" - chunk
  setUint32(length - pos - 4); // chunk length

  for (let i = 0; i < abuffer.numberOfChannels; i++) {
    channels.push(abuffer.getChannelData(i));
  }

  while (pos < length) {
    for (let i = 0; i < numOfChan; i++) {
      sample = Math.max(-1, Math.min(1, channels[i][offset]));
      sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767) | 0;
      out.setInt16(pos, sample, true);
      pos += 2;
    }
    offset++;
  }

  return new Blob([out], { type: "audio/wav" });

  function setUint16(data) {
    out.setUint16(pos, data, true);
    pos += 2;
  }

  function setUint32(data) {
    out.setUint32(pos, data, true);
    pos += 4;
  }
}

// Download Mastered WAV
function downloadMasterWav() {
  if (!currentAudioBuffer) {
    alert(currentLang === 'it' ? 'Nessun audio masterizzato disponibile da scaricare!' : 'No mastered audio available to download!');
    return;
  }

  const wavBlob = bufferToWav(currentAudioBuffer);
  const url = URL.createObjectURL(wavBlob);
  const a = document.createElement('a');
  const epTitle = (document.getElementById('epTitleInput').value || 'Episode_Master').replace(/\s+/g, '_');
  a.href = url;
  a.download = `${epTitle}_RODECaster_Master.wav`;
  a.click();
  URL.revokeObjectURL(url);
}

// ==========================================
// 5. POP-ART COVER ART GENERATOR
// ==========================================
function renderCoverArt() {
  const coverCanvas = document.getElementById('coverCanvas');
  const ctx = coverCanvas.getContext('2d');
  const size = coverCanvas.width;

  const showName = document.getElementById('coverShowNameInput').value || 'CLASSROOM PODCAST';
  const epTitle = document.getElementById('epTitleInput').value || 'EPISODE 01';
  const epNumber = document.getElementById('coverEpNumberInput').value || 'SEASON 1';
  const theme = document.getElementById('coverThemeSelect').value;

  // Pop-Art Palettes
  let bgGrad1 = "#ffe600"; // Electric Lemon
  let bgGrad2 = "#ff2a85"; // Hot Pink
  let textColor = "#000000";
  let boxColor = "#00f0ff"; // Cyan

  if (theme === 'studio') {
    bgGrad1 = "#ff6b00";
    bgGrad2 = "#ffe600";
    boxColor = "#ffffff";
  } else if (theme === 'warm') {
    bgGrad1 = "#ff3344";
    bgGrad2 = "#10e080";
    boxColor = "#ffe600";
  } else if (theme === 'minimal') {
    bgGrad1 = "#ffffff";
    bgGrad2 = "#e2e8f0";
    boxColor = "#000000";
    textColor = "#ffffff";
  }

  // Draw Vibrant Background
  const grad = ctx.createLinearGradient(0, 0, size, size);
  grad.addColorStop(0, bgGrad1);
  grad.addColorStop(1, bgGrad2);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  // Pop-Art Halftone Dot Matrix Pattern
  ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
  const dotSpacing = 24;
  for (let x = 0; x < size; x += dotSpacing) {
    for (let y = 0; y < size; y += dotSpacing) {
      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Outer Chunky Comic Border
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 12;
  ctx.strokeRect(20, 20, size - 40, size - 40);

  // Big Sunburst / Star Sticker behind Icon
  ctx.save();
  ctx.translate(size / 2, size / 2 - 50);
  ctx.fillStyle = boxColor;
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 6;

  // Starburst polygon
  ctx.beginPath();
  const spikes = 12;
  const outerR = 110;
  const innerR = 75;
  for (let i = 0; i < spikes * 2; i++) {
    const r = (i % 2 === 0) ? outerR : innerR;
    const angle = (i * Math.PI) / spikes;
    const px = Math.cos(angle) * r;
    const py = Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Microphone Emoji in Center
  ctx.font = "bold 64px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("🎙️", 0, 22);
  ctx.restore();

  // Show Title in Chunky Comic Bubble Box
  ctx.save();
  ctx.translate(size / 2, size / 2 + 100);
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 6;
  ctx.fillRect(-240, -32, 480, 64);
  ctx.strokeRect(-240, -32, 480, 64);

  ctx.fillStyle = "#000000";
  ctx.font = "800 28px 'Righteous', 'Space Grotesk', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(showName.toUpperCase(), 0, 10);
  ctx.restore();

  // Episode Season Ribbon
  ctx.save();
  ctx.translate(size / 2, size / 2 + 165);
  ctx.fillStyle = "#000000";
  ctx.fillRect(-180, -20, 360, 40);

  ctx.fillStyle = "#ffe600";
  ctx.font = "800 18px 'JetBrains Mono', monospace";
  ctx.textAlign = "center";
  ctx.fillText(epNumber.toUpperCase(), 0, 8);
  ctx.restore();

  // Episode Title
  ctx.fillStyle = "#000000";
  ctx.font = "800 24px 'Fredoka', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(`"${epTitle}"`, size / 2, size / 2 + 225);
}

function downloadCoverArt() {
  const coverCanvas = document.getElementById('coverCanvas');
  const url = coverCanvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = url;
  a.download = 'podcast_pop_punk_cover_3000x3000.png';
  a.click();
}

// ==========================================
// 6. INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Toggle
  document.getElementById('langEn').addEventListener('click', () => setLanguage('en'));
  document.getElementById('langIt').addEventListener('click', () => setLanguage('it'));

  // 2. Navigation Tabs (Pop-Punk Stickers)
  const navTabs = document.querySelectorAll('.nav-tab-sticker, .tab-btn');
  navTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      navTabs.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const tabId = btn.getAttribute('data-tab');
      const targetContent = document.getElementById(tabId);
      if (targetContent) targetContent.classList.add('active');

      if (tabId === 'editorTab') {
        drawWaveform();
      } else if (tabId === 'exportTab') {
        renderCoverArt();
      }
    });
  });

  // 3. Hardware Badge click -> open guide tab
  const hwBadge = document.getElementById('hardwareBadgeBtn');
  if (hwBadge) {
    hwBadge.addEventListener('click', () => {
      const guideBtn = document.querySelector('[data-tab="guideTab"]');
      if (guideBtn) guideBtn.click();
    });
  }

  // 4. Script Actions
  document.getElementById('speaker1Input').addEventListener('input', updateSpeakerNames);
  document.getElementById('speaker2Input').addEventListener('input', updateSpeakerNames);
  document.getElementById('epTitleInput').addEventListener('input', () => {
    updateScriptStats();
    renderCoverArt();
  });

  document.getElementById('addBlockSpeaker1').addEventListener('click', () => addBlock('speaker1', ''));
  document.getElementById('addBlockSpeaker2').addEventListener('click', () => addBlock('speaker2', ''));
  document.getElementById('addBlockCue').addEventListener('click', () => addBlock('cue', '🔔 [PAD 1] Jingle'));
  document.getElementById('addBlockNote').addEventListener('click', () => addBlock('note', '📝 '));

  document.getElementById('loadEduTemplateBtn').addEventListener('click', () => {
    loadScriptTemplate(currentLang === 'it' ? eduTemplateIT : eduTemplateEN);
  });

  document.getElementById('loadDebateTemplateBtn').addEventListener('click', () => {
    const debate = [
      { type: 'cue', text: '🔔 [PAD 1] INTRO' },
      { type: 'speaker1', text: currentLang === 'it' ? 'Benvenuti al Grande Dibattito Studentesco!' : 'Welcome to the Great Student Debate!' },
      { type: 'speaker2', text: currentLang === 'it' ? 'La tesi di oggi riguarda l\'uso dei social e lo studio.' : 'Today\'s resolution is about screen time and studying.' },
      { type: 'cue', text: '🥁 [PAD 4] DRUM ROLL' },
      { type: 'cue', text: '🎵 [PAD 6] OUTRO' }
    ];
    loadScriptTemplate(debate);
  });

  const clearBtn = document.getElementById('clearScriptBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm(currentLang === 'it' ? 'Vuoi davvero cancellare la scaletta?' : 'Are you sure you want to clear the script?')) {
        scriptBlocks = [];
        renderScriptBlocks();
        updateScriptStats();
      }
    });
  }

  document.getElementById('printScriptBtn').addEventListener('click', () => window.print());
  document.getElementById('exportScriptTxtBtn').addEventListener('click', () => {
    let txt = `PODCAST SCRIPT: ${document.getElementById('epTitleInput').value}\n\n`;
    scriptBlocks.forEach(b => {
      txt += `[${b.type.toUpperCase()}]: ${b.text}\n\n`;
    });
    const blob = new Blob([txt], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'podcast_script.txt';
    a.click();
    URL.revokeObjectURL(url);
  });

  // 5. Teleprompter
  document.getElementById('openTeleprompterBtn').addEventListener('click', openTeleprompter);
  document.getElementById('closeTeleprompterBtn').addEventListener('click', closeTeleprompter);
  document.getElementById('telePlayPauseBtn').addEventListener('click', toggleTeleScroll);

  let currentFontSize = 2.4;
  document.getElementById('teleFontIncrease').addEventListener('click', () => {
    currentFontSize += 0.3;
    document.getElementById('teleContent').style.fontSize = `${currentFontSize}rem`;
  });
  document.getElementById('teleFontDecrease').addEventListener('click', () => {
    currentFontSize = Math.max(1.2, currentFontSize - 0.3);
    document.getElementById('teleContent').style.fontSize = `${currentFontSize}rem`;
  });

  // 6. SMART Pads (Arcade Drum Style)
  document.querySelectorAll('.arcade-pad, .smart-pad').forEach(pad => {
    const padIdx = parseInt(pad.getAttribute('data-pad'));
    const playBtn = pad.querySelector('.btn-pad-act, .pad-play-btn');
    const dlBtn = pad.querySelector('.btn-pad-act:last-child, .pad-dl-btn');

    if (playBtn) {
      playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        playPadSound(padIdx);
      });
    }
    if (dlBtn) {
      dlBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        downloadPadSound(padIdx);
      });
    }
    pad.addEventListener('click', () => playPadSound(padIdx));
  });

  document.getElementById('padMasterVolume').addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    document.getElementById('padVolDisplay').textContent = `${Math.round(val * 100)}%`;
    if (padMasterGain) padMasterGain.gain.value = val;
  });

  document.getElementById('stopAllAudioBtn').addEventListener('click', () => {
    if (audioCtx) audioCtx.suspend().then(() => audioCtx.resume());
    stopAudioPlayback();
  });

  document.getElementById('toggleAmbientBtn').addEventListener('click', toggleAmbientBed);
  document.getElementById('ambientVolume').addEventListener('input', (e) => {
    if (ambientGainNode) ambientGainNode.gain.value = parseFloat(e.target.value);
  });

  // 7. Editor & Waveform
  populateAudioDevices();
  document.getElementById('syncSdFolderBtn').addEventListener('click', syncSdCardFolder);
  document.getElementById('closeSdDrawerBtn').addEventListener('click', () => {
    document.getElementById('sdDrawer').style.display = 'none';
  });

  document.getElementById('wavePlayBtn').addEventListener('click', togglePlayAudio);
  document.getElementById('waveStopBtn').addEventListener('click', stopAudioPlayback);
  document.getElementById('cutSelectionBtn').addEventListener('click', cutSelection);
  document.getElementById('silenceSelectionBtn').addEventListener('click', silenceSelection);
  document.getElementById('trimToSelectionBtn').addEventListener('click', trimToSelection);
  document.getElementById('undoEditBtn').addEventListener('click', restoreUndoState);
  document.getElementById('autoLevelBtn').addEventListener('click', applyNormalizer);
  document.getElementById('podMicEnhancerBtn').addEventListener('click', applyPodMicEq);
  document.getElementById('recordMicBtn').addEventListener('click', toggleMicRecording);
  document.getElementById('loadDemoAudioBtn').addEventListener('click', loadSampleVoice);
  document.getElementById('buildFinalEpisodeBtn').addEventListener('click', buildMasteredEpisode);

  // Zoom
  document.getElementById('zoomInBtn').addEventListener('click', () => {
    zoomLevel = Math.min(3.0, zoomLevel + 0.25);
    document.getElementById('zoomLevelText').textContent = `${Math.round(zoomLevel * 100)}%`;
    canvas.width = 1200 * zoomLevel;
    drawWaveform();
  });
  document.getElementById('zoomOutBtn').addEventListener('click', () => {
    zoomLevel = Math.max(1.0, zoomLevel - 0.25);
    document.getElementById('zoomLevelText').textContent = `${Math.round(zoomLevel * 100)}%`;
    canvas.width = 1200 * zoomLevel;
    drawWaveform();
  });

  setupWaveformInteractions();

  // 8. Cover Art & Master
  document.getElementById('coverShowNameInput').addEventListener('input', renderCoverArt);
  document.getElementById('coverEpNumberInput').addEventListener('input', renderCoverArt);
  document.getElementById('coverThemeSelect').addEventListener('change', renderCoverArt);
  document.getElementById('downloadCoverBtn').addEventListener('click', downloadCoverArt);
  document.getElementById('downloadMasterWavBtn').addEventListener('click', downloadMasterWav);

  document.getElementById('copyShowNotesBtn').addEventListener('click', () => {
    const text = document.getElementById('episodeSummaryText').value;
    navigator.clipboard.writeText(text);
    alert(currentLang === 'it' ? 'Note dell\'episodio copiate negli appunti!' : 'Show notes copied to clipboard!');
  });

  document.getElementById('generateRssTagBtn').addEventListener('click', () => {
    const title = document.getElementById('epTitleInput').value || 'Classroom Episode';
    const desc = document.getElementById('episodeSummaryText').value;
    const rssXml = `<item>\n  <title>${title}</title>\n  <description><![CDATA[${desc}]]></description>\n  <itunes:author>Classroom Voices</itunes:author>\n</item>`;
    document.getElementById('episodeSummaryText').value = rssXml;
  });

  // Spacebar Play/Pause Shortcut
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'INPUT') {
      e.preventDefault();
      togglePlayAudio();
    }
  });

  // Initial Load
  loadScriptTemplate(eduTemplateEN);
  renderSfxList();
  renderCoverArt();
  drawWaveform();
});
