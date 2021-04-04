<?php

    namespace src\models;
    use src\config\Connection;
    use src\middleware\Auth;

    class User extends Connection{

        private $nome;
        private $email;
        private $password;
        private $mes;
        private $expo;
        private $instalacao;
        private $rua;
        private $vazamento;
        private $caixa;


        /**
         * @return mixed
         */
        public function getCaixa()
        {
            return $this->caixa;
        }

        /**
         * @return mixed
         */
        public function getInstalacao()
        {
            return $this->instalacao;
        }

        /**
         * @return mixed
         */
        public function getRua()
        {
            return $this->rua;
        }

        /**
         * @return mixed
         */
        public function getVazamento()
        {
            return $this->vazamento;
        }

        /**
         * @param mixed $caixa
         */
        public function setCaixa($caixa): void
        {
            $this->caixa = $caixa;
        }

        /**
         * @param mixed $instalacao
         */
        public function setInstalacao($instalacao): void
        {
            $this->instalacao = $instalacao;
        }

        /**
         * @param mixed $rua
         */
        public function setRua($rua): void
        {
            $this->rua = $rua;
        }

        /**
         * @param mixed $vazamento
         */
        public function setVazamento($vazamento): void
        {
            $this->vazamento = $vazamento;
        }


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

            if(!is_null($this->getExpo())){
                $expo = $this->getExpo();

                $id = $result['id'];

                $sql = $this->pdo->prepare(
                    "UPDATE `users` SET `expo_token` = '$expo' WHERE `users`.`id` = '$id';"
                );

                $sql->execute();
            }


            if(!password_verify($password, $result['password']))
                throw new \Exception('Usuário ou senha inválidos');

            return $result;
        }






        public function dashboard($token_final){

            $dados = [];

            $auth = new Auth();

            $token = $auth->decodeToken($token_final);

            $usuario_id = ($token->id);


            $sql = $this->pdo->prepare(
                "SELECT name FROM `infos` 
                        INNER JOIN users ON
                        users.id = infos.user
                        where users.id =$usuario_id");
            $sql->execute();

            if($sql->rowCount() < 1)
                throw new \Exception("Erro na API");

            $usuario = $sql->fetchAll(\PDO::FETCH_ASSOC)[0]['name'];



            $sql = $this->pdo->prepare(
                "SELECT instalacao FROM `users` 
                        where users.id =$usuario_id");
            $sql->execute();

            if($sql->rowCount() < 1)
                throw new \Exception("Erro na API");

            $instalacao = $sql->fetchAll(\PDO::FETCH_ASSOC)[0]['instalacao'];



            $sql = $this->pdo->prepare(
                "SELECT caixa FROM `infos` 
                        INNER JOIN users ON
                        users.id = infos.user
                        where users.id =$usuario_id ORDER BY infos.id DESC LIMIT 1");
            $sql->execute();

            if($sql->rowCount() < 1)
                throw new \Exception("Erro na API");

            $caixa = $sql->fetchAll(\PDO::FETCH_ASSOC)[0]['caixa'];

            $sql = $this->pdo->prepare(
                "SELECT rua FROM `infos` 
                        INNER JOIN users ON
                        users.id = infos.user
                        where users.id =$usuario_id ORDER BY infos.id DESC LIMIT 1");
            $sql->execute();

            if($sql->rowCount() < 1)
                throw new \Exception("Erro na API");

            $rua = $sql->fetchAll(\PDO::FETCH_ASSOC)[0]['rua'];


            $sql = $this->pdo->prepare(
                "SELECT vazamento FROM `infos` 
                        INNER JOIN users ON
                        users.id = infos.user
                        where users.id =$usuario_id ORDER BY infos.id DESC LIMIT 1");
            $sql->execute();

            if($sql->rowCount() < 1)
                throw new \Exception("Erro na API");

            $vazamento = $sql->fetchAll(\PDO::FETCH_ASSOC)[0]['vazamento'];




            $dados = [

                [
                  "id"=>"usuario",
                  "nome"=>$usuario,

                ],

                [
                    "id"=>"instalacao",
                    "nome"=>$instalacao,

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



        public function refresh(){


            $dados = [];
            $vazamento = $this->getVazamento();
            $caixa = $this->getCaixa();
            $rua = $this->getRua();
            $instalacao = $this->getInstalacao();

            $sql = $this->pdo->prepare(
                "SELECT * FROM `users` WHERE instalacao = :instalacao"
            );

            $sql->bindParam(":instalacao", $instalacao);
            $sql->execute();
            $inteiro = $sql->fetchAll(\PDO::FETCH_ASSOC);

            $id_usuario = $inteiro[0]['id'];
            $expo = $inteiro[0]['expo_token'];


             $sql = $this->pdo->prepare(
                 "INSERT INTO `infos` (`id`, `user`, `rua`, `caixa`, `vazamento`, `created_at`) VALUES (NULL, :usuario, :rua, :caixa, :vazamento, current_timestamp());"
             );

            $sql->bindParam(":usuario", $id_usuario);
            $sql->bindParam(":rua", $rua);
            $sql->bindParam(":caixa", $caixa);
            $sql->bindParam(":vazamento", $vazamento);

            $sql->execute();



            if($rua == 1) {

                $this->send($caixa,$expo);


            }

        }


        public function cadastro(){


            $email = $this->getEmail();
            $password = $this->getPassword();
            $nome = $this->getNome();
            $senha = password_hash($password,PASSWORD_DEFAULT);

            $instalacao = md5($senha);


            $sql = $this->pdo->prepare(
                "INSERT INTO users (name,email,password,instalacao) VALUES (:name,:email,:password,:instalacao)"
            );

            $sql->bindParam(":instalacao", $instalacao);
            $sql->bindParam(":name", $nome);
            $sql->bindParam(":email", $email);
            $sql->bindParam(":password", $senha);

            $sql->execute();

            if($sql->rowCount() !== 1)
                throw new \Exception("Usuário ou senha inválidos");


        }


        public function controle($token_final){

            $mes = $this->getMes();
            $auth = new Auth();

            $token = $auth->decodeToken($token_final);

            $usuario_id = ($token->id);
            $sql = $this->pdo->prepare(
                "SELECT * FROM `infos` WHERE user = $usuario_id and MONTH(created_at) = :mes"
            );

            $sql->bindParam(":mes", $mes);
            $sql->execute();
            return $sql->fetchAll(\PDO::FETCH_ASSOC);


        }


        public function send($caixa,$expo){


            //para bater a notificacao
            // faz a alteração em update status - se houver vazamento chama essa função

            $caixa = number_format($caixa,2,'.','.');


            try{


                $postFields = json_encode([

                    "to" => $expo,
                    "title" => "Foi identificado falta de água da rua!",
                    "body" => "Foi identificado falta de água da rua! Economize água! A porcentagem de água da caixa é: $caixa %"

                ]);


                $curl = curl_init();

                curl_setopt_array($curl, array(

                        CURLOPT_URL => 'https://exp.host/--/api/v2/push/send',
                        CURLOPT_RETURNTRANSFER => true,
                        CURLOPT_ENCODING => "",
                        CURLOPT_MAXREDIRS => 10,
                        CURLOPT_TIMEOUT => 30,
                        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                        CURLOPT_CUSTOMREQUEST => "POST",
                        CURLOPT_POSTFIELDS => $postFields,
                        CURLOPT_HTTPHEADER => array(

                            "content-type: application/json"

                        ),
                    )
                );

                $response = curl_exec($curl);
                $err = curl_error($curl);

                curl_close($curl);

                if ($err) {

                    $this->response['message'] = "cURL Error #:" . $err;

                } else {

                    $this->response['message'] = $response;

                }

            } catch(\Exception $e){

                $this->response['message'] = $e->getMessage();

            }

            return $this->response;

        }






    }
