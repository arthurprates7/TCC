<?php

    use src\controllers\User;
    use src\middleware\Auth;

    $app->group("/user", function() use ($app){

        $app->post("/login", User::class . ":login");
        $app->get("/acervo", User:: class . ":acervo");
        $app->post("/acervo/pesquisa", User:: class . ":pesquisalivro");
    });


