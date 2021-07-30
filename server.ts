import { createServer } from 'http';


// 1.创建一个http.Server
const server = createServer((req,res) => {
    // 2.设置状态码
    res.statusCode = 200
    // 3.设置响应头
    res.setHeader('Content-Type','text/html')
    // 4.返回内容
    res.end('<h1>hello</h1>')
})

server.listen(8080, () =>{
    console.log('server started, listen: 8080端口');
})