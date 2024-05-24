export const directories = {
  calc: '/calc',
  home: '/home',
};

export const views = {
  dashboard: 'dashboard',
  definiteIntegrals: 'definite-integrals',
  indefiniteIntegrals: 'indefinite-integrals',
};

export const paths = {
  dashboard: `${directories.home}/${views.dashboard}`,
  definiteIntegrals: `${directories.calc}/${views.definiteIntegrals}`,
  indefiniteIntegrals: `${directories.calc}/${views.indefiniteIntegrals}`,
};
