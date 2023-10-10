import { StatusBar } from 'expo-status-bar';
import {} from 'expo';
<StatusBar style="dark" />
import React, { Component, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableOpacity, Alert, Dimensions, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

  ////////////////////////
 ///  npx expo start  ///
////////////////////////


let deviceHeight = Dimensions.get('window').height;
let deviceHeightPart = deviceHeight/24;
let deviceWidth = Dimensions.get('window').width;
let ff = "Avenir";
let color = "red";
let selectColor = "red";

let taskbarHeight = deviceHeightPart*1.5;
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
    setOpenMenu(true),
    setValue('select'),
    setOpen(false)
  };

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
    {label: 'Home', value: 'home', icon: () => <Image source={require('./assets/img/homeIconV2White.png')} style={{height: 25, width: 25}} />},
    {label: 'My Colleges', value: 'myColleges', icon: () => <Image source={require('./assets/img/collegeIconWhite.png')} style={{height: 25, width: 25}} />},
    {label: 'Settings', value: 'settings', icon: () => <Image source={require('./assets/img/settingsGearWheelWhite.png')} style={{height: 25, width: 25}} />},
  ]);
  
  const [openS1, setOpenS1] = useState(false);
  const [valueS1, setValueS1] = useState('0')
  const [itemsS1, setItemsS1] = useState([
    {label: '0', value: '0'},
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
    {label: '6', value: '6'},
    {label: '7', value: '7'},
    {label: '8', value: '8'},
    {label: '9', value: '9'},
    {label: '10', value: '10'},
  ]);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
      <View style={{backgroundColor:color, position:'absolute', top:0, left:0, width: deviceWidth, height:deviceHeightPart*1.5}}></View>
        <SafeAreaView>
        
        <View style={styles.topMargin}>
          <Text style={{fontSize: 24, fontFamily: ff, marginBottom: 0, fontWeight: 'bold', color: '#3A3B3C'}}>College Ranker</Text>
        </View>

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

                style={{ width: deviceWidth/2, height: taskbarHeight+10, position: 'absolute', left: 0, top: 0, margin: 5}}/>
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
            textStyle={{fontSize: 30}}
            theme='DARK'
            mode='BADGE'
            listMode='MODAL'
            modalAnimationType="slide"
            style={{height: 0,width: 0,opacity: 0,position: 'absolute',top: 0, left: 0}}
          />
            <View style={{backgroundColor: '#62b4cf', position: 'absolute', top: deviceHeightPart*5.5, right: 0, marginTop: 5, borderRadius: 7.5, height: taskbarHeight+10, width: iconWidth+10}}></View>
            <TouchableOpacity onPress={setOpenMenuToggle} style={{position: 'absolute', top: deviceHeightPart*5.5, right: 0, margin: 5, marginTop: 10, height: taskbarHeight, width: iconWidth}}>
              <Image source={require('./assets/img/hamburgerMenuIcon.png')} style={{height: taskbarHeight, width: iconWidth}}/>
            </TouchableOpacity>
          </View>

          <View style={styles.pages}>
            <View style={{backgroundColor: 'purple'}}>{valueMenu=='settings' ? (<>

              {/* <Image source={require('./assets/img/settingsGearWheel.png')} style={{height: 50, width: 50, position: 'absolute', top: deviceHeight/4 }} /> */}
              
              <View style={{backgroundColor: '#fb6767', border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, top: taskbarHeight*1.5, width: deviceWidth-10, }}>
                <Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>Campus Life</Text>
                
                <View style={styles.topTaskbar}>
                  <DropDownPicker
                    open = {openS1}
                    value = {valueS1}
                    items = {itemsS1}
                    setOpen = {setOpenS1}
                    setValue = {setValueS1}
                    setItems = {setItemsS1}

                    closeAfterSelecting = {true}
                    showBadgeDot = {false}
                    theme = "DARK"
                    searchable = {false}
                    mode = "BADGE"

                    style={{ width: deviceWidth/5, height: taskbarHeight/2, left: deviceWidth/3, top: 4, margin: 5}}/>
                </View>
              </View>
              


            </>) : null}</View>

            <View>{valueMenu=='myColleges' ? (<>

              <Image source={require('./assets/img/collegeIcon.png')} style={{height: 50, width: 50, position: 'absolute', top: deviceHeight/4}} />
              
              
            </>) : null}</View>

            <View>{valueMenu=='home' ? (<>
              {/*<TouchableOpacity onPress={this.addCollege} style={{width: deviceWidth/2+5}}>
                <View style={{backgroundColor: 'lightblue', height: deviceHeightPart, justifyContent: 'center', width: deviceWidth/2, borderRadius: 15, marginLeft: 5}}><Text>Add New College</Text></View>
              </TouchableOpacity>*/} 
              <Image source={require('./assets/img/homeIconV2.png')} style={{height: 50, width: 50, position: 'absolute', top: deviceHeight/4}} />
              
              
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
    // alignItems: 'left', //WHAT???
    // justifyContent: 'center',
    textAlign: 'center',
  },
  topMargin: {
    backgroundColor: color,
    height: 34,
    width: deviceWidth,
    position: 'relative',
    left: 0,
    top: 0,
    justifyContent: 'bottom',
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