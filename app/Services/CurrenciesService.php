<?php

namespace App\Services;

use App\Services\Contracts\ICurrenciesService;

class CurrenciesService implements ICurrenciesService
{

    public function addCurrency($data)
    {
        try {
            $parent = Category::where('id', $data['parent_id'])->first();
            if ($parent == null)
                $data['parent_id'] = null;

            Category::create($data);
        } catch (Exception $e) {
            return response()->json(["errors" => $e], 401);
        }
        return response(['success' => 'success'], 200);
    }
}
