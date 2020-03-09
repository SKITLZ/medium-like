/* eslint-disable */
import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignLanguage, faEdit, faTrashAlt, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSignLanguage, faEdit, faTrashAlt, faArrowLeft, faArrowRight);

Vue.component('fa-icon', FontAwesomeIcon);
