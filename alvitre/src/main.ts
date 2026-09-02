import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'iconify-icon'
import * as Iconify from 'iconify-icon'

import logos from '@iconify-json/logos/icons.json'
import vscodeIcons from '@iconify-json/vscode-icons/icons.json'

Iconify.addCollection(logos as Iconify.IconifyJSON)
Iconify.addCollection(vscodeIcons as Iconify.IconifyJSON)

createApp(App).mount('#app')