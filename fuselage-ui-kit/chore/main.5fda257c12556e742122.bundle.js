(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1147:function(module,exports,__webpack_require__){"use strict";__webpack_require__(59).addons.setConfig({refs:{}})},1152:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(10);var colors=__webpack_require__(332),public_api=__webpack_require__(59),create=__webpack_require__(488),package_0=__webpack_require__(333),logo=__webpack_require__.p+"static/media/logo.d78c4948.svg";public_api.addons.setConfig({theme:Object(create.create)({base:"light",brandTitle:package_0.name,brandImage:logo,brandUrl:package_0.homepage,colorPrimary:colors.n500,colorSecondary:colors.b500})})},332:function(module){module.exports=JSON.parse('{"n100":"#f7f8fa","n200":"#f2f3f5","n300":"#eeeff1","n400":"#e4e7ea","n500":"#cbced1","n600":"#9ea2a8","n700":"#6c727a","n800":"#2f343d","n900":"#1f2329","b100":"#e8f2ff","b200":"#d1ebfe","b300":"#76b7fc","b400":"#549df9","b500":"#1d74f5","b600":"#095ad2","b700":"#10529e","b800":"#01336b","b900":"#012247","g100":"#e5fbf4","g200":"#c0f6e4","g300":"#96f0d2","g400":"#6ce9c0","g500":"#2de0a5","g600":"#1ecb92","g700":"#19ac7c","g800":"#158d65","g900":"#106d4f","r100":"#fddade","r200":"#fbb5be","r300":"#f98f9d","r400":"#f76a7d","r500":"#f5455c","r600":"#db0c27","r700":"#b30a20","r800":"#8b0719","r900":"#630512","y100":"#fff6d6","y200":"#ffecad","y300":"#ffe383","y400":"#ffd95a","y500":"#ffd031","y600":"#f3be08","y700":"#dfac00","y800":"#b68d00","y900":"#8e6d00","p100":"#f9effc","p200":"#edd0f7","p300":"#dca0ef","p400":"#ca71e7","p500":"#9f22c7","p600":"#7f1b9f","p700":"#5f1477","p800":"#4a105d","p900":"#350b42","o100":"#fde8d7","o200":"#fad1b0","o300":"#f7b27b","o400":"#f59b53","o500":"#f38c39","o600":"#e26d0e","o700":"#bd5a0b","o800":"#974809","o900":"#713607","white":"#ffffff"}')},333:function(module){module.exports=JSON.parse('{"name":"@rocket.chat/fuselage-ui-kit","version":"0.22.0","description":"UiKit elements for Rocket.Chat Apps built under Fuselage design system","homepage":"https://rocketchat.github.io/Rocket.Chat.Fuselage/","author":{"name":"Rocket.Chat","url":"https://rocket.chat/"},"license":"MIT","repository":{"type":"git","url":"git+https://github.com/RocketChat/Rocket.Chat.Fuselage.git"},"bugs":{"url":"https://github.com/RocketChat/Rocket.Chat.Fuselage/issues"},"main":"index.js","files":["index.js","dist"],"publishConfig":{"access":"public"},"scripts":{"start":"webpack --watch --mode development","storybook":"start-storybook -p 6006","build":"run-s .:build:clean .:build:dev .:build:prod",".:build:clean":"rimraf dist",".:build:dev":"webpack --mode development",".:build:prod":"webpack --mode production","lint":"eslint src","lint-fix":"eslint --fix src","lint-staged":"lint-staged","build-storybook":"cross-env NODE_ENV=production build-storybook","update-storybook":"run-s .:update-storybook:build-storybook .:update-storybook:loki-update",".:update-storybook:build-storybook":"build-storybook",".:update-storybook:loki-update":"loki update --chromeDockerImage=chinello/alpine-chrome:latest --chromeFlags=\\"--headless --no-sandbox --disable-gpu --disable-features=VizDisplayCompositor\\" --verboseRenderer --requireReference --reactUri file:./storybook-static","prettier-format":"prettier --config .prettierrc \'src/**/*\' --write","loki:test":"loki test --chromeDockerImage=chinello/alpine-chrome:latest --chromeFlags=\\"--headless --no-sandbox --disable-gpu --disable-features=VizDisplayCompositor\\" --verboseRenderer --requireReference --reactUri file:./storybook-static"},"peerDependencies":{"@rocket.chat/fuselage":"*","@rocket.chat/fuselage-hooks":"*","@rocket.chat/icons":"*","@rocket.chat/ui-kit":"*","react":"^16.13.1","react-dom":"^16.13.1"},"devDependencies":{"@babel/core":"^7.11.5","@babel/eslint-parser":"^7.12.1","@babel/plugin-proposal-class-properties":"^7.10.4","@babel/plugin-transform-runtime":"^7.11.5","@babel/preset-env":"^7.11.5","@babel/preset-react":"^7.10.4","@rocket.chat/apps-engine":"^1.17.0","@rocket.chat/eslint-config":"^0.4.0","@rocket.chat/fuselage":"^0.22.0","@rocket.chat/fuselage-hooks":"^0.22.0","@rocket.chat/icons":"^0.22.0","@rocket.chat/ui-kit":"^0.22.0","@storybook/addon-essentials":"^6.1.11","@storybook/addons":"^6.1.11","@storybook/react":"^6.1.11","@storybook/source-loader":"^6.1.11","@storybook/theming":"^6.1.11","babel-loader":"^8.1.0","cross-env":"^7.0.3","eslint":"^7.13.0","eslint-config-prettier":"^6.15.0","eslint-plugin-import":"^2.22.0","eslint-plugin-mdx":"^1.8.2","eslint-plugin-prettier":"^3.1.4","eslint-plugin-react":"^7.20.6","eslint-plugin-react-hooks":"^4.1.0","lint-staged":"^10.5.4","loki":"^0.25.1","normalize.css":"^8.0.1","npm-run-all":"^4.1.5","prettier":"^2.1.2","react":"^16.13.1","react-dom":"^16.13.1","rimraf":"^3.0.2","webpack":"^5.2.0","webpack-bundle-analyzer":"^3.8.0","webpack-cli":"^4.1.0"},"gitHead":"f8467b8ffb6f90d91b46fbcdd5dca169235916a4","dependencies":{"@rocket.chat/fuselage-polyfills":"^0.22.0"}}')},499:function(module,exports,__webpack_require__){__webpack_require__(500),__webpack_require__(1152),__webpack_require__(688),__webpack_require__(1100),__webpack_require__(1102),__webpack_require__(1105),__webpack_require__(1135),__webpack_require__(1140),__webpack_require__(1143),module.exports=__webpack_require__(1147)},575:function(module,exports){}},[[499,1,2]]]);