const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:"development",
    entry:
    {
        index:"./src/index.js",
        addproject:"./src/addproject.js",
        storageUtils: "./src/storageutils.js"
    },
    output:{
        filename: "[name].js",
        path: path.resolve(__dirname,'dist'),
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"todolist",
            template:"./src/indextemplate.html",
            filename:"index.html",
            chunks:["storageUtils",'index']
        }),
        new HtmlWebpackPlugin({
            title:"addproject",
            template:"./src/addprojecttemplate.html",
            filename:"addproject.html",
            chunks:["storageUtils",'addproject']
        })
    ],
    devtool:"inline-source-map",
    module:{
        rules:[
            {
                test:/\.css$/i,
                use: ['style-loader', "css-loader"]
            
            },
            {
                test:/\.(png|jpg|jpeg|svg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    }
}