<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\TextService;

class TextServiceProvider extends ServiceProvider
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
        $this->app->bind('textService', function(){
            return new TextService();
        });
    }
}
