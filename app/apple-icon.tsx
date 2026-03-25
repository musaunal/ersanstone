import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1c1917',
          borderRadius: 40,
        }}
      >
        <svg width="110" height="110" viewBox="0 0 44 44">
          <polygon points="22,2 42,22 22,22" fill="#f59e0b" />
          <polygon points="42,22 22,42 22,22" fill="#d97706" />
          <polygon points="22,42 2,22 22,22"  fill="#92400e" />
          <polygon points="2,22 22,2 22,22"   fill="#d97706" />
        </svg>
      </div>
    ),
    { width: 180, height: 180 }
  )
}
