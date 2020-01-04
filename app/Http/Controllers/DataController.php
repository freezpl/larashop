<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Role;

class DataController extends Controller
{
    public function open() 
            {
                $data = Role::all()->load('users');
                return $data;
            }

            public function closed() 
            {
                $data = "Only authorized users can see this";
                return response()->json(compact('data'),200);
            }
}
