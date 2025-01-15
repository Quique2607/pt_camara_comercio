export const registerAccess = (url, hora_web = null, hora_video = null) => {
  try {
    const agente = navigator.userAgent;
    const navigate = { url, agente, hora_web, hora_video };
    fetch("http://localhost:3320/navegacion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(navigate),
    });

    console.log("Acceso registrado");

  } catch (error) {
    console.error("Error al registrar el acceso", error);
  }
};
