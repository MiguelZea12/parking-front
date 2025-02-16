export interface Usuario {
    id: number;
    cedula: string;
    nombre: string;
    apellido: string;
    telefono?: string;
    direccion?: string;
    fecha_nacimiento?: string;
    email?: string;
  }
  
  const API_URL = 'https://3kfc8nmn-5000.use.devtunnels.ms';
  
  export const getUsuarios = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/usuarios`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Error al obtener usuarios');
    }
    
    return response.json();
  };
  
  export const createUsuario = async (usuario: Omit<Usuario, 'id'>) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/usuarios`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    });
    
    if (!response.ok) {
      throw new Error('Error al crear usuario');
    }
    
    return response.json();
  };
  
  export const updateUsuario = async (id: number, usuario: Partial<Usuario>) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/usuarios/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    });
    
    if (!response.ok) {
      throw new Error('Error al actualizar usuario');
    }
    
    return response.json();
  };
  
  export const deleteUsuario = async (id: number) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/usuarios/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Error al eliminar usuario');
    }
    
    return response.json();
  };