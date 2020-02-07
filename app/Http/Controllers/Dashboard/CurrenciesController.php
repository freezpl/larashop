<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class CurrenciesController extends Controller
{
    public function get(Request $request){
        App::make('currencies');
        return $request;
    }


    public function add(Request $request)
    {
        $validation = Validator::make($request->all(),[ 
            'name' => 'required|unique:currencies',
            'desc' => 'required|unique:currencies',
            'exchange' => 'numeric|nullable'
        ]);

        if($validation->fails())
            return response()->json(["errors" => $validation->errors()]);

        $resp = Categories::addCategory($data);
        return $resp;
    }
}
