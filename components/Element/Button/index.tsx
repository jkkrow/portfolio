import { useMemo } from 'react';

import classes from './index.module.scss';

interface ButtonProps {
  wide?: boolean;
  success?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  wide,
  success,
  invalid,
  disabled,
  onClick,
  children,
}) => {
  const buttonClasses = useMemo(() => {
    const classArray = [classes.button];

    if (wide) {
      classArray.push(classes.wide);
    }

    if (success) {
      classArray.push(classes.success);
    }

    if (invalid) {
      classArray.push(classes.invalid);
    }

    return classArray.join(' ');
  }, [wide, success, invalid]);

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
