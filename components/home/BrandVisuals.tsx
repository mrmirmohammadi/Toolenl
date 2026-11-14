import * as React from "react";

/**
 * Combined Toonel AI (ای‌آی تونل) brand mark + Persian wordmark.
 * Uses official Deep Navy (#141A3A), Path Blue (#5B7CFF), and Toonel Yellow (#FFC53D).
 */
export function ToonelLogo({
  inverted = false,
  className = "",
}: {
  inverted?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-[var(--space-2xs)] select-none ${className}`.trim()}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          width="36"
          height="36"
          rx="11"
          fill={inverted ? "#FFC53D" : "#141A3A"}
        />
        <path
          d="M10.5 26V17.5C10.5 13.3579 13.8579 10 18 10C22.1421 10 25.5 13.3579 25.5 17.5V26"
          stroke={inverted ? "#141A3A" : "#5B7CFF"}
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M14 26V18.2C14 15.9909 15.7909 14.2 18 14.2C20.2091 14.2 22 15.9909 22 18.2V26"
          stroke={inverted ? "#141A3A" : "#F7F5F0"}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.9"
        />
        <circle
          cx="18"
          cy="19"
          r="2.8"
          fill={inverted ? "#141A3A" : "#FFC53D"}
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`text-title-sm font-bold ${
            inverted ? "text-white" : "text-[var(--content-text-primary)]"
          }`}
        >
          ای‌آی تونل
        </span>
        <span
          dir="ltr"
          className={`text-[11px] font-medium tracking-wide ${
            inverted ? "text-white/75" : "text-[var(--content-text-tertiary)]"
          }`}
        >
          Toonel AI
        </span>
      </span>
    </span>
  );
}

/**
 * Custom vector illustration of «نِل» (Nel):
 * Small friendly time-machine companion with warm Toonel Yellow (#FFC53D) light.
 */
export function NelCharacter({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 340 290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="کاراکتر نِل، دستیار همراه یادگیری ای‌آی تونل"
      className={`w-full h-auto ${className}`.trim()}
    >
      {/* Subtle warm radial ambient aura */}
      <circle cx="170" cy="145" r="118" fill="#FFC53D" fillOpacity="0.14" />
      <circle cx="170" cy="145" r="84" fill="#5B7CFF" fillOpacity="0.1" />

      {/* Floating path rings */}
      <ellipse
        cx="170"
        cy="154"
        rx="132"
        ry="46"
        transform="rotate(-12 170 154)"
        stroke="#5B7CFF"
        strokeOpacity="0.35"
        strokeWidth="2"
        strokeDasharray="6 6"
      />

      {/* Base shadow */}
      <ellipse cx="170" cy="248" rx="68" ry="12" fill="#141A3A" fillOpacity="0.14" />

      {/* Side stabilizer ears / time dials */}
      <rect x="64" y="122" width="20" height="44" rx="10" fill="#5B7CFF" />
      <rect x="256" y="122" width="20" height="44" rx="10" fill="#5B7CFF" />
      <circle cx="74" cy="144" r="4" fill="#FFC53D" />
      <circle cx="266" cy="144" r="4" fill="#FFC53D" />

      {/* Top antenna with warm yellow beacon */}
      <path d="M170 46V68" stroke="#141A3A" strokeWidth="5" strokeLinecap="round" />
      <circle cx="170" cy="36" r="14" fill="#FFC53D" />
      <circle cx="170" cy="36" r="7" fill="#FFFDF7" />

      {/* Capsule body (Deep Navy shell + Light Paper highlight) */}
      <rect x="82" y="68" width="176" height="154" rx="56" fill="#141A3A" />
      <rect
        x="86"
        y="72"
        width="168"
        height="146"
        rx="52"
        stroke="#5B7CFF"
        strokeOpacity="0.45"
        strokeWidth="2"
      />

      {/* Inner visor glass */}
      <rect x="102" y="92" width="136" height="84" rx="32" fill="#222C53" />
      <rect x="106" y="96" width="128" height="76" rx="28" fill="#192142" />

      {/* Friendly glowing eyes + subtle smile */}
      <circle cx="144" cy="130" r="11" fill="#FFC53D" />
      <circle cx="196" cy="130" r="11" fill="#FFC53D" />
      <circle cx="147" cy="127" r="3.5" fill="#FFFDF7" />
      <circle cx="199" cy="127" r="3.5" fill="#FFFDF7" />
      <path
        d="M156 150C160 156 180 156 184 150"
        stroke="#FFC53D"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Warm chest core light (time-machine dial) */}
      <rect x="128" y="188" width="84" height="20" rx="10" fill="#222C53" />
      <circle cx="146" cy="198" r="5" fill="#FFC53D" />
      <rect x="158" y="195" width="38" height="6" rx="3" fill="#5B7CFF" />

      {/* Lower hover thrusters */}
      <rect x="122" y="218" width="32" height="12" rx="6" fill="#303E6B" />
      <rect x="186" y="218" width="32" height="12" rx="6" fill="#303E6B" />
      <ellipse cx="138" cy="235" rx="10" ry="4" fill="#FFC53D" fillOpacity="0.65" />
      <ellipse cx="202" cy="235" rx="10" ry="4" fill="#FFC53D" fillOpacity="0.65" />
    </svg>
  );
}
