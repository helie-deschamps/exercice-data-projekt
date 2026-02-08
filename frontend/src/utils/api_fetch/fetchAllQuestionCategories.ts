import { QuestionCategory } from "../../types/QuestionCategory";

const fetchAllQuestionCategories = async () => {
    return fetch(`http://localhost:3001/categories`).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json() as Promise<QuestionCategory[]>;
    });
}

export default fetchAllQuestionCategories;