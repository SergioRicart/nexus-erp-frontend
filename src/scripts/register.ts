import { registerUser } from "@services/auth.service";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    if (!(form instanceof HTMLFormElement)) return;

    form.addEventListener("submit", async (e: Event) => {
        e.preventDefault();

        const formData = new FormData(form);

        const data = {
            name: formData.get("fullName") as string,
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        };

        try {
            await registerUser(data);
            window.location.href = "/dashboard";
        } catch (err: any) {
            alert(err?.message || "Error al registrar usuario");
        }
    });
});
