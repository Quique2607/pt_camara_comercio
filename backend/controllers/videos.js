import { VideoModel } from "../models/videos.js";

export class VideosController {
    static async getVideos(req, res) {
        try {
            const videos = await VideoModel.getVideos();
            res.json(videos);
        } catch (error) {
            console.error("Error en el servidor",error);
            res.status(500).json({ message: error.message });
        }
    }

    static async getVideoById(req, res) {
        try {
            const video = await VideoModel.getVideoById(req.params.id);
            res.json(video);
        } catch (error) {
            console.error("Error en el servidor",error);
            res.status(500).json({ message: error.message });
        }
    }

    static async addVideo(req, res) {
        try {
            const video = req.body;
            const result = await VideoModel.addVideo(video);
            res.json(result);
        } catch (error) {
            console.error("Error en el servidor",error);
            res.status(500).json({ message: error.message });
        }
    }

    static async updateVideo(req, res) {
        try {
            const video = req.body;
            const result = await VideoModel.updateVideo( req.params.id, video);
            res.json(result);
        } catch (error) {
            console.error("Error en el servidor",error);
            res.status(500).json({ message: error.message });
        }
    }

    static async deleteVideo(req, res) {
        try {
            const result = await VideoModel.deleteVideo( req.params.id);
            res.json(result);
        } catch (error) {
            console.error("Error en el servidor",error);
            res.status(500).json({ message: error.message });
        }
    }
}