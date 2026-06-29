/* Section header for the right panel. Eyebrow + display title. */
interface SectionHeaderProps {
  label: string;
  title: string;
}

function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <p className="eyebrow" style={{ marginBottom: '0.65rem' }}>{label}</p>
      <h2
        className="font-display"
        style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

export default SectionHeader;
