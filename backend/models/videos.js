import { generateRandomId } from "../utils/funciones.js";
import con from  "../conection/conexion.js";

export class VideoModel{
    static async getVideos(){
        try {
            const [rows] = await con.query("SELECT * FROM video");
            return rows;
        } catch (error) {
            throw error;
        }
    }

    static async getVideoById(id){
        try {
            const [rows] = await con.query("SELECT * FROM video WHERE id = ?", id);
            return rows;
        } catch (error) {
            throw error;
        }
    }

    static async addVideo(video){
        try {
            const id = generateRandomId(10);
            const {nombre,tema, url} = video;
            await con.query("INSERT INTO video (id,nombre,tema, url) VALUES (?, ?,?,?)", [id,nombre,tema, url]);
            return { message: "Video agregado" };
        } catch (error) {
            throw error;
        }
    }

    static async updateVideo(id, video){
        try {
            const {nombre,tema, url} = video;
            const result = await con.query("UPDATE video SET nombre = ?, tema = ?, url = ? WHERE id = ?", [nombre,tema, url, id]);

            if(result[0].affectedRows === 0) {
                return { message: "Video no encontrado" };
            }

            return { message: "Video actualizado" };
        } catch (error) {
            throw error;
        }
    }

    static async deleteVideo(id){
        try {
            const result = await con.query("DELETE FROM video WHERE id = ?", id);

            if(result[0].affectedRows === 0) {
                return { message: "Video no encontrado" };
            }

            return { message: "Video eliminado" };
        } catch (error) {
            throw error;
        }
    }

    static async getVideosByTema(tema){
        try {
            const [rows] = await con.query("SELECT * FROM video WHERE tema = ?", tema);
            return rows;
        } catch (error) {
            throw error;
        }
    }

    static async getVideosRandom() {
        try {
            const [ids] = await con.query("SELECT id FROM video");
            console.log("IDs obtenidos:", ids);

            if (ids.length === 0) {
                return [];
            }

            const randomIndex = Math.floor(Math.random() * ids.length);
            const randomId = ids[randomIndex].id;
            console.log("ID aleatorio seleccionado:", randomId);

            const [video] = await con.query("SELECT * FROM video WHERE id = ?", [randomId]);
            console.log("Video encontrado:", video);

            return video;
        } catch (error) {
            throw error;
        }
    }

    
}