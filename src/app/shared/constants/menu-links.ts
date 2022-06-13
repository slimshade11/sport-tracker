export const MenuLinks: any = {
  unauthenticatedLinks: [
    {
      label: 'Login',
      icon: 'pi pi-fw pi-sign-in',
      routerLink: '/login',
    },
  ],
  authenticatedLinks: [
    {
      label: 'Training',
      icon: 'pi pi-fw pi-pencil',
      routerLink: '/training',
    },
    {
      label: 'Logout',
      icon: 'pi pi-fw pi-sign-out',
      routerLink: '/',
    },
  ],
};
