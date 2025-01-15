import { generateRandomId } from "../utils/funciones.js";
import con from "../conection/conexion.js";

export class NavegacionModel {
    static async getNavigation() {
        try {
            const [rows] = await con.query("SELECT * FROM navegacion");
            return rows;
        } catch (error) {
            throw error;
        }
    }

    static async addNavigation(navigate) {
        try {
            const id = generateRandomId(5);
            const { url, agente, hora_web, hora_video } = navigate;
            await con.query("INSERT INTO navegacion (id,url, agente, hora_web, hora_video) VALUES (?, ?,?,?,?)", [id, url, agente, hora_web, hora_video]);
            return { message: "Datos de Navegacion agregada" };
        } catch (error) {
            throw error;
        }
    }
}

export default NavegacionModel;