export default function Logo({ size = '40px', variant = 'icon' }) {
  if (variant === 'icon') {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" stroke="url(#gradient)" strokeWidth="2" opacity="0.5"/>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B2FFF"/>
            <stop offset="100%" stopColor="#C084FC"/>
          </linearGradient>
        </defs>
        <path d="M35 25C35 25 30 40 30 50C30 65 38 75 50 75C62 75 70 65 70 50C70 40 65 25 65 25M45 35L55 35L45 55L55 65" 
              stroke="url(#gradient)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" stroke="url(#gradient)" strokeWidth="2" opacity="0.5"/>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B2FFF"/>
            <stop offset="100%" stopColor="#C084FC"/>
          </linearGradient>
        </defs>
        <path d="M35 25C35 25 30 40 30 50C30 65 38 75 50 75C62 75 70 65 70 50C70 40 65 25 65 25M45 35L55 35L45 55L55 65" 
              stroke="url(#gradient)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span style={{ fontSize: '20px', fontWeight: 'bold', background: 'linear-gradient(90deg, #7B2FFF, #C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        NAVAWEB
      </span>
    </div>
  );
}
