import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faLinkedinIn, faGithub, faSpotify, faVuejs, faDocker, faEnvira, faLinux, faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {faBars, faXmark, faAt, faLaptopCode, faLeaf, faDatabase, faTerminal, faFilePdf } from "@fortawesome/free-solid-svg-icons";


library.add(
    faBars,
    faXmark,
    faLinkedinIn,
    faGithub,
    faSpotify,
    faAt,
    faLaptopCode,
    faVuejs,
    faLeaf,
    faDocker,
    faDatabase,
    faTerminal,
    faFilePdf,
    faEnvira,
    faLinux,
    faJs
);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');

