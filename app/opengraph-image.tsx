import { ImageResponse } from 'next/og'

export const alt = 'Isparta Mezar Yapımı | Ersan Stone – Granit & Mermer Anıt'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1c1917',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Amber top border */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, backgroundColor: '#d97706', display: 'flex' }} />

        {/* Subtle side accent lines */}
        <div style={{ position: 'absolute', top: 6, left: 0, bottom: 6, width: 2, backgroundColor: '#292524', display: 'flex' }} />
        <div style={{ position: 'absolute', top: 6, right: 0, bottom: 6, width: 2, backgroundColor: '#292524', display: 'flex' }} />

        {/* Diamond mark */}
        <svg width="90" height="90" viewBox="0 0 44 44" style={{ marginBottom: 28 }}>
          <polygon points="22,2 42,22 22,22" fill="#f59e0b" />
          <polygon points="42,22 22,42 22,22" fill="#d97706" />
          <polygon points="22,42 2,22 22,22"  fill="#92400e" />
          <polygon points="2,22 22,2 22,22"   fill="#d97706" />
          <line x1="2"  y1="22" x2="42" y2="22" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" />
          <line x1="22" y1="2"  x2="22" y2="42" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" />
        </svg>

        {/* Company name */}
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            color: 'white',
            letterSpacing: '8px',
            display: 'flex',
            lineHeight: 1,
          }}
        >
          ERSAN STONE
        </div>

        {/* Amber divider */}
        <div style={{ width: 80, height: 2, backgroundColor: '#d97706', margin: '22px 0 20px', display: 'flex' }} />

        {/* Primary keyword */}
        <div
          style={{
            fontSize: 26,
            color: '#d97706',
            letterSpacing: '4px',
            display: 'flex',
            textTransform: 'uppercase',
          }}
        >
          Isparta Mezar Yapımı
        </div>

        {/* Services */}
        <div
          style={{
            fontSize: 18,
            color: '#78716c',
            letterSpacing: '3px',
            marginTop: 14,
            display: 'flex',
          }}
        >
          Mermer  ·  Granit  ·  Traverten  ·  Doğal Taş
        </div>

        {/* URL bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            right: 56,
            fontSize: 17,
            color: '#44403c',
            letterSpacing: '1px',
            display: 'flex',
          }}
        >
          ersanstone.com
        </div>

        {/* Amber bottom border */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 6, backgroundColor: '#d97706', display: 'flex' }} />
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
