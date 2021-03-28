<?php

    namespace src\config;

    abstract class Connection{

        protected $pdo = NULL;

        public function __construct(){

            $host   = "localhost";
            $port   = "3306";
            $user   = "u236436105_root";
            $pass   = "!Arthhack2023";
            $dbname = "u236436105_biblioteca";

            $dsn = "mysql:host={$host};dbname={$dbname};port={$port}";

            $this->pdo = new \PDO($dsn, $user, $pass);
            $this->pdo->setAttribute(
                \PDO::ATTR_ERRMODE,
                \PDO::ERRMODE_EXCEPTION
            );            

        }

    }