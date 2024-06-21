export const convertToPath = (navItem: string) => {
  if (navItem === 'Home') return '/';

  const formattedPathName = navItem.replaceAll(' ', '-').toLocaleLowerCase();
  return `/${formattedPathName}`;
};
