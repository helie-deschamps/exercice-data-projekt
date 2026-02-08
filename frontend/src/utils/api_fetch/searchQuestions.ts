import { Question } from '../../types/Question';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

/**
 * Fetch questions from the API based on search query
 * json-server's 'q' parameter performs full-text search across all string fields
 */
const fetchQuestionsBySearch = async (q: string): Promise<Question[]> => {
  try {
    const response = await fetch(`${API_URL}/questions?q=${encodeURIComponent(q)}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch questions: ${response.statusText}`);
    }
    
    const questions: Question[] = await response.json();
    return questions;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};

/**
 * Sort questions by their order property (ascending)
 */
const sortQuestionsByOrder = (questions: Question[]): Question[] => {
  return [...questions].sort((a, b) => a.order - b.order);
};

/**
 * Search questions by query string and return them sorted by order
 */
const searchQuestions = async (q: string): Promise<Question[]> => {
  if (!q || q.trim().length === 0) {
    return [];
  }
  
  const questions = await fetchQuestionsBySearch(q);
  return sortQuestionsByOrder(questions);
};

export default searchQuestions;
