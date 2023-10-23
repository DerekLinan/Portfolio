/**
 * Animation properties for the parent motion divs with lists of children
 */
export const listAnim = {
  visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.15 } },
  hidden: { opacity: 0, transition: { when: 'afterChildren' } },
};

export const splashItem = {
  hidden: { opacity: 0, scale: 0, x: 500 },
  visible: { opacity: 1, scale: 1, x: 0 },
};

export const underlay = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

export function bubbleAnimation(x: number, y: number) {
  return {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: { opacity: 1, x, y },
  };
}
