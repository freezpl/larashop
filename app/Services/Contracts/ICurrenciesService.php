<?php 

namespace App\Services\Contracts;

interface ICurrenciesService {
    public function addCurrency($data);
    public function editCurrencyPublish($id, $published);
    public function getById($id);
    public function update($data);
}