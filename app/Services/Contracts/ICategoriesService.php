<?php 

namespace App\Services\Contracts;

interface ICategoriesService {
    public function addCategory($data);
    public function editCategory($data);
    public function tree();
    public function editCategoryActive($id, $active);
}