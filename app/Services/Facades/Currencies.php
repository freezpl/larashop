<?
namespace App\Services\Facades;
use Illuminate\Support\Facades\Facade;

class Currencies extends Facade {

    public static function getFacadeAccessor() {
        return 'currencies';
    }
}