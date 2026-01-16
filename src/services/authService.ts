export const login = async (email: string, password: string) => {
    const response = await fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await response.json();
    console.log("Respuesta del servidor:", data); // 🔍 Verifica que se recibe bien
  
    if (response.ok) {
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user)); 
      console.log("Token guardado en localStorage:", localStorage.getItem('token')); // 🔍 Verifica que se guarda
  
      return data;
    } else {
      throw new Error(data.message || 'Error en el inicio de sesión');
    }
  };
  
  
  export const logout = async () => {
    const token = localStorage.getItem('token');
  
    if (token) {
      await fetch('http://127.0.0.1:5000/logout', {
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
    // TEMPORAL: Siempre retorna true para permitir navegación sin login
    return true;
    // return !!localStorage.getItem('token');
  };
  
  
