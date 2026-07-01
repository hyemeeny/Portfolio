import clsx from 'clsx';
import s from '@/components/Modal/Modal.module.scss';

interface SubTitleProps {
  children: React.ReactNode;
  participation?: string;
}

const SubTitle = ({ children, participation }: SubTitleProps) => (
  <h2 className={clsx(s.subTitle, { [s.withMeta]: !!participation })}>
    {children}
    {participation && <span className={s.participation}>{participation}</span>}
  </h2>
);

export default SubTitle;
