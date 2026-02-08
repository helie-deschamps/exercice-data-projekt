import React from 'react';
import styles from './CategoryTile.module.css';
import Button from '../button/Button';
import { QuestionCategory } from '../../types/QuestionCategory';
import getQuestionCategoryImage from '../../utils/getQuestionCategoryImage';

interface CategoryTileProps {
    category: QuestionCategory;
  style?: React.CSSProperties;
}

const CategoryTile = ({ 
  category,
  style
}: CategoryTileProps) => {

    const image = getQuestionCategoryImage(category);

  return (
    <div className={styles.container} style={style}>
      {image && (
        <div className={styles.imageWrapper}>
            {image}
        </div>
      )}
      <div className={styles.content}>
        <h3 className={styles.title}>{category.name}</h3>
        <p className={styles.description}>{category.description}</p>
        <Button isBlack={true} withArrow={true} href={`/visualisation/${category.id}`}>
          Voir les questions
        </Button>
      </div>
    </div>
  );
};

export default CategoryTile;
