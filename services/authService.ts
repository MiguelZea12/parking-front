export const login = async (email: string, password: string) => {
    const response = await fetch('https://3kfc8nmn-5000.use.devtunnels.ms/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await response.json();
  
    if (response.ok) {
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user)); 
      return data;
    } else {
      throw new Error(data.message || 'Error en el inicio de sesión');
    }
  };
  
  export const logout = async () => {
    const token = localStorage.getItem('token');
  
    if (token) {
      await fetch('https://3kfc8nmn-5000.use.devtunnels.ms/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
    }
  
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };
  
  
  export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };
