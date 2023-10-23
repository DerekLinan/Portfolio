import { FC, ReactNode } from 'react';
import { NavButtonStyle } from './NavStyles';
import { ScrollTo } from '../../common/utils';
import { navItem, navTrans } from './NavbarAnimations';

type Props = {
  scrollTo: string;
  children: ReactNode;
};

export const NavButton: FC<Props> = ({ scrollTo, children }) => {
  return (
    <NavButtonStyle onClick={() => ScrollTo(scrollTo)} variants={navItem} transition={navTrans}>
      <div>{children}</div>
    </NavButtonStyle>
  );
};
