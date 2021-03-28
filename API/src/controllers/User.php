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




        public function controle(Request $request, Response $response, array $args):Response{

            try{

                if(empty($request->getParsedBody()['mes']))
                    throw new \Exception("Mês vazio");
                if(!isset($request->getParsedBody()['mes'])){
                    throw new \Exception("Informe o Mês");


                }
                else
                    $infos = new UserModel();
                $infos->setMes($request->getParsedBody()['mes']);

                $this->content['message'] = $infos->pesquisaproduto();;
                $this->httpStatusCode = 200;

            }catch (\Exception $e){
                $this->content['message'] = $e->getMessage();
            }
            return $response->withJSON($this->content)->withStatus($this->httpStatusCode);
        }


        public function cadastro(Request $request, Response $response, array $args): Response{

            try {
                if(!isset($request->getParsedBody()['email']))
                    throw new \Exception("Informe um email");
                if(!isset($request->getParsedBody()['name']))
                    throw new \Exception("Informe um nome");

                if(!isset($request->getParsedBody()['expo_token']))
                    throw new \Exception("Informe um token");

                if(!isset($request->getParsedBody()['password']))
                    throw new \Exception("Informe a senha");

                if(empty($request->getParsedBody()['email']))
                    throw new \Exception("Email vazio");
                if(empty($request->getParsedBody()['name']))
                    throw new \Exception("Nome vazio");

                if(empty($request->getParsedBody()['expo_token']))
                    throw new \Exception("Token vazio");

                if(empty($request->getParsedBody()['password'])){
                    throw new \Exception("Senha vazia");
                }
                else

                    $user = new UserModel();

                $user->setEmail($request->getParsedBody()['email']);
                $user->setPassword($request->getParsedBody()['password']);
                $user->setExpo($request->getParsedBody()['expo_token']);
                $user->setNome($request->getParsedBody()['name']);



                $login = $user->cadastro();
                $this->httpStatusCode = 200;


            }catch (\Exception $e){
                $this->content['message'] = $e->getMessage();
            }
            return $response->withJSON($this->content)->withStatus($this->httpStatusCode);

        }





    }
