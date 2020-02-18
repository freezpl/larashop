<?php

namespace App\Http\Middleware;

use Closure;

class ModelsMiddleware
{
    public function handle($request, Closure $next, ...$models)
    {
        try {
            if(in_array($request->model, $models) == true)
                return $next($request);
            return response()->json(['status' => 'Bad data'], 400);
        } catch (Exception $e) {
                return response()->json(['status' => $e], 400);
            }
    }
}
