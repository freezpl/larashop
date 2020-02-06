<?php

namespace App\Services;

use App\Services\Contracts\ICategoriesService;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use App\Category;

class CategoriesService implements ICategoriesService
{

    public function addCategory($data)
    {
        try {
            //save thumb
            $data['thumb'] = $data['thumb']->store('category_thumb', 'files');
            $pathThumb = Storage::getAdapter()->getPathPrefix().$data['thumb'];
            Image::make($pathThumb)->resize(100, 100, function ($constraint) {
                $constraint->aspectRatio();
            })->save($pathThumb);
            
            //save image
            $data['image'] = $data['image']->store('category_image', 'files');
            $pathImg = Storage::getAdapter()->getPathPrefix().$data['image'];
            Image::make($pathImg)->resize(200, 200, function ($constraint) {
                $constraint->aspectRatio();
            })->save($pathImg);
            //save parent
            $parent = Category::where('id', $data['parent_id'])->first();
            if ($parent == null)
                $data['parent_id'] = null;

            Category::create($data);
            
        } catch (Exception $e) {
            return response()->json(["errors" => $e ],401);
        }
        return response(['success' => 'success'], 200);
    }

    public function tree()
    {
        $cats = Category::all();
        $res = array();
        foreach ($cats as $cat) {
            if ($cat["parent_id"] == null)
                array_push($res, $cat);
        }
        $res = $this->GetChildren($res);
        return $res;
    }

    private function GetChildren($cats)
    {
        for ($i = 0; $i < count($cats); $i++) {
            $cat = Category::find($cats[$i]->id);
            if (count($cat->children) > 0)
                $this->GetChildren($cat->children);
            $cats[$i]->children = $cat->children;
        }

        return $cats;
    }

    public function editCategoryActive($id, $active){
        $cat = Category::find($id);
        if($cat != null)
           {
            $cat->active = ($active === 'true') ? true : false;
            $cat->save();
            return $cat;    
           }
        else 
           return response()->json(["errors" => "Bad request" ], 400);
    }

}
