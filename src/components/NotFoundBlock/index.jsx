import React from 'react';
import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  return (
    <div className={styles.center}>
      <h1>Ничего не найдено :(</h1>
      <p>
        К сожалению данная страница отсутствует в нашем магазине
      </p>
    </div>
  );
};
