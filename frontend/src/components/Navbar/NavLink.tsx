import { FC, ReactNode } from 'react';
import { navItem, navTrans } from './NavbarAnimations';
import { ExternalIcon, NavLinkStyle } from './NavStyles';

type Props = {
  href: string;
  children: ReactNode;
};

export const NavLink: FC<Props> = ({ href, children }) => {
  return (
    <NavLinkStyle
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      variants={navItem}
      transition={navTrans}
    >
      <div>
        {children}
        <ExternalIcon />
      </div>
    </NavLinkStyle>
  );
};
