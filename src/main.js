import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faLinkedinIn, faGithub, faSpotify, faVuejs, faDocker} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {faBars, faXmark, faAt, faLaptopCode, faLeaf, faDatabase, faTerminal} from "@fortawesome/free-solid-svg-icons";


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
    faTerminal
);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');

