<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Currency;
use App\Services\Facades\CurrenciesFacade;

class CurrenciesController extends Controller
{
    public function get(){
        return Currency::all();
    }

    public function add(Request $request)
    {
        $validation = Validator::make($request->all(),[ 
            'name' => 'required|unique:currencies',
            'ccy' => 'required|unique:currencies',
            'desc' => 'required|unique:currencies',
            'exchange' => 'numeric|nullable'
        ]);

        if($validation->fails())
            return response()->json(["errors" => $validation->errors()], 400);

        $data = $request->all();
        return CurrenciesFacade::addCurrency($data);
    }

    public function changeMain($id){
        Currency::where('main', '1')->update(['main' => false]);
        $curr = Currency::find($id);
        if($curr == null)
            return response()->json(["errors" => "No currency found!"], 400);
        $curr->update(['main' => true]);
        return response()->json(["data" => true]);            
    }

    public function editCurrencyPublish($id, $published){
        return CurrenciesFacade::editCurrencyPublish($id, $published);
    }

    public function getById($id){
        return CurrenciesFacade::getById($id);
    }
    
    public function update(Request $request)
    {
        $validation = Validator::make($request->all(),[ 
            'name' => 'required',
            'ccy' => 'required',
            'desc' => 'required',
            'exchange' => 'numeric|nullable'
        ]);

        if($validation->fails())
            return response()->json(["errors" => $validation->errors()], 400);

        $data = $request->all();
        return CurrenciesFacade::update($data);
    }

    public function del($id)
    {
        return CurrenciesFacade::del($id);
    }
}