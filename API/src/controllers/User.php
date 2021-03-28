<?php

    namespace src\controllers;

    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;

    use src\models\User as UserModel;

    use src\middleware\Auth;

    class User
    {

        private $content = array();
        private $httpStatusCode = 406;

        public function login(Request $request, Response $response, array $args): Response{
            try {

                if(!isset($request->getParsedBody()['email']))
                    throw new \Exception("Informe um email");

                if(!isset($request->getParsedBody()['password']))
                    throw new \Exception("Informe a senha");

                if(empty($request->getParsedBody()['email']))
                    throw new \Exception("Email vazio");
                if(empty($request->getParsedBody()['password'])){
                    throw new \Exception("Senha vazia");
                }
                else

                $user = new UserModel();
                $user->setEmail($request->getParsedBody()['email']);
                $user->setPassword($request->getParsedBody()['password']);

                $auth = new Auth();

                $dadosUser = $user->login();

                unset($dadosUser['password']);
                $payload = $dadosUser;



                $this->content['token'] = $auth->generateToken($payload);
                $this->httpStatusCode = 200;

            } catch (\Exception $e) {
                $this->content['message'] = $e->getMessage();
            }
            return $response->withJSON($this->content)->withStatus($this->httpStatusCode);
        }


        public function dashboard(Request $request, Response $response, array $args) : Response{

            try{

                $productModel = new UserModel();
                $this->content['dashboard'] = $productModel->dashboard();
                $this->httpStatusCode = 200;

            }catch(\Exception $e){
                $this->content['message'] = $e->getMessage();
            }
            return $response->withJSON($this->content)->withStatus($this->httpStatusCode);
        }


        public function controlemensal(Request $request, Response $response, array $args):Response{

            try{

                if(empty($request->getParsedBody()['nome_livro']))
                    throw new \Exception("Nome do Livro vazio");
                if(!isset($request->getParsedBody()['nome_livro'])){
                    throw new \Exception("Informe o Nome do Livro");


                }
                else
                    $infos = new UserModel();
                $infos->setNomeLivro($request->getParsedBody()['nome_livro']);

                $this->content['message'] = $infos->pesquisaproduto();;
                $this->httpStatusCode = 200;

            }catch (\Exception $e){
                $this->content['message'] = $e->getMessage();
            }
            return $response->withJSON($this->content)->withStatus($this->httpStatusCode);
        }





    }
