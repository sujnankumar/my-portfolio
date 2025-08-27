export const fadeInUp = {
  initial: { opacity: 0, transform: 'translateY(60px)' },
  animate: { opacity: 1, transform: 'translateY(0px)' },
  transition: 'all 0.6s ease-out'
};

export const fadeInLeft = {
  initial: { opacity: 0, transform: 'translateX(-60px)' },
  animate: { opacity: 1, transform: 'translateX(0px)' },
  transition: 'all 0.6s ease-out'
};

export const fadeInRight = {
  initial: { opacity: 0, transform: 'translateX(60px)' },
  animate: { opacity: 1, transform: 'translateX(0px)' },
  transition: 'all 0.6s ease-out'
};

export const scaleIn = {
  initial: { opacity: 0, transform: 'scale(0.8)' },
  animate: { opacity: 1, transform: 'scale(1)' },
  transition: 'all 0.5s ease-out'
};