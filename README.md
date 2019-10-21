# browniu-app

> 标准配置应用模版

[![NPM](https://img.shields.io/npm/v/browniu-app.svg)](https://www.npmjs.com/package/react-autocomplete) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo
![demo](./static/logo.svg)

## 可复用逻辑
### gh-pages
```json
//package.json
"script":{
  "deploy": "yarn build && gh-pages -d build"
}
```

### classnames
```JavaScript
import cn from 'classnames'
//...
<div className={cn(styles.root, 'browniu-app-root')}></div>
//...
```

## Update
### 0.0.1 20191020
* 初始化

## License

MIT © [browniu](https://github.com/browniu)
