# 7niu
七牛云存储命令行。


## install
```
npm install -g 7niu
```


## api
- `7niu upload [dir]` 上传指定目录到七牛云存储
- `7niu version` 输出版本信息
- `7niu json [dir]` 在指定目录生成 `7niu.json` 模板文件
- `7niu help` 输出帮助信息



## 7niu.json
```
{
    "access_key": "your_access_key",
    "secret_key": "your_secret_key",

    // 仓库
    "bucket": "your_bucket",

    // 待上传资源的源目录，相当于`7niu.json`所在的目录
    "src": "./",

    // 上传的文件列表，支持通配符，相对于 src
    "upload": [
        "./**/*"
    ],

    // 上传的 CDN 目录
    "dest": "/test/",

    // 并行上传数量，默认10
    "parallel": 10
}
```

## example
假设当前的资源目录是这样的：
```
- static
|-- js
|   `-- app
|       |-- abc.js
|       `-- def.js
|-- css
`-- alioss.json
```
要上传的资源为`./static/js/app/*`，线上的 CDN URL 为`/example.com/abc.js`。
```
{
    ...
    upload: [
        './**/*'
    ],
    src: './static/js/app/',
    dest: '/example.com/'
}
```