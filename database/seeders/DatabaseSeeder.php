<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\RoleSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Seed 5 employees
        User::factory()->employee()->count(5)->create();

        // Seed 5 clients
        User::factory()->client()->count(5)->create();

        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'role' => 'admin', // Directly specifying the role here
        ]);
        // Call RoleSeeder
        $this->call(RoleSeeder::class);
    }
}
