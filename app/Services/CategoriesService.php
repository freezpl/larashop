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

    public function tree(){
        $cats = Category::all();
        $res = array();
        foreach ($cats as $cat) {
            if($cat["parent_id"] == null)
                array_push($res, $cat);
        }
        $res = $this->GetChildren($res);         
        return $res;
    }

    private function GetChildren($cats){
        for ($i=0; $i < count($cats) ; $i++) { 
            $cat = Category::find($cats[$i]->id);
            if(count($cat->children) > 0)
                $this->GetChildren($cat->children);
                $cats[$i]->children = $cat->children;
        }

        return $cats;
    }
}