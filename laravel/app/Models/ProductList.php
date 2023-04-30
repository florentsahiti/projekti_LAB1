<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductList extends Model
{
    use HasFactory;

    protected $table = 'product_list';


    protected $fillable = [ 'id', 'productname','description','marketprice','retailprice','datecreated','createdby','category'];
}
