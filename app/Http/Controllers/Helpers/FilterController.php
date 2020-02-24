<?php

namespace App\Http\Controllers\Helpers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FilterController extends Controller
{
    public function isBusy(Request $request){
        $model = 'App\\'.$request->model;
        $isBusy = ($model::where($request->field, $request->value)->count() > 0) ? true : false;
        return response()->json(["isbusy" => $isBusy]);        
    }

    public function list(Request $request){
        $model = 'App\\'.$request->model;
        $count = $model::where('name','LIKE','%'.$request->text.'%')->count();
        $collection = $model::where('name','LIKE','%'.$request->text.'%')
                        ->offset($request->offset)
                        ->take($request->perpage)
                        ->get();
        return response()->json(["collection" => $collection, "count" => $count]);        
    }

}
