export const listAnim = {
  visible: {
    transition: { when: 'beforeChildren', delay: 0, staggerChildren: 0.05 },
  },
  hidden: { transition: { when: 'afterChildren' } },
};

export const navItem = {
  hidden: { x: 150 },
  visible: { x: 0 },
};

export const navTrans = {
  type: 'spring',
  duration: 0.25,
};
