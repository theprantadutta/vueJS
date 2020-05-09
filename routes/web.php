<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

//Category
Route::post('/add-category','CategoryController@addCategory');
Route::get('category','CategoryController@allCategory');
Route::get('deleteCategory/{id}','CategoryController@deleteCategory');
Route::get('toEditCategory/{id}','CategoryController@toEditCategory');
Route::post('updateCategory/{id}','CategoryController@updateCategory');
Route::get('post','PostController@allPost');
Route::get('users','HomeController@allUsers');
Route::post('savePost','PostController@savePost');
Route::get('deletePost/{id}','PostController@deletePost');
//Route::get('/{anypath}', 'HomeController@index')->where('path','.*');
