/* Footer inside the right-panel scroll area. */
function Footer() {
  return (
    <footer style={{ padding: '1.5rem 3rem', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-base)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem 1.5rem' }}>
      <span className="eyebrow" style={{ fontSize: '0.65rem' }}>© {new Date().getFullYear()} Kevin Ouano</span>
      <span className="eyebrow" style={{ fontSize: '0.65rem' }}>Built with React + Vite</span>
    </footer>
  );
}

export default Footer;
