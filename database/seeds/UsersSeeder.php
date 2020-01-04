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

        DB::table('users')->insert([
            'name' => '0668526407',
            'password' => bcrypt('12345'),
        ]);

        $roles = array(
            array('name'=>'admin'),
            array('name'=>'user'),
        );
        DB::table('roles')->insert($roles);

        DB::table('user_role')->insert([
            ['user_id'=>'1', 'role_id'=>'1'],
            ['user_id'=>'2', 'role_id'=>'2'],
        ]);
    }
}
