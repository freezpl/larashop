<?php

use Illuminate\Http\Request;
Route::post('auth/administrator_login', 'Auth\AdminController@login');

///TEST///
Route::post('register', 'Auth\UserController@register');
Route::post('login', 'Auth\UserController@login');
Route::get('open', 'DataController@open');

Route::group(['middleware' => ['jwt.verify', 'role:user,admin']], 
//Route::group(['middleware' => ['jwt.verify']], 
    function () {
        Route::get('user', 'Auth\UserController@getAuthenticatedUser');
        Route::get('closed', 'DataController@closed');
});