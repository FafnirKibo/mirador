/** import Mirador from 'mirador/dist/es/src/index';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import {miradorDownloadPlugin} from 'mirador-dl-plugin';
import textOverlayPlugin from 'mirador-textoverlay/es';
import canvasNavigationPlugin from 'mirador-canvasnavigation/es';
import keyboardShortcutsPlugin from 'mirador-keyboardshortcuts/es';
import miradorSharePlugins from 'mirador-share-plugin';

const config = window.miradorInstance || {
  /**
   * workspaceControlPanel: {
   *     enabled: false,
   * },
   */
/**  keyboardShortcuts: {
    // Global config, see available settings below
    shortcutMapping: {
      "navigate-to-first-canvas": "home",
      "toggle-fullscreen": "f",
    },
  },
  miradorSharePlugin: {
    dragAndDropInfoLink: 'https://iiif.io',
    embedOption: {
      enabled: true,
      embedUrlReplacePattern: [
        /.*\.edu\/(\w+)\/iiif\/manifest/,
        'https://embed.stanford.edu/iframe?url=https://purl.stanford.edu/$1',
      ],
      syncIframeDimensions: {
        height: { param: 'maxheight' },
      },
    },
    shareLink: {
      enabled: true,
      manifestIdReplacePattern: [
        /\/iiif\/manifest/,
        '',
      ],
    },
  },
};

const miradorViewer = Mirador.viewer(config, [
  miradorImageToolsPlugin,
  miradorDownloadPlugin,
  textOverlayPlugin,
  canvasNavigationPlugin,
  miradorSharePlugins,
  keyboardShortcutsPlugin,
]);

export default miradorViewer; **/
//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

import Mirador from 'mirador/dist/es/src/index';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import textOverlayPlugin from 'mirador-textoverlay/es';
import canvasNavigationPlugin from 'mirador-canvasnavigation/es';
import canvasLinkPlugin from 'mirador-canvaslink/es';
import keyboardShortcutsPlugin from 'mirador-keyboardshortcuts/es';
import miradorSharePlugins from 'mirador-share-plugin';
import downloadDialogPlugin from 'mirador-downloaddialog/es';
import miradorDownloadPlugin from 'mirador-dl-plugin';
import imageCropperPlugin from 'mirador-imagecropper/es';

const config = window.miradorInstance || {
  workspaceControlPanel: {
    enabled: false,
  },
  keyboardShortcuts: {
    shortcutMapping: {
      "navigate-to-first-canvas": "home",
      "toggle-fullscreen": "f",
    },
  },
  miradorSharePlugin: {
    dragAndDropInfoLink: 'https://iiif.io',
    embedOption: {
      enabled: true,
      embedUrlReplacePattern: [
        /.*\.edu\/(\w+)\/iiif\/manifest/,
        'https://embed.stanford.edu/iframe?url=https://purl.stanford.edu/$1',
      ],
      syncIframeDimensions: {
        height: { param: 'maxheight' },
      },
    },
    shareLink: {
      enabled: true,
      manifestIdReplacePattern: [
        /\/iiif\/manifest/,
        '',
      ],
    },
  },
};

const miradorViewer = Mirador.viewer(config, [
  miradorImageToolsPlugin,
  textOverlayPlugin,
  canvasNavigationPlugin,
  canvasLinkPlugin,
  keyboardShortcutsPlugin,
  miradorSharePlugins,
  miradorDownloadPlugin,
  imageCropperPlugin,
  downloadDialogPlugin
]);

export default miradorViewer;
/**
export default {
    target: 'WindowTopBar',
    mode: 'add',
    name: 'MiradorParameterPlugin',
    component: WorkspaceMenuButton,
    mapDispatchToProps: mapDispatchToProps,
    mapStateToProps: mapStateToProps,
    reducers: {
        //windowDialogs: shareDialogReducer
    }
};
var shareDialogReducer = function shareDialogReducer() {
var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
var action = arguments[1];

if (action.type === 'OPEN_WINDOW_DIALOG') {
var _extends2;

return _extends({}, state, (_extends2 = {}, _extends2[action.windowId] = {
openDialog: action.dialogType
}, _extends2));
}

if (action.type === 'CLOSE_WINDOW_DIALOG') {
var _extends3;

return _extends({}, state, (_extends3 = {}, _extends3[action.windowId] = {
openDialog: null
}, _extends3));
}
return state;
};

 **/


