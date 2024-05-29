const express=require('express')
const bodyParser=require('body-parser')
const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')
const path=require('path')
const rootDir=require('./util/path')                                                               
const app=express();

// When wan to use pug as a engine
// app.set('view engine','pug')

// When you use handlebars
// const { engine } = require('express-handlebars');
// app.engine('hbs',engine({
//     extname: 'hbs',
//     layoutDir:'views/layouts/',
//     defaultLayout: 'main-layout' // Disable default layout
// }))
// app.set('view engine','hbs')


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
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
