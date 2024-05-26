import styles from './webfolio-cv.module.scss';

/* eslint-disable-next-line */
export interface WebfolioCvProps {}

export function WebfolioCv(props: WebfolioCvProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebfolioCv!</h1>
    </div>
  );
}

export default WebfolioCv;
