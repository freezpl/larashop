<?php

namespace App\Services;

use App\Currency;
use App\Services\Contracts\ICurrenciesService;
use Exception;

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

    public function editCurrencyPublish($id, $published)
    {
        $curr = Currency::find($id);
        if ($curr != null) {
            $curr->published = ($published === 'true') ? true : false;
            $curr->save();
            return $curr;
        } else
            return response()->json(["errors" => "Bad request"], 400);
    }

    public function getById($id){
        $curr = Currency::find($id);
        if ($curr != null) {
            return $curr;
        } else
            return response()->json(["errors" => "No find category!"], 400);
    }
    
    public function update($data){
        $data['published'] = ($data['published'] == 'true' || $data['published'] == 1) ? true : false;
        try {
           $currency = Currency::find($data['id'])->update($data);
        } catch (Exception $e) {
            return response()->json(["errors" => $e], 500);
        }
        return response()->json(['updated' => $currency], 200);
    }

    public function del($id){
        try {
            $currency = Currency::find($id)->delete();
         } catch (Exception $e) {
             return response()->json(["errors" => $e], 500);
         }
         return response()->json(['updated' => $currency], 200);
    }

}
