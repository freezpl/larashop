<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\CategoriesService;

class CategoriesServiceProvider extends ServiceProvider
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
        $this->app->bind('categories', function(){
            return new CategoriesService();
        });
    }
}
