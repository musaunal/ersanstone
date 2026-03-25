import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Diamond mark — same 4-facet design as the header logo */}
        <svg width="30" height="30" viewBox="0 0 44 44">
          <polygon points="22,2 42,22 22,22" fill="#f59e0b" />
          <polygon points="42,22 22,42 22,22" fill="#d97706" />
          <polygon points="22,42 2,22 22,22"  fill="#92400e" />
          <polygon points="2,22 22,2 22,22"   fill="#d97706" />
        </svg>
      </div>
    ),
    { width: 32, height: 32 }
  )
}
