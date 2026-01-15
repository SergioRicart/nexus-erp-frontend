const API_URL = import.meta.env.PUBLIC_API_URL;

export async function registerUser(data: {
    fullName: string;
    email: string;
    password: string;
}) {

    console.log(API_URL);
    
    const response = await fetch(`${API_URL}/users/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
    }

    return response.json();
}