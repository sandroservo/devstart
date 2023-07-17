import { userRoutes } from "./user.router";
import { authRoutes } from "./auth.routes";



export const routes = (app: any) => {
    userRoutes(app);
    authRoutes(app);
}