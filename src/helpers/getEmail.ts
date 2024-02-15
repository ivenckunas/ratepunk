export const getEmail = async () => {

  try {
    const response = await fetch("https://api.jsonbin.io/v3/b/65ce31f01f5677401f2fbc65", {
      headers: {
        "X-Master-Key": "$2a$10$B0ehqORfl1CJ00/pjQOev.1N19CDVUxxGqSpeSzN2XH6qzGL.xFCS"
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const {record} = await response.json();

    console.log('last entered email ===', record);
    
  } catch (error) {
    console.log('error ===', error);
  }
}



