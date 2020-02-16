<?php

use App\Score;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class ScoresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Score::create([
            'name' => 'GOD',
            'score' => 101,
            'created_at' => Carbon::create(1981, 4, 30)
        ]);
    }
}
