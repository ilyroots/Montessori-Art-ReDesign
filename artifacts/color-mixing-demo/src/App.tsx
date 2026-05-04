import { useState, useCallback } from "react";
import { RotateCcw, Play, Droplets, Eye, Heart, Sparkles } from "lucide-react";

// ─── Color Utilities ───
interface ColorInfo {
  name: string;
  hex: string;
  rgb: [number, number, number];
}

const PRIMARY_COLORS: Record<string, ColorInfo> = {
  red: { name: "Red", hex: "#E53935", rgb: [229, 57, 53] },
  yellow: { name: "Yellow", hex: "#FDD835", rgb: [253, 216, 53] },
  blue: { name: "Blue", hex: "#1E88E5", rgb: [30, 136, 229] },
};

const SECONDARY_NAMES: Record<string, string> = {
  "red+yellow": "Orange",
  "yellow+red": "Orange",
  "yellow+blue": "Green",
  "blue+yellow": "Green",
  "red+blue": "Purple",
  "blue+red": "Purple",
};

interface MixedResult {
  hex: string;
  name: string;
  rgb: [number, number, number];
}

function mixColors(drops: Record<string, number>): MixedResult {
  const total = Object.values(drops).reduce((a, b) => a + b, 0);
  if (total === 0)
    return { hex: "#FAF7EF", name: "Empty Palette", rgb: [250, 247, 239] };

  let r = 0,
    g = 0,
    b = 0;
  Object.entries(drops).forEach(([color, count]) => {
    const rgb = PRIMARY_COLORS[color].rgb;
    r += rgb[0] * count;
    g += rgb[1] * count;
    b += rgb[2] * count;
  });

  r = Math.round(r / total);
  g = Math.round(g / total);
  b = Math.round(b / total);

  const hex =
    "#" +
    [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");

  const active = Object.entries(drops)
    .filter(([_, c]) => c > 0)
    .map(([k]) => k);
  let name = "Mixed Color";
  if (active.length === 1) {
    name = PRIMARY_COLORS[active[0]].name;
  } else if (active.length === 2) {
    const key = active.sort().join("+");
    name = SECONDARY_NAMES[key] || "Custom Mix";
  } else if (active.length === 3) {
    name = "Brown (Tertiary)";
  }

  return { hex, name, rgb: [r, g, b] };
}

function getContrastColor([r, g, b]: [number, number, number]) {
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "#1C1B18" : "#FAF7EF";
}

// ─── Components ───
function Header() {
  return (
    <header className="relative px-6 py-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-honey flex items-center justify-center text-white font-serif text-lg font-bold">
            N
          </div>
          <div>
            <h1 className="font-serif text-lg font-semibold text-ink leading-tight">
              Nature of Art
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-charcoal/50 font-medium">
              Montessori Color Atelier
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-charcoal/60">
          <span className="w-2 h-2 rounded-full bg-sage" />
          Interactive Demo
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="relative text-center px-6 pt-8 pb-4">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-3">
          Montessori Art Education
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-ink tracking-[-0.02em] mb-4 leading-[1.1]">
          Discover Color
          <br />
          Through <span className="text-honey italic">Mixing</span>
        </h2>
        <p className="text-charcoal/70 text-base max-w-md mx-auto leading-relaxed">
          In the Montessori atelier, children learn that red, yellow, and blue
          hold infinite possibilities. Explore color theory through hands-on
          mixing.
        </p>
      </div>
    </div>
  );
}

function ColorBlob({
  colorKey,
  count,
  onClick,
  delay,
}: {
  colorKey: string;
  count: number;
  onClick: () => void;
  delay: number;
}) {
  const color = PRIMARY_COLORS[colorKey];
  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-honey focus-visible:ring-offset-2 rounded-2xl"
      style={{
        animation: `float ${5 + delay}s ease-in-out ${delay * 0.3}s infinite`,
      }}
    >
      <div className="relative">
        <div
          className="transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.08] active:scale-95 w-20 h-20 sm:w-24 sm:h-24 rounded-full cursor-pointer relative overflow-hidden"
          style={{
            background: color.hex,
            boxShadow: `0 0 0 4px rgba(255,255,255,0.8), 0 8px 24px rgba(0,0,0,0.12)`,
          }}
        >
          <div className="absolute inset-0 bg-white/0 hover:bg-white/20 transition-colors" />
        </div>
        {count > 0 && (
          <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-paper border-2 border-linen flex items-center justify-center text-xs font-bold text-ink shadow-sm">
            {count}
          </div>
        )}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-ink text-paper text-[10px] font-semibold px-2 py-1 rounded-full whitespace-nowrap">
            Add {color.name}
          </div>
        </div>
      </div>
      <span className="text-sm font-medium text-charcoal">{color.name}</span>
    </button>
  );
}

