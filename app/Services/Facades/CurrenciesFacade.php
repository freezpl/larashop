<?
namespace App\Services\Facades;
use Illuminate\Support\Facades\Facade;

class CurrenciesFacade extends Facade {

    public static function getFacadeAccessor() {
        return 'currenciesService';
    }
}