import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      txtLuck: 'Hi there!',
      img: require('./src/biscoito.png')
    };

    this.getLuck = this.getLuck.bind(this);

    this.luck = [
      'Follow the good ones and learn from them.',
      'The Laught is the shortest distance between two people.',
      'Defects and virtues are just two sides of the same coin',
      'Youth is not a time of life, it is a state of mind.',
      'Our first and most important love is… self-love.',
      'Adversity is a mirror that reflects the true self.',
      'Show love and joy at every opportunity and you will see that peace is born within you.'
    ];

  }

  getLuck(){
    let randomN = Math.floor(Math.random() * this.luck.length);

    this.setState({
      txtLuck: '"' + this.luck[randomN] + '"',
      img: require('./src/biscoitoAberto.png')
    })
  }

  render(){
    return( 
      <View style={styles.container}>

        <Image
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.txtLuck}>{this.state.txtLuck}</Text>

        <TouchableOpacity 
          style={styles.btn}
          onPress={this.getLuck}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTxt}>Get your luck</Text>
          </View>
        </TouchableOpacity>

      </View>

    );
  }
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  img:{
    width: 250,
    height: 250
  },

  txtLuck:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },

  btn:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },

  btnArea:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnTxt:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  },  
});




