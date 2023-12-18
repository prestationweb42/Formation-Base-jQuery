<?php
class db
{
    private $server;
    private $db;
    private $login;
    private $mdp;

    public function __construct()
    {
        $this->server = 'localhost';
        $this->db = 'tutodevcomputer';
        $this->login = 'root';
        $this->mdp = '';
        try {
            $this->db = new PDO("mysql:host=$this->server;dbname=$this->db", $this->login, $this->mdp);
        } catch (Exception $e) {
            die('Erreur : ' . $e->getMessage());
        }
    }
    public function connection(){
        return $this->db;
    }
}