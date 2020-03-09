import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignLanguage, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSignLanguage, faEdit, faTrashAlt);

Vue.component('fa-icon', FontAwesomeIcon);
