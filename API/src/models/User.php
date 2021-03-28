<?php

    namespace src\models;
    use src\config\Connection;

    class User extends Connection{

        private $id;
        private $nome;
        private $email;
        private $telefone;
        private $password;

        private $genero;
        private $categoria;
        private $numero;
        private $marca;
        private $modelo;
        private $valor_unitario;
        private $total_venda;
        private $quantidade;
        private $nome_cliente;
        private $custo_unitario;
        private $created_at;
        private $forma_pagamento;
        private $total_geral;

        private $CodigoLivro;
        private $NomeLivro;
        private $CodigoVisitante;
        private $DiasEmprestimo;
        private $DataDevolucao;
        private $DataEmprestimo;
        private $NomeVisitante;
        private $CodigoRevista;
        private $NomeRevista;

        private $origem;
        private $valor;
        private $data;


        /**
         * @return mixed
         */
        public function getOrigem()
        {
            return $this->origem;
        }

        /**
         * @param mixed $origem
         */
        public function setOrigem($origem)
        {
            $this->origem = $origem;
        }

        /**
         * @return mixed
         */
        public function getData()
        {
            return $this->data;
        }

        /**
         * @param mixed $data
         */
        public function setData($data)
        {
            $this->data = $data;
        }

        /**
         * @return mixed
         */
        public function getTelefone()
        {
            return $this->telefone;
        }

        /**
         * @return mixed
         */
        public function getValor()
        {
            return $this->valor;
        }

        /**
         * @param mixed $valor
         */
        public function setValor($valor)
        {
            $this->valor = $valor;
        }

        /**
         * @return mixed
         */
        public function getNomeRevista()
        {
            return $this->NomeRevista;
        }

        /**
         * @param mixed $NomeRevista
         */
        public function setNomeRevista($NomeRevista)
        {
            $this->NomeRevista = $NomeRevista;
        }

        /**
         * @param mixed $CodigoRevista
         */
        public function setCodigoRevista($CodigoRevista)
        {
            $this->CodigoRevista = $CodigoRevista;
        }
        /**
         * @return mixed
         */
        public function getCodigoRevista()
        {
            return $this->CodigoRevista;
        }

        /**
         * @param mixed $DataEmprestimo
         */
        public function setDataEmprestimo($DataEmprestimo)
        {
            $this->DataEmprestimo = $DataEmprestimo;
        }
        /**
         * @param mixed $NomeVisitante
         */
        public function setNomeVisitante($NomeVisitante)
        {
            $this->NomeVisitante = $NomeVisitante;
        }

        /**
         * @return mixed
         */
        public function getNomeVisitante()
        {
            return $this->NomeVisitante;
        }


        /**
         * @return mixed
         */
        public function getDataEmprestimo()
        {
            return $this->DataEmprestimo;
        }


        /**
         * @param mixed $DataDevolucao
         */
        public function setDataDevolucao($DataDevolucao)
        {
            $this->DataDevolucao = $DataDevolucao;
        }

        /**
         * @return mixed
         */
        public function getDataDevolucao()
        {
            return $this->DataDevolucao;
        }

        /**
         * @return mixed
         */
        public function getDiasEmprestimo()
        {
            return $this->DiasEmprestimo;
        }

        /**
         * @param mixed $DiasEemprestimo
         */
        public function setDiasEmprestimo($DiasEemprestimo)
        {
            $this->DiasEmprestimo = $DiasEemprestimo;
        }

        /**
         * @return mixed
         */
        public function getCodigoVisitante()
        {
            return $this->CodigoVisitante;
        }

        /**
         * @param mixed $CodigoVisitante
         */
        public function setCodigoVisitante($CodigoVisitante)
        {
            $this->CodigoVisitante = $CodigoVisitante;
        }

        /**
         * @return mixed
         */
        public function getNomeLivro()
        {
            return $this->NomeLivro;
        }

        /**
         * @param mixed $NomeLivro
         */
        public function setNomeLivro($NomeLivro)
        {
            $this->NomeLivro = $NomeLivro;
        }


        /**
         * @param mixed $CodigoLivro
         */
        public function setCodigoLivro($CodigoLivro)
        {
            $this->CodigoLivro = $CodigoLivro;
        }

        /**
         * @return mixed
         */
        public function getCodigoLivro()
        {
            return $this->CodigoLivro;
        }


        public function __construct(){
            parent::__construct();
        }

        public function getCategoria(){
            return $this->categoria;
        }

        public function getNomeCliente(){
            return $this->nome_cliente;
        }

        public function setNomeCliente($nome_cliente){
            $this->nome_cliente = $nome_cliente;
        }

        public function getMarca(){
            return $this->marca;
        }

        public function getModelo(){
            return $this->modelo;
        }

        public function getTotalVenda(){
            return $this->total_venda;
        }

        public function getQuantidade(){
            return $this->quantidade;
        }

        public function getValorUnitario(){
            return $this->valor_unitario;
        }

        public function getNumero(){
            return $this->numero;
        }

        public function setCategoria($categoria){
            $this->categoria = $categoria;
        }

        public function setMarca($marca){
            $this->marca = $marca;
        }

        public function setModelo($modelo){
            $this->modelo = $modelo;
        }

        public function setNumero($numero){
            $this->numero = $numero;
        }

        public function setQuantidade($quantidade){
            $this->quantidade = $quantidade;
        }

        public function setTotalVenda($total_venda){
            $this->total_venda = $total_venda;
        }

        public function setValorUnitario($valor_unitario){
            $this->valor_unitario = $valor_unitario;
        }

        public function setNome($nome){
            $this->nome = $nome;
        }


        public function getNome()
        {
            return $this->nome;
        }

        public function setEmail($email){
            $this->email = $email;
        }

        public function setTelefone($telefone){
            $this->telefone = $telefone;
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

        public function setId($id){
            $this->id = $id;
        }

        public function getId(){
            return $this->id;
        }

        public function getGenero(){
            return $this->genero;
        }

        public function setGenero($genero){
            $this->genero = $genero;
        }

        public function getCustoUnitario(){
            return $this->custo_unitario;
        }

        public function setCustoUnitario($custo_unitario){
            $this->custo_unitario = $custo_unitario;
        }

        public function getCreatedAt(){
            return $this->created_at;
        }

        public function setCreatedAt($created_at){
            $this->created_at = $created_at;
        }

        public function getFormaPagamento(){
            return $this->forma_pagamento;
        }

        public function setFormaPagamento($forma_pagamento){
            $this->forma_pagamento = $forma_pagamento;
        }

        public function getTotalGeral(){
            return $this->total_geral;
        }

        public function setTotalGeral($total_geral){
            $this->total_geral = $total_geral;
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



        public function getAll(){

            $sql = $this->pdo->prepare(
                "SELECT * from livros ORDER BY id ASC"
            );

            $sql->execute();


            if($sql->rowCount() < 1)
                throw new \Exception("Nenhum Livro Cadastrado");

            return $sql->fetchAll(\PDO::FETCH_ASSOC);
        }




        public function acervo(){
            $sql = $this->pdo->prepare(
                "SELECT * from livros ORDER BY id ASC "
            );

            $sql->execute();


            if($sql->rowCount() < 1)
                throw new \Exception("Nenhum Livro cadastrado");

            return $sql->fetchAll(\PDO::FETCH_ASSOC);
        }

        public function getAllVisitantes(){
            $sql = $this->pdo->prepare(
                "SELECT * from visitantes ORDER BY id ASC"
            );

            $sql->execute();

            if($sql->rowCount() < 1)
                throw new \Exception("Nenhum Visitante cadastrado");

            return $sql->fetchAll(\PDO::FETCH_ASSOC);
        }



        public function carrinho(){
            $sql = $this->pdo->prepare(
                "SELECT * from produtos_vendas ORDER BY id ASC"
            );
            $sql->execute();

            if($sql->rowCount() < 1)
                throw new \Exception("Nenhum Produto no Carrinho neste Momento! Favor Adicionar um Produto no Carrinho");

            return $sql->fetchAll(\PDO::FETCH_ASSOC);
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

        public function pesquisalivro(){
            $nome_livro = $this->getNomeLivro();

            $sql = $this->pdo->prepare(
                "select codigo,nome,autor,genero,edicao,estado,colecao,image from livros where nome LIKE '%$nome_livro%'"
            );

            $sql->execute();

            return $sql->fetchAll(\PDO::FETCH_ASSOC);
        }

        public function pesquisavisitante(){
            $nome_visitante = $this->getNomeVisitante();


            $sql = $this->pdo->prepare(
                "select * from visitantes where nome_visitante LIKE '%$nome_visitante%'"
            );

            $sql->bindParam(":nome_visitante", $nome_visitante);
            $sql->execute();

            return $sql->fetchAll(\PDO::FETCH_ASSOC);
        }



        public function emprestimos(){

            $dados=[];
            $dataatual = date('Y-m-d');
            $sql = $this->pdo->prepare(
                "SELECT * FROM `emprestimos` WHERE data_devolucao >= '$dataatual' && estado =1"
            );

            $sql->execute();

            $sql1 = $this->pdo->prepare(
                "SELECT * FROM `emprestimos` WHERE data_devolucao <= '$dataatual' && estado =1"
            );
            $sql1->execute();


            $dentrodoprazo= $sql1->fetchAll(\PDO::FETCH_ASSOC);


             $foradoprazo = $sql->fetchAll(\PDO::FETCH_ASSOC);

             $dados=[
                 [
                     "id"=> "fora_prazo",
                     "valor" =>$dentrodoprazo
                 ],
                 [
                     "id"=> "dentro_prazo",
                     "valor" =>$foradoprazo
                 ]
             ];
            return $dados;
        }





        public function emprestimo()
        {
            $codigo_livro = $this->getCodigoLivro();
            $nome_livro = $this->getNomeLivro();
            $data_emprestimo = $this->getDataEmprestimo();
            $codigo_visitante = $this->getCodigoVisitante();
            $dias_emprestimo = $this->getDiasEmprestimo();
            $data_devolucao = $this->getDataDevolucao();
            $nome_visitante = $this->getNomeVisitante();

            $link = mysqli_connect("localhost", "u236436105_root", "!Arthhack2023", "u236436105_biblioteca");

            $resultado1 = mysqli_query($link, "SELECT nome_visitante FROM visitantes WHERE nome_visitante = '$nome_visitante'");

            $linha1 = mysqli_fetch_assoc($resultado1);

            if(is_null($linha1))
                throw new \Exception("O Nome do Visitante está incorreto!");


            $resultado = mysqli_query($link, "SELECT codigo_livro FROM emprestimos WHERE codigo_livro = '$codigo_livro' AND estado = 1");

            $linha = mysqli_fetch_assoc($resultado);

            $dataset1 = $linha['codigo_livro'];


            if(is_null($dataset1)){
                $dataset1 = 0;
            }

            if($codigo_livro === $dataset1)
                throw new \Exception("Livro emprestado");




            $sql = $this->pdo->prepare(

                    "INSERT INTO emprestimos (data_emprestimo,codigo_livro, nome_livro, codigo_visitante,nome_visitante, dias_emprestimo, data_devolucao,created_at) VALUES (:data_emprestimo,:codigo_livro, :nome_livro, :codigo_visitante,:nome_visitante, :dias_emprestimo, :data_devolucao,:created_at)"

                );

                $sql->bindValue(":data_emprestimo", $data_emprestimo);
                $sql->bindValue(":codigo_livro", $codigo_livro);
                $sql->bindValue(":nome_livro", $nome_livro);
                $sql->bindValue(":codigo_visitante", $codigo_visitante);
                $sql->bindValue(":nome_visitante", $nome_visitante);
                $sql->bindValue(":dias_emprestimo", $dias_emprestimo);
                $sql->bindValue(":data_devolucao", $data_devolucao);
                $sql->bindValue(":created_at", $data_emprestimo);
                $sql->execute();

                $sql = $this->pdo->prepare(
                    "UPDATE livros SET estado = 1 WHERE codigo = :codigo_livro"
                );
                $sql->bindValue(":codigo_livro", $codigo_livro);
                $sql->execute();

                if ($sql->rowCount() !== 1)
                    throw new \Exception("Falha ao Emprestar");



        }


        public function emprestimorevista()
        {
            $codigo_revista = $this->getCodigoRevista();
            $nome_revista = $this->getNomeRevista();
            $data_emprestimo = $this->getDataEmprestimo();
            $codigo_visitante = $this->getCodigoVisitante();
            $dias_emprestimo = $this->getDiasEmprestimo();
            $data_devolucao = $this->getDataDevolucao();
            $nome_visitante = $this->getNomeVisitante();


            $link = mysqli_connect("localhost", "u236436105_root", "!Arthhack2023", "u236436105_biblioteca");

            $resultado1 = mysqli_query($link, "SELECT nome_visitante FROM visitantes WHERE nome_visitante = '$nome_visitante'");

            $linha1 = mysqli_fetch_assoc($resultado1);

            if(is_null($linha1))
                throw new \Exception("O Nome do Visitante está incorreto!");

                $sql = $this->pdo->prepare(

                    "INSERT INTO emprestimos (data_emprestimo,codigo_livro, nome_livro, codigo_visitante,nome_visitante, dias_emprestimo, data_devolucao,created_at) VALUES (:data_emprestimo,:codigo_revista, :nome_revista, :codigo_visitante,:nome_visitante, :dias_emprestimo, :data_devolucao,:created_at)"

                );

            $sql->bindValue(":data_emprestimo", $data_emprestimo);
            $sql->bindValue(":codigo_revista", $codigo_revista);
            $sql->bindValue(":nome_revista", $nome_revista);
            $sql->bindValue(":codigo_visitante", $codigo_visitante);
            $sql->bindValue(":nome_visitante", $nome_visitante);
            $sql->bindValue(":dias_emprestimo", $dias_emprestimo);
            $sql->bindValue(":data_devolucao", $data_devolucao);
            $sql->bindValue(":created_at", $data_emprestimo);
            $sql->execute();


            if ($sql->rowCount() !== 1)
                throw new \Exception("Falha ao Emprestar");



        }




        public function devolucao(){

            $id = $this->getId();
            $codigo_livro = $this->getCodigoLivro();
            $nome_livro = $this->getNomeLivro();
            $codigo_visitante = $this->getCodigoVisitante();
            $nome_visitante = $this->getNomeVisitante();
            $data_emprestimo = $this->getDataEmprestimo();
            $dias_emprestimo = $this->getDiasEmprestimo();
            $data_devolucao = $this->getDataDevolucao();
            $data_devolucao = explode("/", $data_devolucao);
            $data_devolucao = $data_devolucao[2] . "/" . $data_devolucao[1] . "/" . $data_devolucao[0];

            $created_at = date('Y-m-d');


            $sql=$this->pdo->prepare(
                "UPDATE livros SET estado = '0' WHERE codigo = :codigo_livro;"
            );
            $sql->bindValue(":codigo_livro",$codigo_livro);

            $sql->execute();

            $sql=$this->pdo->prepare(
                "UPDATE emprestimos SET estado = 0, data_devolucao = :data_devolucao WHERE id = :id;"
            );
            $sql->bindValue(":data_devolucao",$data_devolucao);
            $sql->bindValue(":id",$id);
            $sql->execute();


            $sql=$this->pdo->prepare(
                "INSERT INTO devolucaos ( data_emprestimo, codigo_livro, nome_livro, codigo_visitante, nome_visitante,dias_emprestimo,data_devolucao,created_at) VALUES (:data_emprestimo, :codigo_livro, :nome_livro, :codigo_visitante, :nome_visitante,:dias_emprestimo,:data_devolucao,:created_at )"
            );
            $sql->bindValue(":data_emprestimo",$data_emprestimo);
            $sql->bindValue(":codigo_livro",$codigo_livro);
            $sql->bindValue(":nome_livro",$nome_livro);
            $sql->bindValue(":codigo_visitante",$codigo_visitante);
            $sql->bindValue(":nome_visitante",$nome_visitante);
            $sql->bindValue(":dias_emprestimo",$dias_emprestimo);
            $sql->bindValue(":data_devolucao",$data_devolucao);
            $sql->bindValue(":created_at",$created_at);
            $sql->execute();

            if($sql->rowCount() !== 1)
                throw new \Exception("Não foi possível realizar a devolucao deste livro");
        }



        public function obtemproduto(){
            $id = $this->getId();

            $sql=$this->pdo->prepare(
                "SELECT * from livros where id=:id LIMIT 1"
            );
            $sql->bindValue(":id",$id);

            $sql->execute();

            if($sql->rowCount() !== 1)
                throw new \Exception("Livro Inexistente");

            return $sql->fetchAll(\PDO::FETCH_ASSOC)[0];
        }



        public function renovacao(){

            $id = $this->getId();
            $dias = $this->getDiasEmprestimo();
            $data_devolucao = $this->getDataDevolucao();

            $sql = $this->pdo->prepare(
                "UPDATE emprestimos SET dias_emprestimo = :dias, data_devolucao = :data_devolucao WHERE id = :id;"
            );
            $sql->bindValue(':id', $id);
            $sql->bindValue(':dias', $dias);
            $sql->bindValue(':data_devolucao', $data_devolucao);
            $sql->execute();


            if($sql->rowCount() !== 1)
                throw new \Exception("Não foi possível localizar o livro para renovar");


        }


        private function  convert($valor){
            $valor = str_replace('.','', $valor);
            $valor = str_replace(',','.', $valor);
            $valor = number_format($valor,2,'.','');


            return $valor;
        }

        public function entradafinanceiro(){
            $origem = $this->getOrigem();
            $valor = $this->getValor();
            $data = $this->getData();

            $data = explode("/",$data);
            $data = $data[2].$data[1].$data[0];

            $valor = $this->convert($valor);

            $sql = $this->pdo->prepare(
                "INSERT INTO entrada_caixa (origem,valor,data) VALUES (:origem,:valor,:data);"
            );

            $sql->bindParam(":origem", $origem);
            $sql->bindParam(":valor", $valor);
            $sql->bindParam(":data", $data);

            $sql->execute();

            $conn = mysqli_connect('localhost','u236436105_root','!Arthhack2023','u236436105_biblioteca');

            $resultado = mysqli_query($conn, "SELECT valor_caixa from caixa");
            $linhas = mysqli_num_rows($resultado);


            while($linhas = mysqli_fetch_array($resultado)){
                $em_caixa =$linhas['valor_caixa'];

            }

            $calculo = $em_caixa+$valor;

            mysqli_query($conn, "UPDATE caixa set valor_caixa=$calculo where id =1");


        }


        public function saidafinanceiro(){
            $origem = $this->getOrigem();
            $valor = $this->getValor();
            $data = $this->getData();

            $data = explode("/",$data);
            $data = $data[2].$data[1].$data[0];

            $valor = $this->convert($valor);

            $sql = $this->pdo->prepare(
                "INSERT INTO saida_caixa (destino,valor,data) VALUES (:origem,:valor,:data);"
            );

            $sql->bindParam(":origem", $origem);
            $sql->bindParam(":valor", $valor);
            $sql->bindParam(":data", $data);

            $sql->execute();

            $conn = mysqli_connect('localhost','u236436105_root','!Arthhack2023','u236436105_biblioteca');

            $resultado = mysqli_query($conn, "SELECT valor_caixa from caixa");
            $linhas = mysqli_num_rows($resultado);


            while($linhas = mysqli_fetch_array($resultado)){
                $em_caixa =$linhas['valor_caixa'];

            }

            $calculo = $em_caixa-$valor;

            mysqli_query($conn, "UPDATE caixa set valor_caixa=$calculo where id =1");


        }

    }
