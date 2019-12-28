<?php

use Illuminate\Http\Request;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

//Route::middleware('auth:api')->get('/user/get', 'UserController@get');
