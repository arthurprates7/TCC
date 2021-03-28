<?php

    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;

    use src\controllers\User;
    use src\middleware\Auth;
    use src\middleware\JWTdate;

    $app->group("/all", function() use ($app){

        $app->get("/get", User::class . ":getAll");
        $app->get("/getvisitantes", User::class . ":getAllVisitantes");
        $app->post("/emprestimo", User::class.":emprestimo");
        $app->post("/emprestimo/revistas", User::class.":emprestimorevistas");
        $app->get("/dashboard", User::class.":dashboard");
        $app->post("/pesquisaproduto", User::class.":pesquisaproduto");
        $app->post("/pesquisavisitante", User::class.":pesquisavisitante");
        $app->get("/todosemprestimos" ,User::class.":todosemprestimos");
        $app->post("/devolucao", User::class.":devolucao");
        $app->get("/produto/{id}",User::class.":obtemproduto");
        $app->post("/renovacao",User::class.":renovacao");
        $app->post("/financeiro/entrada" ,User::class.":entradafinanceiro");
        $app->post("/financeiro/saida" ,User::class.":saidafinanceiro");


    })
    ->add(new JWTdate)
    ->add(Auth::validateToken());

