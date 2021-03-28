<?php

    namespace src\models;
    use src\config\Connection;

    class User extends Connection{

        private $nome;
        private $email;
        private $password;


        public function __construct(){
            parent::__construct();
        }


        public function setEmail($email){
            $this->email = $email;
        }

        public function setPassword($password){
            $this->password = $password;
        }

        public function getEmail(){
            return $this->email;
        }

        public function getPassword(){
            return $this->password;
        }



        public function login(){
            $email = $this->getEmail();
            $password = $this->getPassword();

            $sql = $this->pdo->prepare(
                "SELECT id, name, password FROM users WHERE email = :email LIMIT 1"
            );

            $sql->bindParam(":email", $email);
            $sql->execute();

            if($sql->rowCount() !== 1)
                throw new \Exception("Usuário ou senha inválidos");

            $result = $sql->fetchAll(\PDO::FETCH_ASSOC)[0];


            if(!password_verify($password, $result['password']))
                throw new \Exception('Usuário ou senha inválidos');

            return $result;
        }





        public function dashboard(){

            $data_incio = mktime(0, 0, 0, date('m') , 1 , date('Y'));
            $data_fim = mktime(23, 59, 59, date('m'), date("t"), date('Y'));
            $data_resultado_inicio=date('Y-m-d ',$data_incio);
            $data_resultado_fim=date('Y-m-d ',$data_fim);
            $data_fim_nova = date('Y-m-d',strtotime("+1 days",strtotime($data_resultado_fim)));

            $dados = [];

            $sql = $this->pdo->prepare(
                "SELECT COUNT(id) as 'totallivros' from livros");
            $sql->execute();

            if($sql->rowCount() < 1)
                throw new \Exception("Nenhum livro cadastrado");

            $totallivros = $sql->fetchAll(\PDO::FETCH_ASSOC)[0]['totallivros'];



            $sql = $this->pdo->prepare(
                "SELECT COUNT(id) as 'qtdemprestimos' from emprestimos");
            $sql->execute();

            if($sql->rowCount() < 1)
                throw new \Exception("Nenhum livro cadastrado");

            $qtdemprestimos = $sql->fetchAll(\PDO::FETCH_ASSOC)[0]['qtdemprestimos'];


            $dataatual = date("Y-m-d");
            $sql = $this->pdo->prepare(
                "select COUNT(id) as 'livrosatrasados' from emprestimos where data_devolucao < '$dataatual' && estado = 1");
            $sql->execute();

            if($sql->rowCount() < 1)
                throw new \Exception("Nenhum livro cadastrado");

            $qtdlivrosatrasados = $sql->fetchAll(\PDO::FETCH_ASSOC)[0]['livrosatrasados'];



            $sql = $this->pdo->prepare(
                "SELECT COUNT(id) as 'visitantes' from visitantes");
            $sql->execute();

            if($sql->rowCount() < 1)
                throw new \Exception("Nenhum visitante cadastrado");

            $visitantes = $sql->fetchAll(\PDO::FETCH_ASSOC)[0]['visitantes'];


            $sql = $this->pdo->prepare(
                "SELECT COUNT(id) as 'voluntarios' from users");
            $sql->execute();

            if($sql->rowCount() < 1)
                throw new \Exception("Nenhum voluntario cadastrado");

            $voluntarios = $sql->fetchAll(\PDO::FETCH_ASSOC)[0]['voluntarios'];

            $dataatual = date("Y-m-d");
            $sql = $this->pdo->prepare(
                "SELECT COUNT(id) as 'emdia' from emprestimos where data_devolucao > '$dataatual' && estado =1");
            $sql->execute();

            if($sql->rowCount() < 1)
                throw new \Exception("Nenhum livro em dia");

            $livrosemdia = $sql->fetchAll(\PDO::FETCH_ASSOC)[0]['emdia'];




            $sql = $this->pdo->prepare(
                "SELECT valor_caixa as 'valor_caixa' from caixa");
            $sql->execute();

            if($sql->rowCount() < 1)
                throw new \Exception("Valor em caixa com erro");

            $valor_caixa = $sql->fetchAll(\PDO::FETCH_ASSOC)[0]['valor_caixa'];


            $dados = [

                [
                    "id"=> "total_livros",
                    "nome" => "Total de Livros Cadastrados",
                    "valor" =>$totallivros
                ],

                [
                    "id"=> "livros_emprestados",
                    "nome" => "Total de Livros Emprestados pelo CASA",
                    "valor" => $qtdemprestimos
                ],

                [
                    "id"=> "livros_atrasados",
                    "nome" => "Livros Emprestados em Atraso",
                    "valor" => $qtdlivrosatrasados
                ],

                [
                    "id"=> "livros_emdia",
                    "nome" => "Livros Emprestados em Dia",
                    "valor" => $livrosemdia
                ],

                [
                    "id"=> "valor_caixa",
                    "nome" => "Valor em Caixa",
                    "valor" => "R$ ".number_format($valor_caixa,2,",",".")
                ],

                [
                    "id"=> "visitantes_cadastrados",
                    "nome" => "Quantidade de Visitantes Cadastrados",
                    "valor" =>$visitantes
                ],

                [
                    "id"=> "voluntarios",
                    "nome" => "Voluntários do CASA Cadastrados",
                    "valor" => $voluntarios
                ],



            ];

            return $dados;

        }



        public function pesquisaproduto(){
            $nome_livro = $this->getNomeLivro();

            $sql = $this->pdo->prepare(
                "select * from livros where nome LIKE '%$nome_livro%'"
            );

            $sql->bindParam(":codigo_livro", $codigo_livro);
            $sql->execute();

            return $sql->fetchAll(\PDO::FETCH_ASSOC);
        }



    }
