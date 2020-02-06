<?php 

namespace App\Services\Contracts;

interface ICategoriesService {
    public function addCategory($request);
    public function tree();
    public function editCategoryActive($id, $active);
}