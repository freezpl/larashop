<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use App\Role;

class DataController extends Controller
{
    public function open() 
            {
                $data = Category::all()->load('users');
                return $data;
            }

            public function closed() 
            {
                $data = "Only authorized users can see this";
                return response()->json(compact('data'),200);
            }
}
