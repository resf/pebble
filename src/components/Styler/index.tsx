import React, { ReactNode } from 'react';
import globalStyles from '../../globalStyles';

export const Styler = ({ children }: { children?: ReactNode | ReactNode[] }) => {
  globalStyles();
  return (<>{children}</>);
};
