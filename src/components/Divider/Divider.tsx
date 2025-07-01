import styles from './Divider.module.scss';

type DividerProps = {
  className?: string;
};

export default function Divider({ className = '' }: DividerProps) {
  return <hr className={`${styles.divider} ${className}`} />;
}
