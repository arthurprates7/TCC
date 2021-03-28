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




        public function getAll(Request $request, Response $response, array $args) : Response{

            try{
                $productModel = new UserModel();
                $produtosTMP = $productModel->getAll();


                $this->content['produtos'] = $produtosTMP;
                $this->httpStatusCode = 200;

            }catch(\Exception $e){
                $this->content['message'] = $e->getMessage();
            }
            return $response->withJSON($this->content)->withStatus($this->httpStatusCode);
        }

        public function getAllVisitantes(Request $request, Response $response, array $args) : Response{

            try{
                $productModel = new UserModel();
                $produtosTMP = $productModel->getAllVisitantes();


                $this->content['visitantes'] = $produtosTMP;
                $this->httpStatusCode = 200;

            }catch(\Exception $e){
                $this->content['message'] = $e->getMessage();
            }
            return $response->withJSON($this->content)->withStatus($this->httpStatusCode);
        }




        public function carrinho(Request $request, Response $response, array $args) : Response{

            try{

                $productModel = new UserModel();
                $produtosTMP = $productModel->carrinho();
                $produtos = [];

                $total = 0.00;

                foreach ($produtosTMP as $produto){
                    $produto['image'] = "http://primeirospassos.aptechs.com.br" . "/products/{$produto['categoria']}{$produto['marca']}{$produto['modelo']}.jpeg";

                    $total +=  (double)number_format($produto['total_venda'], 2, '.', '');

                    array_push( $produtos, $produto );
                }

                $this->content['total'] = (string)number_format($total, 2, ',', '.');

                $this->content['carrinho'] = $produtos;
                $this->httpStatusCode = 200;

            }catch(\Exception $e){
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





        public function devolucao(Request $request, Response $response, array $args):Response{

            try{
                if(!isset($request->getParsedBody()['id']))
                    throw new \Exception("Informe um ID");

                if(empty($request->getParsedBody()['id']))
                    throw new \Exception("ID vazio");

                if(!isset($request->getParsedBody()['codigo_livro']))
                    throw new \Exception("Informe um Codigo do Livro");

                if(empty($request->getParsedBody()['codigo_livro']))
                    throw new \Exception("Codigo do Livro vazio");

                if(!isset($request->getParsedBody()['nome_livro']))
                    throw new \Exception("Informe um nome");

                if(empty($request->getParsedBody()['nome_livro']))
                    throw new \Exception("Nome vazio");

                if(!isset($request->getParsedBody()['codigo_visitante']))
                    throw new \Exception("Informe um Codigo do Visitante");

                if(empty($request->getParsedBody()['codigo_visitante']))
                    throw new \Exception("Codigo do Visitante vazio");

                if(!isset($request->getParsedBody()['data_emprestimo']))
                    throw new \Exception("Informe uma Data de Emprestimo");

                if(empty($request->getParsedBody()['data_emprestimo']))
                    throw new \Exception("Data de Emprestimo vazia");

                if(!isset($request->getParsedBody()['dias_emprestimo']))
                    throw new \Exception("Informe os Dias de Emprestimo");

                if(empty($request->getParsedBody()['dias_emprestimo']))
                    throw new \Exception("Dias de Emprestimo vazio");

                if(!isset($request->getParsedBody()['data_devolucao']))
                    throw new \Exception("Informe uma Data de Devolucao");

                if(empty($request->getParsedBody()['data_devolucao']))
                    throw new \Exception("Data de Devolucao vazio");

                if(!isset($request->getParsedBody()['nome_visitante']))
                    throw new \Exception("Informe um nome do visitante");

                if(empty($request->getParsedBody()['nome_visitante'])){
                    throw new \Exception("Nome do Visitante vazio");
                }

                $productModel = new UserModel();

                $productModel->setId($request->getParsedBody()['id']);
                $productModel->setCodigoLivro($request->getParsedBody()['codigo_livro']);
                $productModel->setNomeLivro($request->getParsedBody()['nome_livro']);
                $productModel->setCodigoVisitante($request->getParsedBody()['codigo_visitante']);
                $productModel->setNomeVisitante($request->getParsedBody()['nome_visitante']);
                $productModel->setDataEmprestimo($request->getParsedBody()['data_emprestimo']);
                $productModel->setDiasEmprestimo($request->getParsedBody()['dias_emprestimo']);
                $productModel->setDataDevolucao($request->getParsedBody()['data_devolucao']);

                $productModel->devolucao();

                $this->content['message'] = "Devolucao feita com Sucesso";
                $this->httpStatusCode = 200;

            }catch(\Exception $e){
                $this->content['message'] = $e->getMessage();
            }
            return $response->withJSON($this->content)->withStatus($this->httpStatusCode);
        }





        public function emprestimo(Request $request, Response $response, array $args):Response{

            try{

                if(empty($request->getParsedBody()['codigo_livro']))
                    throw new \Exception("Código vazio");
                if(!isset($request->getParsedBody()['codigo_livro']))
                    throw new \Exception("Informe um Código");

                if(empty($request->getParsedBody()['nome_livro']))
                    throw new \Exception("Nome do Livro vazio");
                if(!isset($request->getParsedBody()['nome_livro']))
                    throw new \Exception("Informe um Nome do Livro");

                if(empty($request->getParsedBody()['codigo_visitante']))
                    throw new \Exception("Codigo do Visitante vazio");
                if(!isset($request->getParsedBody()['codigo_visitante']))
                    throw new \Exception("Informe um Codigo do Visitante");

                if(empty($request->getParsedBody()['data_emprestimo']))
                    throw new \Exception("Data de Empréstimo vazia");
                if(!isset($request->getParsedBody()['data_emprestimo']))
                    throw new \Exception("Informe uma Data de Empréstimo");

                if(empty($request->getParsedBody()['dias_emprestimo']))
                    throw new \Exception("Dias de Empréstimo vazio");
                if(!isset($request->getParsedBody()['dias_emprestimo']))
                    throw new \Exception("Informe um Dia de Empréstimo");

                if(empty($request->getParsedBody()['nome_visitante']))
                    throw new \Exception("Nome do Visitante vazio");
                if(!isset($request->getParsedBody()['nome_visitante']))
                    throw new \Exception("Informe um Nome do Visitante");

                if(empty($request->getParsedBody()['data_emprestimo']))
                    throw new \Exception("Data de Empréstimo vazio");
                if(!isset($request->getParsedBody()['data_emprestimo']))
                    throw new \Exception("Informe uma Data de Empréstimo");

                if(empty($request->getParsedBody()['data_devolucao']))
                    throw new \Exception("Data de Devolucao vazio");
                if(!isset($request->getParsedBody()['data_devolucao'])){
                    throw new \Exception("Informe uma Data de Devolucao");


                }
                else

                $infos = new UserModel();
                $infos->setCodigoLivro($request->getParsedBody()['codigo_livro']);
                $infos->setNomeLivro($request->getParsedBody()['nome_livro']);
                $infos->setDataEmprestimo($request->getParsedBody()['data_emprestimo']);
                $infos->setNomeVisitante($request->getParsedBody()['nome_visitante']);
                $infos->setCodigoVisitante($request->getParsedBody()['codigo_visitante']);
                $infos->setDiasEmprestimo($request->getParsedBody()['dias_emprestimo']);
                $infos->setDataDevolucao($request->getParsedBody()['data_devolucao']);



                $this->content['retorno'] =  $infos->emprestimo();
                $this->httpStatusCode = 200;

            }catch(\Exception $e){
                $this->content['message'] = $e->getMessage();
            }
            return $response->withJSON($this->content)->withStatus($this->httpStatusCode);
        }


        public function emprestimorevistas(Request $request, Response $response, array $args):Response{

            try{

                if(empty($request->getParsedBody()['codigo_revista']))
                    throw new \Exception("Código da Revista vazio");
                if(!isset($request->getParsedBody()['codigo_revista']))
                    throw new \Exception("Informe um Código da Revista");

                if(empty($request->getParsedBody()['nome_revista']))
                    throw new \Exception("Nome da Revista vazio");
                if(!isset($request->getParsedBody()['nome_revista']))
                    throw new \Exception("Informe um Nome da Revista");

                if(empty($request->getParsedBody()['codigo_visitante']))
                    throw new \Exception("Codigo do Visitante vazio");
                if(!isset($request->getParsedBody()['codigo_visitante']))
                    throw new \Exception("Informe um Codigo do Visitante");

                if(empty($request->getParsedBody()['data_emprestimo']))
                    throw new \Exception("Data de Empréstimo vazia");
                if(!isset($request->getParsedBody()['data_emprestimo']))
                    throw new \Exception("Informe uma Data de Empréstimo");

                if(empty($request->getParsedBody()['dias_emprestimo']))
                    throw new \Exception("Dias de Empréstimo vazio");
                if(!isset($request->getParsedBody()['dias_emprestimo']))
                    throw new \Exception("Informe um Dia de Empréstimo");

                if(empty($request->getParsedBody()['nome_visitante']))
                    throw new \Exception("Nome do Visitante vazio");
                if(!isset($request->getParsedBody()['nome_visitante']))
                    throw new \Exception("Informe um Nome do Visitante");

                if(empty($request->getParsedBody()['data_emprestimo']))
                    throw new \Exception("Data de Empréstimo vazio");
                if(!isset($request->getParsedBody()['data_emprestimo']))
                    throw new \Exception("Informe uma Data de Empréstimo");

                if(empty($request->getParsedBody()['data_devolucao']))
                    throw new \Exception("Data de Devolucao vazio");
                if(!isset($request->getParsedBody()['data_devolucao'])){
                    throw new \Exception("Informe uma Data de Devolucao");


                }
                else

                    $infos = new UserModel();
                $infos->setCodigoRevista($request->getParsedBody()['codigo_revista']);
                $infos->setNomeRevista($request->getParsedBody()['nome_revista']);
                $infos->setDataEmprestimo($request->getParsedBody()['data_emprestimo']);
                $infos->setNomeVisitante($request->getParsedBody()['nome_visitante']);
                $infos->setCodigoVisitante($request->getParsedBody()['codigo_visitante']);
                $infos->setDiasEmprestimo($request->getParsedBody()['dias_emprestimo']);
                $infos->setDataDevolucao($request->getParsedBody()['data_devolucao']);



                $this->content['retorno'] =  $infos->emprestimorevista();
                $this->httpStatusCode = 200;

            }catch(\Exception $e){
                $this->content['message'] = $e->getMessage();
            }
            return $response->withJSON("Revista Emprestada com Sucesso")->withStatus($this->httpStatusCode);
        }





        public function todosemprestimos(Request $request, Response $response, array $args){

            try{

                $productModel = new UserModel();
                $produtos = $productModel->emprestimos();

                $this->content['emprestimos'] = $produtos;

                $this->httpStatusCode = 200;

            }catch(\Exception $e){
                $this->content['message'] = $e->getMessage();
            }
            return $response->withJSON($this->content)->withStatus($this->httpStatusCode);
        }


        public function acervo(Request $request, Response $response, array $args){

            try{

                $productModel = new UserModel();
                $produtos = $productModel->acervo();

                $this->content['acervo'] = $produtos;

                $this->httpStatusCode = 200;

            }catch(\Exception $e){
                $this->content['message'] = $e->getMessage();
            }
            return $response->withJSON($this->content)->withStatus($this->httpStatusCode);
        }




        public function obtemproduto(Request $request, Response $response, array $args):Response{

            try{

                $infos = new UserModel();
                $infos->setId($args['id']);
                $produto = $infos->obtemproduto();
                $this->content['produto'] = $produto;
                $this->httpStatusCode = 200;

            }catch (\Exception $e){
                $this->content['message'] = $e->getMessage();
            }
            return $response->withJSON($this->content)->withStatus($this->httpStatusCode);
        }



        public function renovacao(Request $request, Response $response, array $args):Response{

            try{
                if(empty($request->getParsedBody()['data_devolucao']))
                    throw new \Exception("Data Devolucao vazio");
                if(!isset($request->getParsedBody()['data_devolucao']))
                    throw new \Exception("Informe a Data de Devolucao");
                if(empty($request->getParsedBody()['dias_emprestimo']))
                    throw new \Exception("Dias vazio");
                if(!isset($request->getParsedBody()['dias_emprestimo']))
                    throw new \Exception("Informe os Dias");
                if(empty($request->getParsedBody()['id']))
                    throw new \Exception("ID vazio");
                if(!isset($request->getParsedBody()['id'])){
                    throw new \Exception("Informe os ID");


                }
                else
                $infos = new UserModel();
                $infos->setId($request->getParsedBody()['id']);
                $infos->setDiasEmprestimo($request->getParsedBody()['dias_emprestimo']);
                $infos->setDataDevolucao($request->getParsedBody()['data_devolucao']);
                $infos->renovacao();
                $this->content['message'] = "Renovado com Sucesso";
                $this->httpStatusCode = 200;

            }catch (\Exception $e){
                $this->content['message'] = $e->getMessage();
            }
            return $response->withJSON($this->content)->withStatus($this->httpStatusCode);
        }


        public function pesquisaproduto(Request $request, Response $response, array $args):Response{

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

        public function pesquisalivro(Request $request, Response $response, array $args):Response{

            try{

                if(empty($request->getParsedBody()['nome_livro']))
                    throw new \Exception("Nome do Livro vazio");
                if(!isset($request->getParsedBody()['nome_livro'])){
                    throw new \Exception("Informe o Nome do Livro");


                }
                else
                    $infos = new UserModel();
                $infos->setNomeLivro($request->getParsedBody()['nome_livro']);

                $this->content['message'] = $infos->pesquisalivro();;
                $this->httpStatusCode = 200;

            }catch (\Exception $e){
                $this->content['message'] = $e->getMessage();
            }
            return $response->withJSON($this->content)->withStatus($this->httpStatusCode);
        }


        public function pesquisavisitante(Request $request, Response $response, array $args):Response{

            try{

                if(empty($request->getParsedBody()['nome_visitante']))
                    throw new \Exception("Nome do Visitante vazio");
                if(!isset($request->getParsedBody()['nome_visitante'])){
                    throw new \Exception("Informe o Nome do Visitante");


                }
                else
                    $infos = new UserModel();
                $infos->setNomeVisitante($request->getParsedBody()['nome_visitante']);

                $this->content['message'] = $infos->pesquisavisitante();;
                $this->httpStatusCode = 200;

            }catch (\Exception $e){
                $this->content['message'] = $e->getMessage();
            }
            return $response->withJSON($this->content)->withStatus($this->httpStatusCode);
        }




        public function entradafinanceiro(Request $request, Response $response, array $args):Response{

            try{

                if(empty($request->getParsedBody()['origem']))
                    throw new \Exception("Origem vazio");
                if(!isset($request->getParsedBody()['origem']))
                    throw new \Exception("Informe a Origem da Entrada");

                if(empty($request->getParsedBody()['valor']))
                    throw new \Exception("Valor vazio");
                if(!isset($request->getParsedBody()['valor']))
                    throw new \Exception("Informe o Valor da Entrada");

                if(empty($request->getParsedBody()['data']))
                    throw new \Exception("Data vazia");
                if(!isset($request->getParsedBody()['data'])){
                    throw new \Exception("Informe a Data da Entrada");


                }
                else
                $infos = new UserModel();
                $infos->setOrigem($request->getParsedBody()['origem']);
                $infos->setValor($request->getParsedBody()['valor']);
                $infos->setData($request->getParsedBody()['data']);


                $this->content['message'] = $infos->entradafinanceiro();;
                $this->httpStatusCode = 200;

            }catch (\Exception $e){
                $this->content['message'] = $e->getMessage();
            }
            return $response->withJSON($this->content)->withStatus($this->httpStatusCode);
        }

        public function saidafinanceiro(Request $request, Response $response, array $args):Response{

            try{

                if(empty($request->getParsedBody()['destino']))
                    throw new \Exception("Destino vazio");
                if(!isset($request->getParsedBody()['destino']))
                    throw new \Exception("Informe o Destino da Saida");

                if(empty($request->getParsedBody()['valor']))
                    throw new \Exception("Valor vazio");
                if(!isset($request->getParsedBody()['valor']))
                    throw new \Exception("Informe o Valor da Entrada");

                if(empty($request->getParsedBody()['data']))
                    throw new \Exception("Data vazia");
                if(!isset($request->getParsedBody()['data'])){
                    throw new \Exception("Informe a Data da Entrada");


                }
                else
                    $infos = new UserModel();
                $infos->setOrigem($request->getParsedBody()['destino']);
                $infos->setValor($request->getParsedBody()['valor']);
                $infos->setData($request->getParsedBody()['data']);


                $this->content['message'] = $infos->saidafinanceiro();;
                $this->httpStatusCode = 200;

            }catch (\Exception $e){
                $this->content['message'] = $e->getMessage();
            }
            return $response->withJSON($this->content)->withStatus($this->httpStatusCode);
        }




    }
