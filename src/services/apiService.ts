export const fetchSpacesStatus = async () => {
    const response = await fetch('https://3kfc8nmn-5000.use.devtunnels.ms/detailed_spaces_status');
    return await response.json();
  };
  
  export const fetchPieData = async () => {
    const response = await fetch('https://3kfc8nmn-5000.use.devtunnels.ms/spaces_status');
    return await response.json();
  };
  
  export const controlVideoAction = async (action: string) => {
    return await fetch('https://3kfc8nmn-5000.use.devtunnels.ms/control_video', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action }),
    });
  };
  