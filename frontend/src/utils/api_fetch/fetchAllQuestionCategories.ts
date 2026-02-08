import { QuestionCategory } from "../../types/QuestionCategory";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const fetchAllQuestionCategories = async () => {
    return fetch(`${API_URL}/categories`).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json() as Promise<QuestionCategory[]>;
    });
}

export default fetchAllQuestionCategories;