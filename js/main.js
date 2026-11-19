import { header } from "./layout/header/index.js";
import { home } from "./pages/home/index.js";

document.addEventListener("DOMContentLoaded", () => {
    header();
    home();
})