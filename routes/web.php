<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Route::get('/{path?}', function () {
//     return view('welcome');
// });

Route::get( '/{path?}', function(){
    return "Ok!";
} )->where('path', '.*');

// Route::get('/{any}', function () {
//     return view('welcome');
// })->where('any', '.*');