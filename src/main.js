import { createPinia } from "pinia";

import { createApp } from 'vue'
import './style/style.css'
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export const pinia = createPinia();

import Btn from "@/components/layout/Btn.vue";
import Footer from "@/components/layout/Footer.vue";
import Header from "@/components/layout/Header.vue";
import Loading from "@/components/layout/Loading.vue";
import NoData from "@/components/layout/NoData.vue";
import Page from "@/components/layout/Page.vue";
app.component("Btn", Btn);
app.component("Footer", Footer);
app.component("Header", Header);
app.component("Loading", Loading);
app.component("NoData", NoData);
app.component("Page", Page);

import Label from "@/components/type/Label.vue";
import Title from "@/components/type/Title.vue";
app.component("Label", Label);
app.component("Title", Title);

import Checkbox from "@/components/forms/Checkbox.vue";
app.component("Checkbox", Checkbox);

import Modal from "@/components/modal/Modal.vue";
app.component("Modal", Modal);


app.use(pinia);
app.use(router);
app.use(VueSweetalert2);


app.mount("#app");

