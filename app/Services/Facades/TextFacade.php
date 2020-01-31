<?
namespace App\Services\Facades;
use Illuminate\Support\Facades\Facade;

class TextFacade extends Facade {

    public static function getFacadeAccessor() {
        return 'textService';
    }
}