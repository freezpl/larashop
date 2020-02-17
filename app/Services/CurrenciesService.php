<?php

namespace App\Services;

use App\Services\Contracts\ICurrenciesService;
use App\Currency;

class CurrenciesService implements ICurrenciesService
{
    public function addCurrency($data)
    {
        try {
           $currency = Currency::create($data);
        } catch (Exception $e) {
            return response()->json(["errors" => $e], 401);
        }
        return response($currency);
    }
}
