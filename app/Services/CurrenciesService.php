<?php

namespace App\Services;

use App\Services\Contracts\ICurrenciesService;
use App\Currency;

class CurrenciesService implements ICurrenciesService
{
    public function addCurrency($data)
    {
        $data['published'] = ($data['published'] == 'true') ? true : false;
        try {
           $currency = Currency::create($data);
        } catch (Exception $e) {
            return response()->json(["errors" => $e], 401);
        }
        return response($currency, 200);
    }
}
