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

Route::get('currencies/', 'Dashboard\CurrenciesController@get');

//Dashboard
Route::group(['middleware' => ['jwt.verify', 'role:admin'], 'prefix' => 'dashboard'],
function () {
    Route::post('categories/add', 'Dashboard\CategoriesController@add');
    Route::post('categories/edit', 'Dashboard\CategoriesController@edit');
    Route::get('categories/edit/isactive/{id}/{active}', 'Dashboard\CategoriesController@editCategoryActive');

    Route::post('currencies/add', 'Dashboard\CurrenciesController@add');
    Route::get('currencies/changemain/{id}', 'Dashboard\CurrenciesController@changeMain');
    Route::get('currencies/edit/publish/{id}/{published}', 'Dashboard\CurrenciesController@editCurrencyPublish');
    Route::get('currencies/{id}', 'Dashboard\CurrenciesController@getById');
    Route::post('currencies/update', 'Dashboard\CurrenciesController@update');
    Route::get('currencies/del/{id}', 'Dashboard\CurrenciesController@del');

    Route::post('helpers/checkisbusy', 'Helpers\CheckController@isBusy')->middleware(['models:Currency', 'fields:name,ccy,desc']);
    Route::post('helpers/filter/list', 'Helpers\FilterController@list')->middleware(['models:Currency,Category']);
    
    Route::get('user', 'Auth\UserController@getAuthenticatedUser');
    
});

