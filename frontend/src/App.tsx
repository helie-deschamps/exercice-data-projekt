function App() {
  return (
    <div style={gridStyle}>
      <div style={{ ...areaStyle, gridColumn: '1', gridRow: '1' }}>a</div>
      <div style={{ ...areaStyle, gridColumn: '2', gridRow: '1' }}>b</div>
      <div style={{ ...areaStyle, gridColumn: '1 / span 2', gridRow: '2' }}>c</div>
      <div style={{ ...areaStyle, gridColumn: '1 / span 2', gridRow: '3' }}>d</div>
    </div>
  );
}

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gridTemplateRows: 'auto auto auto',
  gap: '1rem',
  maxWidth: '1286px',
  margin: '60px auto 0',
};

const areaStyle: React.CSSProperties = {
  background: 'hsla(0, 0%, 100%, 1)',
};

export default App
