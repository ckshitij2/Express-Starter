const express=require('express')
const bodyParser=require('body-parser')
const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')
const path=require('path')
const rootDir=require('./util/path')                                                               
const app=express();

app.set('view engine','pug')
app.set('views','views')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(rootDir,"public")))

app.use((req,res,next)=>{
    if (req.url !== '/favicon.ico') {
        console.log("In the middleware");
    }
    next()
})
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes)

app.use((req,res,next)=>{
    const htmlFilePath=path.join(__dirname,'/views','error404.html')
    res.status(404).render('error404',{pageTitle:'404'})
})




app.listen(3000)
