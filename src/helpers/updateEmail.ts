export const updateEmail = async (email: string) => {
  try {
    const res = await fetch("https://api.jsonbin.io/v3/b/65ce31f01f5677401f2fbc65", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": "$2a$10$B0ehqORfl1CJ00/pjQOev.1N19CDVUxxGqSpeSzN2XH6qzGL.xFCS"
      },
      body: JSON.stringify({ "email": email })
    });

    if (!res.ok) {
      throw new Error('Failed to update email.');
    }

    const {record} = await res.json();
    console.log("Email updated successfully:", record);
  } catch (error) {
    console.error("Error:", error);
  }
};
