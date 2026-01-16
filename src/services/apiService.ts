export const fetchSpacesStatus = async () => {
    const response = await fetch('http://127.0.0.1:5000/detailed_spaces_status');
    return await response.json();
  };
  
  export const fetchPieData = async () => {
    const response = await fetch('http://127.0.0.1:5000/spaces_status');
    return await response.json();
  };
  
  export const controlVideoAction = async (action: string) => {
    return await fetch('http://127.0.0.1:5000/control_video', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action }),
    });
  };
  