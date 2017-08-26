<?php

use yii\db\Migration;

class m170823_111312_add_column_status_to_user extends Migration
{
    /*public function safeUp()
    {

    }

    public function safeDown()
    {
        echo "m170823_111312_add_column_status_to_user cannot be reverted.\n";

        return false;
    }*/


    // Use up()/down() to run migration code without a transaction.
    public function up()
    {
        $this->addColumn('user', 'status', $this->integer(2)->defaultValue(0));
        $this->addColumn('user', 'password_reset_token', $this->string(255)->defaultValue(''));
    }

    public function down()
    {
       $this->dropColumn('user', 'status');
        $this->dropColumn('user', 'password_reset_token');
    }

}
