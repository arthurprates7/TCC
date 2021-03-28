<?php

    use src\controllers\User;
    use src\middleware\Auth;

    $app->group("/user", function() use ($app){

        $app->post("/login", User::class . ":login");

    });


