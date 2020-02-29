<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\CurrenciesService;

class CurrenciesServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind('currenciesService', function(){
            return new CurrenciesService();
        });
    }
}