function MixingPalette({
  mixedColor,
  drops,
  onReset,
}: {
  mixedColor: MixedResult;
  drops: Record<string, number>;
  onReset: () => void;
}) {
  const contrast = getContrastColor(mixedColor.rgb);

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative mb-6">
        <div
          className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-paper relative overflow-hidden grain-overlay cursor-pointer transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            background: mixedColor.hex,
            boxShadow: `0 24px 64px ${mixedColor.hex}33, 0 8px 24px rgba(0,0,0,0.1)`,
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <p
              className="font-serif text-2xl sm:text-3xl font-semibold mb-1"
              style={{ color: contrast }}
            >
              {mixedColor.name}
            </p>
            <p
              className="text-xs font-mono opacity-70"
              style={{ color: contrast }}
            >
              {mixedColor.hex.toUpperCase()}
            </p>
          </div>
        </div>

        {/* Paint brush icon */}
        <div className="absolute -right-4 -bottom-2 w-12 h-12 bg-paper rounded-full shadow-card flex items-center justify-center border border-linen">
          <Droplets size={20} className="text-honey" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-charcoal/60 hover:text-honey transition-colors px-3 py-1.5 rounded-full border border-linen hover:border-honey/30"
        >
          <RotateCcw size={12} />
          Clear Palette
        </button>
      </div>

      {/* Drop indicators */}
      <div className="flex gap-2 mt-4 flex-wrap justify-center max-w-xs">
        {Object.entries(drops)
          .filter(([_, c]) => c > 0)
          .map(([color, count]) => (
            <div
              key={color}
              className="flex items-center gap-1 bg-paper border border-linen rounded-full px-2.5 py-1"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: PRIMARY_COLORS[color].hex }}
              />
              <span className="text-[10px] font-medium text-charcoal">
                {count} {PRIMARY_COLORS[color].name}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

function ColorTheoryTip({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="bg-paper border border-linen rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
        style={{ background: `${color}15`, color }}
      >
        {icon}
      </div>
      <h4 className="font-serif text-base font-semibold text-ink mb-1">
        {title}
      </h4>
      <p className="text-sm text-charcoal/70 leading-relaxed">{description}</p>
    </div>
  );
}

// ─── Main App ───
export default function App() {
  const [drops, setDrops] = useState<Record<string, number>>({
    red: 0,
    yellow: 0,
    blue: 0,
  });
  const [isAutoMixing, setIsAutoMixing] = useState(false);

  const mixedColor = mixColors(drops);

  const addDrop = useCallback((color: string) => {
    setDrops((prev) => ({ ...prev, [color]: prev[color] + 1 }));
  }, []);

  const reset = useCallback(() => {
    setDrops({ red: 0, yellow: 0, blue: 0 });
  }, []);

  const autoMix = useCallback(() => {
    if (isAutoMixing) return;
    setIsAutoMixing(true);
    reset();

    const sequence = [
      ["red", 800],
      ["yellow", 1600],
      ["blue", 2400],
      ["red", 3200],
      ["yellow", 4000],
    ] as const;

    sequence.forEach(([color, delay]) => {
      setTimeout(() => addDrop(color), delay);
    });

    setTimeout(() => setIsAutoMixing(false), 5000);
  }, [isAutoMixing, reset, addDrop]);

  return (
    <div className="min-h-screen gradient-mesh grain-overlay relative">
      <Header />
      <Hero />

      {/* Main Mixing Area */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-paper/80 backdrop-blur-sm border border-linen rounded-3xl p-6 sm:p-10 shadow-card">
          {/* Color blobs row */}
          <div className="flex justify-center gap-8 sm:gap-12 mb-10">
            {Object.entries(PRIMARY_COLORS).map(([key, _], i) => (
              <ColorBlob
                key={key}
                colorKey={key}
                count={drops[key]}
                onClick={() => addDrop(key)}
                delay={i}
              />
            ))}
          </div>

          {/* Mixing palette */}
          <div className="flex justify-center mb-8">
            <MixingPalette
              mixedColor={mixedColor}
              drops={drops}
              onReset={reset}
            />
          </div>

          {/* Auto mix button */}
          <div className="flex justify-center">
            <button
              onClick={autoMix}
              disabled={isAutoMixing}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-honey/10 border border-honey/20 text-honey text-sm font-medium hover:bg-honey/20 transition-colors disabled:opacity-50"
            >
              <Play size={14} />
              {isAutoMixing ? "Mixing..." : "Watch a Demo Mix"}
            </button>
          </div>
        </div>
      </div>

      {/* Color Combinations Guide */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-2">
            Color Theory
          </p>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ink">
            Secondary Colors
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-paper border border-linen rounded-2xl p-5 text-center">
            <div className="flex justify-center gap-2 mb-3">
              <div
                className="w-6 h-6 rounded-full"
                style={{ background: PRIMARY_COLORS.red.hex }}
              />
              <span className="text-charcoal/40">+</span>
              <div
                className="w-6 h-6 rounded-full"
                style={{ background: PRIMARY_COLORS.yellow.hex }}
              />
            </div>
            <div
              className="w-16 h-16 rounded-full mx-auto mb-2 shadow-md"
              style={{ background: "#FF9800" }}
            />
            <p className="font-serif font-semibold text-ink">Orange</p>
          </div>

          <div className="bg-paper border border-linen rounded-2xl p-5 text-center">
            <div className="flex justify-center gap-2 mb-3">
              <div
                className="w-6 h-6 rounded-full"
                style={{ background: PRIMARY_COLORS.yellow.hex }}
              />
              <span className="text-charcoal/40">+</span>
              <div
                className="w-6 h-6 rounded-full"
                style={{ background: PRIMARY_COLORS.blue.hex }}
              />
            </div>
            <div
              className="w-16 h-16 rounded-full mx-auto mb-2 shadow-md"
              style={{ background: "#66BB6A" }}
            />
            <p className="font-serif font-semibold text-ink">Green</p>
          </div>

          <div className="bg-paper border border-linen rounded-2xl p-5 text-center">
            <div className="flex justify-center gap-2 mb-3">
              <div
                className="w-6 h-6 rounded-full"
                style={{ background: PRIMARY_COLORS.red.hex }}
              />
              <span className="text-charcoal/40">+</span>
              <div
                className="w-6 h-6 rounded-full"
                style={{ background: PRIMARY_COLORS.blue.hex }}
              />
            </div>
            <div
              className="w-16 h-16 rounded-full mx-auto mb-2 shadow-md"
              style={{ background: "#AB47BC" }}
            />
            <p className="font-serif font-semibold text-ink">Purple</p>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="max-w-4xl mx-auto px-6 py-8 pb-16">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.15em] text-honey font-semibold mb-2">
            Montessori Practice
          </p>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ink">
            In the Prepared Environment
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ColorTheoryTip
            color="#D89A27"
            icon={<Sparkles size={18} />}
            title="Primary First"
            description="Begin with red, yellow, and blue only. Let children discover secondary colors through their own mixing before naming them."
          />
          <ColorTheoryTip
            color="#44C9D4"
            icon={<Heart size={18} />}
            title="Process Over Product"
            description="Focus on the experience of mixing rather than the final color. The journey of discovery matters more than the result."
          />
          <ColorTheoryTip
            color="#E91E8F"
            icon={<Eye size={18} />}
            title="Observation"
            description="Ask open questions: 'What do you notice?' rather than 'What color is that?' Encourage descriptive language."
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-linen bg-canvas/30">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-honey flex items-center justify-center text-white font-serif text-sm font-bold">
              N
            </div>
            <span className="font-serif text-sm font-semibold text-ink">
              Nature of Art
            </span>
          </div>
          <p className="text-xs text-charcoal/50 text-center">
            A Montessori art education resource. Explore the full curriculum at{" "}
            <a
              href="https://natureofart.com"
              className="text-honey hover:underline"
            >
              natureofart.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
