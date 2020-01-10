<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Shop</title>
        <meta property="og:title" content="__OG_TITLE__" />
        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div id="app"></div>
        <script src="{{mix('js/app.js')}}"></script>
        {{--<script>
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('js/service-worker.js').then(function(registration) {
                  // Registration was successful
                  console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function(err) {
                  // registration failed :(
                  console.log('ServiceWorker registration failed: ', err);
                }).catch(function(err) {
                  console.log(err)
                });
              });
            } else {
              console.log('service worker is not supported');
            }
          </script> --}}
    </body>
</html>