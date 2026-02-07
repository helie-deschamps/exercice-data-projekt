import PageTitle from "./components/page_title/PageTitle";

function App() {
  return (
    <div style={gridStyle}>
      <PageTitle style={{ gridColumn: '1', gridRow: '1' }} title="Centre d’aide" subtitle="Bienvenue dans le centre de support officiel. Vous trouverez ici toutes les réponses aux questions les plus fréquentes, classées par thématiques."/>
      <div style={{ gridColumn: '2', gridRow: '1' }}>b</div>
      <div style={{ gridColumn: '1 / span 2', gridRow: '2' }}>c</div>
      <div style={{ gridColumn: '1 / span 2', gridRow: '3' }}>d</div>
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

export default App
