import { StatusBar } from 'expo-status-bar';
import {} from 'expo';
<StatusBar style="dark" />
import React, { Component, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

  ////////////////////////
 ///  npx expo start  ///
////////////////////////

let hamMenuPic = 'https://holadudee.github.io/52aa55ce2afd860ab4dd5b05ed4c7abf.png';

let deviceHeight = Dimensions.get('window').height;
let deviceHeightPart = deviceHeight/24;
let deviceWidth = Dimensions.get('window').width;
let ff = "Avenir";
let color = "red";
let selectColor = "red";

let taskbarHeight = deviceHeightPart*2.2;
let iconWidth = taskbarHeight;
let iconBackgroundWidth = iconWidth*1.2;
let iconBackgroundHeight = taskbarHeight*1.2;


const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e)
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e)
  }
};

export default function App() {

  const [settings, setSettings] = useState('none')
  const [mainDisplay, setMainDisplay] = useState('block')
  const [myColleges, setMyColleges] = useState('none')

  addCollege = () => {
    console.log('nothing here')
  };

  togSettings = () => {
    if (settings=='block'){
      setSettings('none'),
      setMyColleges('none'),
      setMainDisplay('block')
    }
    else {
      setSettings('block'),
      setMainDisplay('none'),
      setMyColleges('none')
    }
  };

  togMyColleges = () => {
    if (myColleges=='block'){
      setSettings('none'),
      setMyColleges('none'),
      setMainDisplay('block')
    }
    else {
      setSettings('none'),
      setMainDisplay('none'),
      setMyColleges('block')
    }
  };

  togHome = () => {
    setSettings('none'),
    setMyColleges('none'),
    setMainDisplay('block')
  };

  setOpenMenuToggle = () => {
    setOpenMenu(true)
    // if (open==true){
    //   setOpenMenu(true)
    // }
    // else{
    //   setOpenMenu(false)
    // }
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('select')
  const [items, setItems] = useState([
    {label: 'Select a College', value: 'select'},
    {label: 'UW - Madison', value: 'madison'},
    {label: 'UW - La Crosse', value: 'laCrosse'},
    {label: 'UW - Stevens Point', value: 'stevensPoint'},
    {label: 'NTC', value: 'ntc'},
  ]);


  const [openMenu, setOpenMenu] = useState(false);
  const [valueMenu, setValueMenu] = useState('home')
  const [itemsMenu, setItemsMenu] = useState([
    {label: 'Home', value: 'home'},
    {label: 'My Colleges', value: 'myColleges'},
    {label: 'Settings', value: 'settings'},
  ]);
  

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
      <View style={{backgroundColor:color, position:'absolute', top:0, left:0, width: deviceWidth, height:deviceHeightPart*1.5}}></View>
        <SafeAreaView>
        
        <View style={styles.topMargin}>
          <Text style={{fontSize: 24, fontFamily: ff, marginTop: 0, fontWeight: 'bold', color: '#3A3B3C'}}>College Ranker</Text>
            <View style={styles.topTaskbar}>
              <DropDownPicker
                open = {open}
                value = {value}
                items = {items}
                setOpen = {setOpen}
                setValue = {setValue}
                setItems = {setItems}

                closeAfterSelecting = {true}
                showBadgeDot = {false}
                theme = "DARK"
                searchable = {true}
                mode = "BADGE"

                style={{ width: deviceWidth/2, height: taskbarHeight, position: 'absolute', left: 0, top: 0, margin: 5}}/>
            </View>
          <View style={{position: 'absolute', top: -deviceHeightPart*3, right: 10, width: deviceWidth/15, height: deviceHeightPart}}>
            <DropDownPicker
            open={openMenu}
            value={valueMenu}
            items={itemsMenu}
            setOpen={setOpenMenu}
            setValue={setValueMenu}
            setItems={setItemsMenu}
            
            closeAfterSelecting={true}
            theme='DARK'
            mode='BADGE'
            listMode='MODAL'
            modalAnimationType="slide"
            style={{height: 0,width: 0,opacity: 0,position: 'absolute',top: 0, left: 0}}
          />

            <TouchableHighlight onPress={setOpenMenuToggle} style={{position: 'absolute', top: deviceHeight/4}}>
              <Image uri={hamMenuPic} style={{height: 25, width: 25}}/>
            </TouchableHighlight>
          </View>
        </View>

          <View style={styles.pages}>
            <View>{valueMenu=='settings' ? (<>

              <Image uri={'https://github.com/HolaDudee/collegeRanker/blob/main/assets/img/settingsGearWheel.png?raw=true'} style={{height: 100, width: 100, position: 'absolute', top: deviceHeight/4}} />
              
              

            </>) : null}</View>

            <View>{valueMenu=='myColleges' ? (<>

              <Image uri={'https://github.com/HolaDudee/collegeRanker/blob/main/assets/img/collegeIcon.png?raw=true'} style={{height: 100, width: 100, position: 'absolute', top: deviceHeight/4}} />
              
              
            </>) : null}</View>

            <View>{valueMenu=='home' ? (<>
              {/*<TouchableHighlight onPress={this.addCollege} style={{width: deviceWidth/2+5}}>
                <View style={{backgroundColor: 'lightblue', height: deviceHeightPart, justifyContent: 'center', width: deviceWidth/2, borderRadius: 15, marginLeft: 5}}><Text>Add New College</Text></View>
              </TouchableHighlight>*/}
              <Image uri={'https://github.com/HolaDudee/collegeRanker/blob/main/assets/img/homeIconV2.png?raw=true'} style={{height: 50, width: 50, position: 'absolute', top: deviceHeight/4}} />
              
              
            </>) : null}</View>
          </View>

          <View style={styles.colleges}>
            <View>{value=='madison' ? (<>

              <Text>UW - Madison</Text>

            </>) : null}</View>

            <View>{value=='laCrosse' ? (<>

              <Text>UW - La Crosse</Text>

            </>) : null}</View>

            <View>{value=='stevensPoint' ? (<>

              <Text>UW - Stevens Point</Text>

            </>) : null}</View>

            <View>{value=='ntc' ? (<>

              <Text>NTC</Text>

            </>) : null}</View>
          
          </View>
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    // alignItems: 'center',
  },
  colleges: {
    // flex: 1,
    position: 'absolute',
    top: deviceHeight/4,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  pages: {
    // flex: 9,
    alignItems: 'left', //WHAT???
    // justifyContent: 'center',
    textAlign: 'center',
  },
  topMargin: {
    backgroundColor: color,
    height: deviceHeightPart*2,
    width: deviceWidth,
    position: 'relative',
    left: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    borderRadius: 2,
  },
  topTaskbar: {
    // flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: deviceHeightPart*2,
    width: deviceWidth,
  },
  // leftTopTaskbar: {
  //   flexDirection: 'row-reverse',
  //   alignItems: 'center',
  //   justifyContent: 'space-evenly',
  //   position: 'absolute',
  //   left: deviceWidth/2+5,
  //   borderRadius: 10,
  //   // height: deviceHeightPart*3,
  //   // width: deviceWidth,
  //   // backgroundColor: 'lightblue',
  // },
});