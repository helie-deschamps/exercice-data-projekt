import React from 'react';
import { useParams } from 'react-router-dom';

const VisualizationPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  return (
    <div style={{ padding: '2em', maxWidth: '1286px', margin: '0 auto' }}>
      <h1>Visualisation - Catégorie {categoryId}</h1>
      <p>Page de visualisation pour la catégorie avec l'ID: {categoryId}</p>
    </div>
  );
};

export default VisualizationPage;
