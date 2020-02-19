<?php

namespace App\Http\Controllers\Helpers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CheckController extends Controller
{
    public function isBusy(Request $request){
        $model = 'App\\'.$request->model;
        $isBusy = ($model::where($request->field, $request->value)->count() > 0) ? true : false;
        return response()->json(["isbusy" => $isBusy]);        
    }
}
