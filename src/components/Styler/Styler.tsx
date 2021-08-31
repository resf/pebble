import React, { ReactNode } from 'react';
import globalStyles from '../../globalStyles';

export default ({ children }: { children?: ReactNode | ReactNode[] }) => {
  globalStyles();
  return (<>{children}</>);
};
