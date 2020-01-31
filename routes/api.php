<?php

use Illuminate\Http\Request;
Route::post('auth/administrator_login', 'Auth\AdminController@login');

///TEST///
Route::post('register', 'Auth\UserController@register');
Route::post('login', 'Auth\UserController@login');

Route::get('categories/tree', 'Dashboard\CategoriesController@tree');

Route::group(['middleware' => ['jwt.verify', 'role:admin']],
function () {
    Route::post('dashboard/categories/add', 'Dashboard\CategoriesController@add');
    Route::get('user', 'Auth\UserController@getAuthenticatedUser');
});