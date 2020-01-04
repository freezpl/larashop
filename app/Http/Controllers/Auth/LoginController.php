<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class LoginController extends Controller
{
    public function get(Request $request)
    {
      $user = $request->user();
      //$user = User::find($user);
      //$user = User::with('roles')->get();
      return $user;
    }
}
