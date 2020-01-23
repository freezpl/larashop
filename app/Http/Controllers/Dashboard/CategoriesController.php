<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Categories;
use App;
use Illuminate\Support\Facades\Validator;

class CategoriesController extends Controller
{
    public function add(Request $request)
    {
        $validation = Validator::make($request->all(),[ 
            'name' => 'required|unique:categories',
            'slug' => 'required|unique:categories',
        ]);

        if($validation->fails())
            return response()->json(["errors" => $validation->errors()]);

        Categories::addCategory($request);
        return response()->json('Ok');
    }
}
