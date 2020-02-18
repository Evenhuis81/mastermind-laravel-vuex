<?php

Route::get('/', function () {
    return view('welcome');
});
Route::get('scores', 'ScoresController@index');
Route::post('setscore', 'ScoresController@store');
