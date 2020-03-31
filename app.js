const fs = require('fs');
fs.readdir('./src',function(err,files){
    if(err){
        return err;
    }
    if(files.length !=0){
        files.forEach((item)=>{
            let path = './src/'+item;
            //判断文件的状态，用于区分文件名/文件夹
            fs.stat(path,function(err,status){
                if(err){
                    return err;
                }
                let isFile = status.isFile();//是文件
                let isDir = status.isDirectory();//是文件夹
                if(isFile){
                    fs.readFile(path, 'utf8', (err,data) => {
                        if (data.indexOf("@include")>0) {
                            var str = data.match(/@(\S*)@/g)
                            if(str.length > 0){
                                const promises = replayhtmls(str,data)
                                promises.then(res => {
                                  console.log(res)
                                  fs.writeFile('./build/'+item, res, 'utf8', (err) => {
                                        if (err) throw err;
                                        console.log('success done');
                                  });
                                })
                            }
                        }
                    });
                }
                if(isDir){
                    console.log("文件夹："+item);
                }
            });
        });
    }
});
function asay (publicfile,data){
     return new Promise(function (resolve, reject) {
        fs.readFile('./public/'+publicfile, 'utf8', (err,publicdata) => {
            posthtml = data.replace('@include('+publicfile+')@',publicdata)
            resolve()
        })
     })
}
async function replayhtmls(html,data){
    for (var i = 0; i < html.length; i++) {
        let start = html[i].indexOf("(");
        let end = html[i].indexOf(")");
        let publicfile = html[i].substring(start+1,end)
        if(i==0){
            await asay(publicfile,data)
        }else{
            await asay(publicfile,posthtml)
        }   
    }
    return posthtml
}