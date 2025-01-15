import NavegacionModel from "../models/navegacion.js";

export class NavegacionController {
    static async getNavigation(req, res) {
        try {
            const navigate = await NavegacionModel.getNavigation();
            return res.json(navigate);
        } catch (error) {
            console.error("Error en el servidor",error);
            return res.status(500).json({ message: error.message });
        }
    }

    static async addNavigation(req, res) {
        try {
            const navigate = req.body;
            const result = await NavegacionModel.addNavigation(navigate);
            return res.json(result);
        } catch (error) {
            console.error("Error en el servidor",error);
            return res.status(500).json({ message: error.message });
        }
    }
}