<?php

use Illuminate\Http\Request;

//Route::get('/user', 'Auth\LoginController@get')->middleware('auth:api');
//Route::middleware('auth:api')->get('/user', 'Auth\LoginController@get');

Route::post('register', 'Auth\UserController@register');
Route::post('login', 'Auth\UserController@login');
Route::get('open', 'DataController@open');

Route::group(['middleware' => ['jwt.verify']], function () {
    Route::get('user', 'Auth\UserController@getAuthenticatedUser');
    Route::get('closed', 'DataController@closed');
});
