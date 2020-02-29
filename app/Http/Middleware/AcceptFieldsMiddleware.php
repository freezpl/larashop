<?php

namespace App\Http\Middleware;

use Closure;

class AcceptFieldsMiddleware
{
    public function handle($request, Closure $next, ...$fields)
    {
        try {
            if(in_array($request->field, $fields) == true)
                return $next($request);
            return response()->json(['status' => 'No rights to this request'], 400);
        } catch (Exception $e) {
                return response()->json(['status' => $e], 400);
            }
    }
}
