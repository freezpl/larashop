<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;
use Exception;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class RoleMiddleware extends BaseMiddleware
{
    public function handle($request, Closure $next, ...$roles)
    {
        try {
            $payload = JWTAuth::parseToken()->getPayload();
            $userRoles = $payload['roles'];
            foreach ($roles as $role) {
               if(in_array($role, $userRoles) == true)
                    return $next($request);
            }
            return response()->json(['status' => 'Not have permissions']);
        } catch (Exception $e) {
            if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException){
                return response()->json(['status' => 'Token is Invalid']);
            }else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException){
                return response()->json(['status' => 'Token is Expired']);
            }else{
                return response()->json(['status' => 'Authorization Token not found']);
            }
        }
        return $next($request);
    }
}
