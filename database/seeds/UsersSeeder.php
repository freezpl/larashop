<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'pasha',
            'email' => 'a@gmail.com',
            'password' => bcrypt('12345'),
        ]);
    }
}
