# vue-cli-plugin-cf-pkg  

将你的vue项目打包为cloudflare workers的js中  

并且不需要pro的KV文件储存（文件存在js里）  

使用方法：  
1. `vue add cf-pkg`，完成之后你会看到生成了一个cf文件夹  
2. `yarn build`或者`npm run build`  
3. 进入cf文件夹后`wrangler preview`即可预览  
4. 配置wrangler.toml后`wrangler publish`即可发布到你的cf账号下w  

TODO:  
1. 增加api系统，使worker除了能返回前端内容，还能作为后端处理请求ww  