import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

export default function DrawerItems(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Perfil" />
      <DrawerItem label="Listas" />
      <DrawerItem label="Tópicos" />
      <DrawerItem label="Itens Salvos" />
      <DrawerItem label="Moments" />
      <DrawerItem label="Configurações e privacidade" />
      <DrawerItem label="Central de Ajuda" />
    </DrawerContentScrollView>
  );
}
