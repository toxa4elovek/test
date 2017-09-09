<?php
/**
 * Created by PhpStorm.
 * User: Юлия
 * Date: 23.08.2017
 * Time: 13:47
 */

namespace console\controllers;

use dektrium\rbac\RbacConsoleModule;
use yii\console\Controller;


class RbacController extends RbacConsoleModule
{
    public function actionInit()
    {
        $authManager = \Yii::$app->authManager;

        // Create roles
        $admin  = $authManager->createRole('admin');


        // Create simple, based on action{$NAME} permissions
        $login  = $authManager->createPermission('login');
        $logout = $authManager->createPermission('logout');
        $error  = $authManager->createPermission('error');
        $signUp = $authManager->createPermission('sign-up');
        $index  = $authManager->createPermission('index');
        $view   = $authManager->createPermission('view');
        $update = $authManager->createPermission('update');
        $delete = $authManager->createPermission('delete');

       /* // Add permissions in Yii::$app->authManager
        $authManager->add($login);
        $authManager->add($logout);
        $authManager->add($error);
        $authManager->add($signUp);
        $authManager->add($index);
        $authManager->add($view);
        $authManager->add($update);
        $authManager->add($delete);

        // Add roles in Yii::$app->authManager
        $authManager->add($admin);

        // Add permission-per-role in Yii::$app->authManager
        // Guest
        $authManager->addChild($admin, $login);
        $authManager->addChild($admin, $logout);
        $authManager->addChild($admin, $error);
        $authManager->addChild($admin, $signUp);
        $authManager->addChild($admin, $index);
        $authManager->addChild($admin, $view);

        // BRAND
        $authManager->addChild($admin, $update);

        // TALENT
        $authManager->addChild($admin, $update);*/
    }

    public function actionGo()
    {
        echo 'Hello';
    }


}