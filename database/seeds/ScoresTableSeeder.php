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
        $score = 101;
        Score::create([
            'name' => 'GOD',
            'score' => $score,
            'created_at' => Carbon::create(1981, 4, 30)
        ]);
        // $letter = chr(rand(65,90));
        // echo($letters);
        $score -= 2;
        $i = 0;
        $times_to_run = 4;
        while ($i++ < $times_to_run)
        {
            Score::create([
            'name' => chr(rand(65,90)).chr(rand(65,90)).chr(rand(65,90)),
            'score' => $score,
            'created_at' => Carbon::create(rand(1990, 2019), rand(1, 12), rand(1, 31))
            ]); 
            $score -= 10;
        };
        $score -= 8;
        Score::create([
            'name' => 'ASS',
            'score' => $score,
            'created_at' => Carbon::create(1981, 4, 30)
        ]);
        $score -= 12;
        $i = 0;
        while ($i++ < $times_to_run)
        {
            Score::create([
            'name' => chr(rand(65,90)).chr(rand(65,90)).chr(rand(65,90)),
            'score' => $score,
            'created_at' => Carbon::create(rand(1990, 2019), rand(1, 12), rand(1, 31))
            ]); 
            $score -= 10;
        };
    }
}
