/**
 * Inline SVG logo — renders at the correct size in Header and Footer.
 * The "ERSAN" text uses `fill="currentColor"` so it inherits the parent's
 * text color (white on dark hero, stone-800 when scrolled). The diamond mark
 * and "STONE" word are always amber.
 */
export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 44"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ersan Stone"
      style={{ height: '34px', width: 'auto', display: 'block' }}
    >
      {/* Cut-stone diamond mark — 4 triangular facets */}
      <polygon points="22,2 42,22 22,22" fill="#f59e0b" />   {/* top-right, brightest */}
      <polygon points="42,22 22,42 22,22" fill="#d97706" />   {/* bottom-right */}
      <polygon points="22,42 2,22 22,22"  fill="#92400e" />   {/* bottom-left, darkest */}
      <polygon points="2,22 22,2 22,22"   fill="#d97706" />   {/* top-left */}
      {/* Subtle dividing lines to accentuate the facets */}
      <line x1="2"  y1="22" x2="42" y2="22" stroke="rgba(0,0,0,0.12)" strokeWidth="0.6" />
      <line x1="22" y1="2"  x2="22" y2="42" stroke="rgba(0,0,0,0.12)" strokeWidth="0.6" />

      {/* "ERSAN" — inherits parent color (white / dark) via currentColor */}
      <text
        x="52" y="21"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="17"
        fontWeight="700"
        letterSpacing="2"
        fill="currentColor"
      >
        ERSAN
      </text>

      {/* "STONE" — always amber */}
      <text
        x="53" y="37"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="10"
        letterSpacing="5.5"
        fill="#d97706"
      >
        STONE
      </text>
    </svg>
  )
}
