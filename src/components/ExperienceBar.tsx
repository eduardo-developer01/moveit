export default function ExperienceBar() {
  return (
    <header className="experience-bar">
      <span>0 xp </span>
      <div>
        <div style={{ width: '60%' }} />
        <span className="current-experience" style={{ left: '60%' }}>250 xp</span>
      </div>
      <span>60 xp</span>
    </header>
  )
}

