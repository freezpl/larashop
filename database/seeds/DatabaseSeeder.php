<?php

use Illuminate\Database\Seeder;
//use UsersSeeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call(UsersSeeder::class);
    }
}
