<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Categories;
use TextFacade;
use App\Category;
use Illuminate\Support\Facades\Validator;

class CategoriesController extends Controller
{
    public function add(Request $request)
    {
        $validation = Validator::make($request->all(),[ 
            'name' => 'required|unique:categories',
            'thumb' => 'mimes:jpeg,jpg,png,gif|required|max:5000',
            'image' => 'mimes:jpeg,jpg,png,gif|required|max:10000',
            'parent_id' => 'required|numeric'
        ]);

        if($validation->fails())
            return response()->json(["errors" => $validation->errors()]);
        
        $data = $request->all();
        
        if($data['slug'] == '')
            $data['slug'] = TextFacade::generateSlug($request->name, array('transliterate' => true));
        else
            $data['slug'] = TextFacade::generateSlug($request->slug, array('transliterate' => true));
        $findSlug = Category::where('slug', $request['slug'])->first();
        
        if($findSlug != null)
            return response()->json(["errors" => "This slug is busy"]);

        $resp = Categories::addCategory($data);
        return $resp;
    }

    public function tree(){
        $cats = Categories::tree();
        return $cats;
    }

    public function all(){
        return response(Category::withCount('children')->get());
    }

    public function getCategory($request){
        return response(Category::where('slug', $request)->first());        
    }

    public function editCategoryActive($id, $active){
        return Categories::editCategoryActive($id, $active);
    }

    public function edit(Request $request)
    {
        $validation = Validator::make($request->all(),[ 
            'name' => 'required',
            'slug' => 'required',
            'thumb' => 'nullable|sometimes|image|mimes:jpeg,bmp,png,jpg,svg|max:5000',
            'image' => 'nullable|sometimes|image|mimes:jpeg,bmp,png,jpg,svg|max:10000',
            'parent_id' => 'required|numeric'
        ]);

        if($validation->fails())
        {
            return response()->json(["errors" => $validation->errors()], 400);
        }
        
        $data = $request->all();
        if(!$data['slug'])
            return response()->json(["errors" => "No slug! Enter and try again!"], 400);

        $findSlug = Category::where('slug', $request['slug'])->first();
        if($findSlug != null && $findSlug->id != $data['id'])
            return response()->json(["errors" => "This slug is busy"], 400);

        $resp = Categories::editCategory($data);
        return $resp;
    }
}
