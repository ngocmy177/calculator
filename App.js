import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      resultText:"",
      calculationText:""
    }
    this.operations = ["DEL","+","-","*",":"];
  }
  calculateResult(){
    const text = this.state.resultText
    this.setState({
      calculationText: eval(text)
    })
  }
  validate(){
    const text = this.state.resultText
    switch(text.slice(-1)){
      case '+':
      case '-':
      case '*':
      case ':':
        return false
    }
    return true
  }
  ButtonPressed(text){
    if(text == '='){
      return this.validate() && this.calculateResult()
    }
    this.setState({
      resultText: this.state.resultText+text
    })
  }
  operate(operation){
    switch(operation){
      case 'DEL':
        let text = this.state.resultText.split('')
        text.pop()
        this.setState({
          resultText:text.join('')
        })
          break

      case '+':
      case '-':
      case '*':
      case ':':
        const lastChar = this.state.resultText.split('').pop()
        if(this.operations.indexOf(lastChar) > 0) return
        if(this.state.text == "") return
        this.setState({
          resultText: this.state.resultText + operation
        })

    }
  }
  render(){
    let rows = []
    let nums = [[1,2,3],[4,5,6],[7,8,9],[",",0,"="]]
    for(let i = 0; i < 4; i++){
      let row = []
      for (let j = 0; j < 3; j++){
        row.push
        (<TouchableOpacity key={nums[i][j]} onPress={()=>this.ButtonPressed(nums[i][j])} style={styles.btn}>
          <Text style={styles.btnText}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View key={i} style={styles.row}>{row}</View>)
    }

    let ops = [];
    for(let i = 0; i < 5; i++){
      let row = []
        ops.push(<TouchableOpacity key={this.operations[i]} onPress={()=>this.operate(this.operations[i])} style={styles.btn}>
          <Text style={[styles.btnText, styles.white]}>{this.operations[i]}</Text>
        </TouchableOpacity>)
      }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
            {ops}
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  calculationText:{
    fontSize: 24,
    color:'black'
  },
  btnText:{
    fontSize: 30,
    color:'white'
  },
  white:{
    color:'white'
  },
  resultText:{
    fontSize: 30,
    color:'black'
  },
  result: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'

  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf:'stretch',
    justifyContent:'center'
  },
  numbers: {
    flex: 3,
    backgroundColor: '#434343',
  },
  operations: {
    flex: 1,
    backgroundColor: '#636363',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  }
})

//flexible: khoa pham
