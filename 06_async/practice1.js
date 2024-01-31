function call(name) {
    return new Promise((resolve,reject)=>{

        setTimeout(function () {
          console.log(name);
            resolve(name);
        }, 1000);

    })
}

function back() {
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
          console.log("back");
          resolve("back");
        }, 1000);

    })
}

function hell() {
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
         resolve("callback hell");
        }, 1000);
        
    })
}


call("kim").then((name)=>{
    console.log(name+"반가워");
    return back();
}).then((tex)=>{
    console.log(tex+"을 실행했구나")
    return hell();
}).then((msg)=>{
    console.log("여기는"+msg)
})


async function execute() {
  const name = await call("kim");
  console.log(name + "반가워");

  const text = await back();
  console.log(text + "을 실행했구나");

  const message = await hell();
  console.log("여기는 " + message);
}

execute();

