const hookMethod = function (event, methodName) {
  console.log('hook '+methodName)
  if (event){
    console.log(event)
  }
}

const proxy = (obj, methodName, custom) => {
  if (obj[methodName]) {
    let method = obj[methodName]
    obj[methodName] = function (event) {
      custom.call(this, event, methodName)
      method.call(this, event)
    }
  } else {
    obj[methodName] = function (event) {
      custom.call(this, event, methodName)
    }
  }
}

let _Page = Page
Page = obj => {
  proxy(obj, 'onLoad', hookMethod)
  proxy(obj, 'onShow', hookMethod)
  _Page(obj)
}