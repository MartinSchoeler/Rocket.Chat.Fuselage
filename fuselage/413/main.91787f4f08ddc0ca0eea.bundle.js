(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1154:function(module,exports,__webpack_require__){"use strict";__webpack_require__(55).addons.setConfig({refs:{}})},1159:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(12);var colors=__webpack_require__(332),public_api=__webpack_require__(55),create=__webpack_require__(491),package_0=__webpack_require__(333),logo=__webpack_require__.p+"static/media/logo.d78c4948.svg";public_api.addons.setConfig({theme:Object(create.create)({base:"light",brandTitle:package_0.name,brandImage:logo,brandUrl:package_0.homepage,colorPrimary:colors.n500,colorSecondary:colors.b500})})},332:function(module){module.exports=JSON.parse('{"n100":"#f7f8fa","n200":"#f2f3f5","n300":"#eeeff1","n400":"#e4e7ea","n500":"#cbced1","n600":"#9ea2a8","n700":"#6c727a","n800":"#2f343d","n900":"#1f2329","b100":"#e8f2ff","b200":"#d1ebfe","b300":"#76b7fc","b400":"#549df9","b500":"#1d74f5","b600":"#095ad2","b700":"#10529e","b800":"#01336b","b900":"#012247","g100":"#e5fbf4","g200":"#c0f6e4","g300":"#96f0d2","g400":"#6ce9c0","g500":"#2de0a5","g600":"#1ecb92","g700":"#19ac7c","g800":"#158d65","g900":"#106d4f","r100":"#fddade","r200":"#fbb5be","r300":"#f98f9d","r400":"#f76a7d","r500":"#f5455c","r600":"#db0c27","r700":"#b30a20","r800":"#8b0719","r900":"#630512","y100":"#fff6d6","y200":"#ffecad","y300":"#ffe383","y400":"#ffd95a","y500":"#ffd031","y600":"#f3be08","y700":"#dfac00","y800":"#b68d00","y900":"#8e6d00","p100":"#f9effc","p200":"#edd0f7","p300":"#dca0ef","p400":"#ca71e7","p500":"#9f22c7","p600":"#7f1b9f","p700":"#5f1477","p800":"#4a105d","p900":"#350b42","o100":"#fde8d7","o200":"#fad1b0","o300":"#f7b27b","o400":"#f59b53","o500":"#f38c39","o600":"#e26d0e","o700":"#bd5a0b","o800":"#974809","o900":"#713607","white":"#ffffff"}')},333:function(module){module.exports=JSON.parse('{"name":"@rocket.chat/fuselage","version":"0.23.0","author":{"name":"Rocket.Chat","url":"https://rocket.chat/"},"license":"MIT","homepage":"https://github.com/RocketChat/Rocket.Chat.Fuselage#readme","repository":{"type":"git","url":"git+https://github.com/RocketChat/Rocket.Chat.Fuselage.git","directory":"packages/fuselage"},"bugs":{"url":"https://github.com/RocketChat/Rocket.Chat.Fuselage/issues"},"main":"index.js","types":"fuselage.d.ts","files":["/dist","/fuselage.d.ts","/index.js"],"publishConfig":{"access":"public"},"scripts":{"start":"webpack --watch --mode development","storybook":"start-storybook -p 6006","build":"run-s .:build:clean .:build:dev .:build:prod",".:build:clean":"rimraf dist",".:build:prod":"webpack --mode production",".:build:dev":"webpack --mode development","lint":"run-s .:lint:eslint .:lint:stylelint",".:lint:eslint":"eslint src",".:lint:stylelint":"stylelint \'src/**/*.scss\'","lint-fix":"run-s .:lint-fix:eslint .:lint-fix:stylelint",".:lint-fix:eslint":"eslint --fix src",".:lint-fix:stylelint":"stylelint --fix \'src/**/*.scss\'","lint-staged":"lint-staged","test":"jest --runInBand","build-storybook":"run-s .:build-storybook:jest-results .:build-storybook:build-storybook",".:build-storybook:jest-results":"jest --runInBand --json --outputFile .storybook/jest-results.json",".:build-storybook:build-storybook":"cross-env NODE_ENV=production build-storybook","update-storybook":"run-s .:update-storybook:build-storybook .:update-storybook:loki-update",".:update-storybook:build-storybook":"run-s build-storybook",".:update-storybook:loki-update":"loki update --chromeDockerImage=chinello/alpine-chrome:latest --chromeFlags=\'--headless --no-sandbox --disable-gpu --disable-features=VizDisplayCompositor\' --verboseRenderer --requireReference --reactUri file:./storybook-static","prettier-format":"prettier \'src/**/*.{ts,tsx,js,jsx}\' --write","loki:test":"loki test --chromeDockerImage=chinello/alpine-chrome:latest --chromeFlags=\'--headless --no-sandbox --disable-gpu --disable-features=VizDisplayCompositor\' --verboseRenderer --requireReference --reactUri file:./storybook-static"},"peerDependencies":{"@rocket.chat/fuselage-hooks":"*","@rocket.chat/fuselage-polyfills":"*","@rocket.chat/icons":"*","react":"^17.0.2","react-dom":"^17.0.2"},"dependencies":{"@rocket.chat/css-in-js":"workspace:packages/css-in-js","@rocket.chat/fuselage-tokens":"workspace:packages/fuselage-tokens","@rocket.chat/memo":"workspace:packages/memo","invariant":"^2.2.4","react-keyed-flatten-children":"^1.3.0"},"devDependencies":{"@babel/core":"^7.11.5","@babel/eslint-parser":"^7.12.1","@babel/plugin-proposal-class-properties":"^7.10.4","@babel/plugin-transform-runtime":"^7.11.5","@babel/preset-env":"^7.11.5","@babel/preset-react":"^7.10.4","@rocket.chat/eslint-config":"^0.4.0","@rocket.chat/eslint-config-alt":"workspace:packages/eslint-config-alt","@rocket.chat/fuselage-hooks":"workspace:packages/fuselage-hooks","@rocket.chat/fuselage-polyfills":"workspace:packages/fuselage-polyfills","@rocket.chat/icons":"workspace:packages/icons","@rocket.chat/prettier-config":"workspace:packages/prettier-config","@storybook/addon-essentials":"^6.1.11","@storybook/addon-jest":"^6.1.11","@storybook/addon-links":"^6.1.11","@storybook/addons":"^6.1.11","@storybook/react":"^6.1.11","@storybook/source-loader":"^6.1.11","@storybook/theming":"^6.1.11","@types/jest":"^26.0.22","autoprefixer":"^10.0.1","babel-loader":"^8.1.0","caniuse-lite":"^1.0.30001151","cross-env":"^7.0.3","css-loader":"^5.2.2","cssnano":"^4.1.10","eslint":"^7.24.0","eslint-plugin-mdx":"^1.8.2","identity-obj-proxy":"^3.0.0","jest":"^26.6.1","lint-staged":"^10.5.4","loki":"^0.25.1","normalize.css":"^8.0.1","npm-run-all":"^4.1.5","postcss":"^8.1.4","postcss-custom-properties":"^10.0.0","postcss-dir-pseudo-class":"^5.0.0","postcss-loader":"^4.0.4","postcss-logical":"^4.0.2","postcss-svg":"^3.0.0","prettier":"^2.1.2","prop-types":"^15.7.2","react":"^17.0.2","react-dom":"^17.0.2","react-live":"^2.2.2","rimraf":"^3.0.2","sass":"^1.26.10","sass-loader":"^10.0.1","style-loader":"^2.0.0","stylelint":"^13.7.0","stylelint-order":"^4.1.0","stylelint-prettier":"^1.1.2","stylelint-scss":"^3.18.0","ts-jest":"^26.5.1","ts-loader":"^8.0.17","typescript":"^4.1.5","webpack":"^5.2.0","webpack-bundle-analyzer":"^3.8.0","webpack-cli":"^4.1.0"},"loki":{"configurations":{"chrome.laptop":{"target":"chrome.docker","width":1366,"height":768,"deviceScaleFactor":1,"mobile":false,"fitWindow":false},"chrome.iphone7":{"target":"chrome.docker","preset":"iPhone 7"}}}}')},502:function(module,exports,__webpack_require__){__webpack_require__(503),__webpack_require__(1159),__webpack_require__(691),__webpack_require__(1101),__webpack_require__(1103),__webpack_require__(1106),__webpack_require__(1136),__webpack_require__(1141),__webpack_require__(1144),__webpack_require__(1148),module.exports=__webpack_require__(1154)},578:function(module,exports){}},[[502,1,2]]]);