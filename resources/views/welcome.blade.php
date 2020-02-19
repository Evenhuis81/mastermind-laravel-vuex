<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" style="background: #f5f5f5">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- App title kun je uit je .env file halen --}}
        <title>Mastermind</title>

            <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <script src="{{ asset('js/app.js') }}" defer></script>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900">
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">

        {{-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> --}}
    </head>
    <body>
        <noscript>
          <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled.
            Please enable it to continue.</strong>
        </noscript>
        <div id="app">
            <!-- zet onderstaande components in een aparte Vue page en laat deze div container leeg -->
            <mastermind-titel></mastermind-titel>
            <start-reset></start-reset>
            <layout-summary v-show="show"></layout-summary>
            <color-palette v-show="show"></color-palette>
            <play-field  v-show="show"></play-field>
            {{-- onderstaand component is nergens geregistreerd --}}
            {{-- <final-solution></final-solution> --}}
            <end-score></end-score>
            <high-scores></high-scores>
        </div>
      </body>
</html>
