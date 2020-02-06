<?php

use Illuminate\Http\Request;
Route::post('auth/administrator_login', 'Auth\AdminController@login');

///TEST///
Route::post('register', 'Auth\UserController@register');
Route::post('login', 'Auth\UserController@login');

//Categories
Route::get('categories/tree', 'Dashboard\CategoriesController@tree');
Route::get('categories/all', 'Dashboard\CategoriesController@all');
Route::get('category/{slug}', 'Dashboard\CategoriesController@getCategory');

//Dashboard
Route::group(['middleware' => ['jwt.verify', 'role:admin']],
function () {
    Route::post('dashboard/categories/add', 'Dashboard\CategoriesController@add');
    Route::get('dashboard/categories/edit/isactive/{id}/{active}', 'Dashboard\CategoriesController@editCategoryActive');
    Route::get('user', 'Auth\UserController@getAuthenticatedUser');

});