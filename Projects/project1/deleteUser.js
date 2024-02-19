async function deleteFunction(i) {
    try {
        const response = await fetch("http://localhost:3000/Users/" + i, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error("Failed to delete. Status:" +response.status);
        }

        console.log("Deletion successful", i);
    } catch (error) {
        console.error("Error deleting:", error.message);
    }
}
