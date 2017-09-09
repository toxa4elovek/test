<?php
/**
 * Created by PhpStorm.
 * User: Юлия
 * Date: 23.08.2017
 * Time: 14:19
 */

namespace backend\widgets;


use yii\bootstrap\Widget;
use yii\helpers\Url;
use yii\widgets\Menu;

class MainMenuWidget extends Widget
{
    public function run()
    {
        echo Menu::widget([
            'items' => [
                [
                    'label' => 'Пользователи',
                    'url' => Url::to(['/user/admin']),
                    'template' => '<a href="{url}"><i class="fa fa-users"></i> <span>{label}</span></a>',

                ],
            ],
            'activateItems' => true,
            'activateParents' => true,
            'activeCssClass' => 'active',
            'encodeLabels' => false,
            /*'dropDownCaret' => false,*/
            'submenuTemplate' => "\n<ul class='treeview-menu' role='menu'>\n{items}\n</ul>\n",
            'options' => [
                'class' => 'sidebar-menu',
            ],
        ]);
    }

}