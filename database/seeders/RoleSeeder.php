<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RoleSeeder extends Seeder
{
    public function run()
    {
        $roles = [
            ['name' => 'admin', 'description' => 'Administrator'],
            ['name' => 'employee', 'description' => 'Employee'],
            ['name' => 'client', 'description' => 'Client'],
        ];

        foreach ($roles as $role) {
            Role::create($role);
        }
    }
}
