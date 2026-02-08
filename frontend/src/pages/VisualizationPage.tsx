import React from 'react';
import { useParams } from 'react-router-dom';
import GroupOfQuestions from '../components/group_of_questions/GroupOfQuestions';

const VisualizationPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  const dummyGroup = {
    id: 1,
    categoryId: parseInt(categoryId || '1'),
    name: "Prise en main & Interface",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    order: 1
  };

  const dummyQuestions = [
    {
      id: 1,
      groupId: 1,
      question: "Titre de la question",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec lectus....",
      tags: [],
      order: 1,
      createdAt: "2025-01-15T10:00:00Z",
      updatedAt: "2025-01-15T10:00:00Z"
    },
    {
      id: 2,
      groupId: 1,
      question: "Titre de la question",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec lectus....",
      tags: [],
      order: 2,
      createdAt: "2025-01-15T10:00:00Z",
      updatedAt: "2025-01-15T10:00:00Z"
    },
    {
      id: 3,
      groupId: 1,
      question: "Titre de la question",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec lectus....",
      tags: [],
      order: 3,
      createdAt: "2025-01-15T10:00:00Z",
      updatedAt: "2025-01-15T10:00:00Z"
    }
  ];

  return (
    <div style={{ padding: '2em', maxWidth: '1286px', margin: '60px auto' }}>
      <h1 style={{ fontSize: '2em', fontWeight: 700, marginBottom: '1.5em', color: 'hsla(0, 0%, 15%, 1)' }}>
        Visualisation - Catégorie {categoryId}
      </h1>
      <GroupOfQuestions group={dummyGroup} questions={dummyQuestions} />
    </div>
  );
};

export default VisualizationPage;
