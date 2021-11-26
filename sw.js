
/** 
 * 这个模块主要是用来做缓存管理的
*/
self.addEventListener('install', function(e) {
    console.log('install success')
  });
/** 
 * 这里拦截网络请求 如果没网就拉取本地缓存
 * 暂时没做 
 */
self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
});
  