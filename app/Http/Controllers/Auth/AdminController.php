<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AdminController extends Controller
{
    public function login(Request $request)
    {
        //$credentials = $request->only('name', 'password');
        $credentials = $request->only('email', 'password');
        
        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'Не правильний логін або пароль'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'Токен доступу не створився'], 500);
        }

        return response()->json(compact('token'));
    }
}
