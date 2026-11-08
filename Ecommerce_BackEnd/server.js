import http from "http"
import pool from "./db.js";

const server = http.createServer(async(req,res)=>{

    if (req.method === "GET" && req.url === "/Categories")
    {
        const result = await pool.query("SELECT name FROM categories");
             res.writeHead(200, {
                 "Content-Type": "application/json"
                    });
res.end(JSON.stringify(result.rows));
    }

})
server.listen(3000,()=>{
    console.log("The Server is running in the 3000 port")
})