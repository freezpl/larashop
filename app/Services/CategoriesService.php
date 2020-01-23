<?php
namespace App\Services;
use App\Services\Contracts\ICategoriesService;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use App\Category;

class CategoriesService implements ICategoriesService {
    public function addCategory($request){
        $data = $request->all();
        $data['thumb'] = $request->thumb->store('category_thumb', 'files');
        $path = Storage::getAdapter()->getPathPrefix().$data['thumb'];
        $img = Image::make($path)->resize(100, 100, function ($constraint) {
            $constraint->aspectRatio();
        });
        $cat = Category::create($data);
        return $cat ? $cat : null;
    }

    public function all(){
        //$cats = Category::all()->load('children');
        $cats = Category::with('children')->get();
         return $cats;
    }
}