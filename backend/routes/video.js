import { Router } from "express";
import { VideosController } from "../controllers/videos.js";
export const videoRoutes = Router();

//mostrar todos los videos
videoRoutes.get("/", VideosController.getVideos);

//mostrar video por id
videoRoutes.get("/:id", VideosController.getVideoById);

//agregar videos
videoRoutes.post("/", VideosController.addVideo);

//actualizar videos
videoRoutes.patch("/:id", VideosController.updateVideo);

//eliminar videos
videoRoutes.delete("/:id", VideosController.deleteVideo);
