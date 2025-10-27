const ADMIN_EMAIL = 'ict.tzg@gmail.com';
const ADMIN_PASSWORD = 'Tiger@1297';

export const adminLogin = (email: string, password: string): boolean => {
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
};

export const isAdminLoggedIn = (): boolean => {
  return sessionStorage.getItem('adminLoggedIn') === 'true';
};

export const setAdminLoggedIn = (value: boolean): void => {
  if (value) {
    sessionStorage.setItem('adminLoggedIn', 'true');
  } else {
    sessionStorage.removeItem('adminLoggedIn');
  }
};
