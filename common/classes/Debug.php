<?php

namespace common\classes;
/**
 * Created by PhpStorm.
 * User: Антон
 * Date: 09.09.2017
 * Time: 16:26
 */
class Debug
{
    /**
     * @param $arg
     */
    public static function prn($arg)
    {
        echo '<pre style="background-color: #8B8986">';
        print_r($arg);
        echo '</pre>';
    }
}