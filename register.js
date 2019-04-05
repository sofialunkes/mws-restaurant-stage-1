if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(req){
      console.log('ServiceWorker registered');
    }).catch (function(err){
      console.log(err);
    })
  };