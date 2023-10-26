import express from "express";
import morgan from "morgan";
import cors from "cors";
import fileUpload from "express-fileupload";

// Routes
import FileRoutes from "./routes/file.routes";
import cliRoutes from "./routes/clientes.routes";
import usuRoutes from "./routes/usuarios.routes";
import usuReser from "./routes/reservas.routes";
import usuLab from "./routes/laboratorios.routes";

const app = express();

// Settings
app.set("port", 4100);
app.use(fileUpload());

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// CORS
app.use(cors());

// Routes
app.use("/api/file", FileRoutes);
app.use("/api/clientes", cliRoutes);
app.use("/api/usuarios", usuRoutes);
app.use("/api/reservas", usuReser);
app.use("/api/laboratorios", usuLab);



export default app;