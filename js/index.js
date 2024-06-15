import { Render } from "./render.js";
import { superFuncion } from "./superFuncion.js";

const app = new Render("app");

const JSON_LOCAL ="productos.json";

const API_ICE="https://api.sampleapis.com/coffee/iced";

app.fetchData(JSON_LOCAL, superFuncion);