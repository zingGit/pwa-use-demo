
//注册线程 
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js', {scope: '/'})
      .then(function (registration) {
        // 注册成功
        console.log('ServiceWorker registration successful with scope: ', registration.scope)
      })
      .catch(function (err) {
        // 注册失败:(
        console.log('ServiceWorker registration failed: ', err)
      })
  })
}
// 无论以何种方式安装 PWA 该事件都会触发
window.addEventListener('appinstalled', (evt) => {
  console.log('应用安装');
})
