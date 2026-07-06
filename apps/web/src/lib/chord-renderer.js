const STYLE_ID = "song-repertoire-chord-renderer";

export function ensureChordRendererStyles() {
  if (document.getElementById(STYLE_ID)) {
    return;
  }

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    .chord-sheet {
      display: grid;
      gap: 5px;
      min-width: max-content;
    }

    .chord-line {
      display: flex;
      align-items: flex-end;
      min-height: 2.4em;
    }

    .chord-line.is-text-only {
      min-height: 1.55em;
    }

    .chord-column {
      display: inline-grid;
      grid-template-rows: 1.05em auto;
      align-items: end;
      white-space: pre;
    }

    .chord-symbol {
      min-height: 1.05em;
      padding-right: 0.35ch;
      color: #9d3e30;
      font-size: 0.84rem;
      font-weight: 900;
      line-height: 1;
    }

    .chord-lyric {
      min-height: 1.35em;
      padding-right: 0.35ch;
      color: #253142;
      white-space: pre;
    }

    .chord-comment {
      width: fit-content;
      border-left: 3px solid #b24d3d;
      border-radius: 8px;
      background: #fff8f6;
      padding: 7px 10px;
      color: #7f392f;
      font-size: 0.84rem;
      font-weight: 900;
    }

    .chord-blank-line {
      min-height: 0.85rem;
    }
  `;
  document.head.append(style);
}

export function buildChordSheet(value) {
  const sheet = document.createElement("div");
  sheet.className = "chord-sheet";

  value.split(/\r?\n/).forEach((line) => {
    sheet.append(renderChordSheetLine(line));
  });

  return sheet;
}

function renderChordSheetLine(line) {
  const directive = parseChordProDirective(line);

  if (directive) {
    return renderChordProDirective(directive);
  }

  if (line.trim().length === 0) {
    const spacer = document.createElement("div");
    spacer.className = "chord-blank-line";
    return spacer;
  }

  const segments = parseChordProSegments(line);
  const row = document.createElement("div");
  row.className = segments.some((segment) => segment.chord)
    ? "chord-line"
    : "chord-line is-text-only";

  segments.forEach((segment) => {
    const column = document.createElement("span");
    column.className = "chord-column";

    const chord = document.createElement("span");
    chord.className = "chord-symbol";
    chord.textContent = segment.chord;

    const lyric = document.createElement("span");
    lyric.className = "chord-lyric";
    lyric.textContent = segment.lyric || " ";

    column.append(chord, lyric);
    row.append(column);
  });

  return row;
}

function parseChordProDirective(line) {
  const match = line.match(/^\s*\{([^}:]+)\s*:?\s*([^}]*)\}\s*$/);

  if (!match) {
    return null;
  }

  return {
    name: match[1].trim().toLocaleLowerCase(),
    value: match[2].trim()
  };
}

function renderChordProDirective({ name, value }) {
  const directive = document.createElement("div");
  const labelByName = {
    c: value,
    comment: value,
    key: value ? `Tono: ${value}` : "",
    capo: value ? `Capo: ${value}` : "",
    tempo: value ? `Tempo: ${value}` : "",
    soc: "Coro",
    start_of_chorus: "Coro",
    sov: "Verso",
    start_of_verse: "Verso"
  };
  const label = labelByName[name] ?? "";

  directive.className = label ? "chord-comment" : "chord-directive is-hidden";
  directive.textContent = label;

  return directive;
}

function parseChordProSegments(line) {
  const segments = [];
  const chordPattern = /\[([^\]\n]{1,40})\]/g;
  let pendingChord = "";
  let cursor = 0;
  let match = chordPattern.exec(line);

  while (match) {
    const lyric = line.slice(cursor, match.index);

    if (lyric.length > 0 || pendingChord.length > 0) {
      segments.push({
        chord: pendingChord,
        lyric
      });
    }

    pendingChord = match[1].trim();
    cursor = match.index + match[0].length;
    match = chordPattern.exec(line);
  }

  const remainingLyric = line.slice(cursor);

  if (remainingLyric.length > 0 || pendingChord.length > 0 || segments.length === 0) {
    segments.push({
      chord: pendingChord,
      lyric: remainingLyric
    });
  }

  return segments;
}
