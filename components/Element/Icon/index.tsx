import classes from './index.module.scss';

interface IconProps {
  label: string;
  children?: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({ label, children }) => {
  return (
    <div className={classes.container} data-label={label}>
      {children}
    </div>
  );
};

export default Icon;
