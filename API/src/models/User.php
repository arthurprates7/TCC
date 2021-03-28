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

            $dados = [];


            $sql = $this->pdo->prepare(
                "SELECT name FROM `infos` 
                        INNER JOIN users ON
                        users.id = infos.user
                        where users.id =1");
            $sql->execute();

            if($sql->rowCount() < 1)
                throw new \Exception("Erro na API");

            $usuario = $sql->fetchAll(\PDO::FETCH_ASSOC)[0]['name'];


            $sql = $this->pdo->prepare(
                "SELECT caixa FROM `infos` 
                        INNER JOIN users ON
                        users.id = infos.user
                        where users.id =1");
            $sql->execute();

            if($sql->rowCount() < 1)
                throw new \Exception("Erro na API");

            $caixa = $sql->fetchAll(\PDO::FETCH_ASSOC)[0]['caixa'];

            $sql = $this->pdo->prepare(
                "SELECT rua FROM `infos` 
                        INNER JOIN users ON
                        users.id = infos.user
                        where users.id =1");
            $sql->execute();

            if($sql->rowCount() < 1)
                throw new \Exception("Erro na API");

            $rua = $sql->fetchAll(\PDO::FETCH_ASSOC)[0]['rua'];


            $sql = $this->pdo->prepare(
                "SELECT vazamento FROM `infos` 
                        INNER JOIN users ON
                        users.id = infos.user
                        where users.id =1");
            $sql->execute();

            if($sql->rowCount() < 1)
                throw new \Exception("Erro na API");

            $vazamento = $sql->fetchAll(\PDO::FETCH_ASSOC)[0]['vazamento'];


            $sql = $this->pdo->prepare(
                "SELECT consumo FROM `infos` 
                        INNER JOIN users ON
                        users.id = infos.user
                        where users.id =1");
            $sql->execute();

            if($sql->rowCount() < 1)
                throw new \Exception("Erro na API");

            $consumo = $sql->fetchAll(\PDO::FETCH_ASSOC)[0]['consumo'];





            $dados = [

                [
                  "usuario"=>"usuario",
                  "nome"=>$usuario,
                  'valor'=>$usuario
                ],

                [
                    "id"=> "caixa",
                    "nome" => "Porcentagem Água da Caixa",
                    "valor" =>$caixa
                ],

                [
                    "id"=> "rua",
                    "nome" => "Está faltando água da rua?",
                    "valor" => $rua
                ],

                [
                    "id"=> "vazamento",
                    "nome" => "Está ocorrendo vazamento?",
                    "valor" => $vazamento
                ],

                [
                    "id"=> "consumo",
                    "nome" => "Consumo agora",
                    "valor" => $consumo
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
