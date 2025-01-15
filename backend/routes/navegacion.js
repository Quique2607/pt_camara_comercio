import { NavegacionController } from "../controllers/navegacion.js";
import { Router } from "express";

const navigateRoutes = Router();

navigateRoutes.get("/", NavegacionController.getNavigation);

navigateRoutes.post("/", NavegacionController.addNavigation);

export default navigateRoutes;