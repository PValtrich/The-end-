import React from 'react';
import { View, Text } from 'react-native'; // Importando Componentes do React Native
import { useNavigation } from '@react-navigation/native'; // Navegação
import { estilo } from './style'; // Importando Estilo
import { Icon } from 'react-native-elements'; // Importando ícones

export default function Sessao() {
  const navigation = useNavigation(); // Hook de navegação

  return (
    <View style={estilo.all}>
      {/* Cabeçalho */}
      <View style={estilo.header}>
        <Text style={{ color: '#fff' }}>HISTÓRICO DE SESSÕES</Text>
      </View>

      {/* Corpo com os agendamentos */}
      <View style={estilo.body}>
        <View style={estilo.agendamentos}>
          <View style={estilo.cima}>
            <Text style={{ color: '#fff', fontSize: 15 }}>FILME</Text>
          </View>
          <View style={estilo.baixo}>
            <View style={estilo.horario}>
              <Text style={{ color: '#fff' }}>09:00</Text>
            </View>
            <View style={estilo.audio}>
              <Text style={{ color: '#fff' }}>DUBLADO</Text>
            </View>
            <View style={estilo.borda}>
              <View style={estilo.delete}>
                <Icon
                  style={{ marginLeft: '50%' }}
                  name='delete'
                  size={30}
                  color={'#fff'}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Navegação inferior */}
      <View style={estilo.nav}>
        <View style={estilo.iconav}>
          <Icon
            name='theaters'
            size={30}
            onPress={() => navigation.navigate('Filmes')}
          />
          <Text style={{ fontSize: 10 }}>FILMES</Text>
        </View>

        <View style={estilo.iconav}>
          <Icon
            name='search'
            size={30}
            onPress={() => navigation.navigate('Pesquisar')}
          />
          <Text style={{ fontSize: 10 }}>PESQUISAR</Text>
        </View>

        <View style={estilo.iconav}>
          <Icon
            name='movie'
            size={30}
            onPress={() => navigation.navigate('Cinemas')}
          />
          <Text style={{ fontSize: 10 }}>CINEMAS</Text>
        </View>

        <View style={estilo.iconav}>
          <Icon
            name='person'
            size={30}
            color={'#14FF00'}
            onPress={() => navigation.navigate('Perfil')}
          />
          <Text style={{ fontSize: 10, color: '#14FF00' }}>PERFIL</Text>
        </View>
      </View>
    </View>
  );
}