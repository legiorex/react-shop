import React from 'react';
import {Menu} from 'semantic-ui-react';

const MenuCoponent = () => (
    <Menu>
        <Menu.Item name='browse' onClick={this.handleItemClick}>
            Магазин книг
        </Menu.Item>


        <Menu.Menu position='right'>
            <Menu.Item name='signup'  onClick={this.handleItemClick}>
                Итого: &nbsp; <b>0</b> руб.
            </Menu.Item>

            <Menu.Item name='help'  onClick={this.handleItemClick}>
                Корзина (<b>0</b>)
            </Menu.Item>
        </Menu.Menu>
    </Menu>
)
export default MenuCoponent;