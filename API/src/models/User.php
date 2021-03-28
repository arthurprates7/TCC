<?php

    namespace src\models;
    use src\config\Connection;

    class User extends Connection{

        private $nome;
        private $email;
        private $password;
        private $mes;
        private $expo;


        /**
         * @return mixed
         */
        public function getNome()
        {
            return $this->nome;
        }

        /**
         * @param mixed $nome
         */
        public function setNome($nome): void
        {
            $this->nome = $nome;
        }

        /**
         * @return mixed
         */
        public function getExpo()
        {
            return $this->expo;
        }

        /**
         * @param mixed $expo
         */
        public function setExpo($expo): void
        {
            $this->expo = $expo;
        }


        /**
         * @return mixed
         */
        public function getMes()
        {
            return $this->mes;
        }

        /**
         * @param mixed $mes
         */
        public function setMes($mes): void
        {
            $this->mes = $mes;
        }


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





            ];

            return $dados;

        }



        public function pesquisaproduto(){


            $dados = [];
            $mes = $this->getMes();

            $sql = $this->pdo->prepare(
                "SELECT SUM(valor) FROM `controle` WHERE MONTH(created_at) = :mes and user = 1"
            );

            $sql->bindParam(":mes", $mes);
            $sql->execute();
            $soma = $sql->fetchAll(\PDO::FETCH_ASSOC);


             $sql = $this->pdo->prepare(
                 "SELECT * FROM `controle` WHERE MONTH(created_at) = :mes and user = 1"
             );

            $sql->bindParam(":mes", $mes);
            $sql->execute();
            $valores = $sql->fetchAll(\PDO::FETCH_ASSOC);

            $dados = [

                [
                    "soma"=>$soma
                ],
                [
                    "valores"=>$valores
                ]

            ];

            return $dados;
        }


        public function cadastro(){


            $email = $this->getEmail();
            $password = $this->getPassword();
            $nome = $this->getNome();
            $senha = password_hash($password,PASSWORD_DEFAULT);
            $expo = $this->getExpo();



            $sql = $this->pdo->prepare(
                "INSERT INTO users (name,email,password,expo_token) VALUES (:name,:email,:password,:expo)"
            );

            $sql->bindParam(":expo", $expo);
            $sql->bindParam(":name", $nome);
            $sql->bindParam(":email", $email);
            $sql->bindParam(":password", $senha);

            $sql->execute();

            if($sql->rowCount() !== 1)
                throw new \Exception("Usuário ou senha inválidos");


        }



    }
