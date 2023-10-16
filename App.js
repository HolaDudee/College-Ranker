import { StatusBar } from 'expo-status-bar';
import {} from 'expo';
<StatusBar style="dark" />
import React, { Component, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { AppRegistry, Text, View, StyleSheet, Image, FlatList, SectionList, TextInput, Modal, ImageBackground, TouchableOpacity, TouchableHighlight, Alert, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

  ////////////////////////
 ///  npx expo start  ///
////////////////////////





let deviceHeight = Dimensions.get('window').height;
let deviceHeightPart = deviceHeight/24;
let deviceWidth = Dimensions.get('window').width;
let ff = "Avenir";
let color = "#8186B6";
// let settingsBackgroundColor = '#fb6767';
// let settingsBackgroundColor = '#3A3B3C';
let settingsBackgroundColor = color;

let taskbarHeight = deviceHeightPart*1.5;
let iconWidth = taskbarHeight;
let iconBackgroundWidth = iconWidth*1.2;
let iconBackgroundHeight = taskbarHeight*1.2;
let iconColor = '#A5FFB3';

// const Item = ({label}) => (
//   <View style={{backgroundColor: 'purple', height: deviceHeightPart, width: deviceWidth-10}}>
//     <Text style={styles.title}>{label}</Text>
//   </View>
// );

export default function App() {

  // const [text2, setText2] = useState('')
  // const [modalVisible2, setModalVisible2] = useState(false)

  // const [blankRating, setBlackRating] = useState([{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0}])
  const [valueT, setValueT] = useState([{label: 'Select a College', value: 'select', ratingKey: 'ratingKey0', key: uuid.v4()}])

  let blankRating = [{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 0}]
  const [ratingsL, setRatingsL] = useState(blankRating)

  let getRatings = (ratingKey) => {
    // console.log(valueT[1].ratingKey)
    // console.log(blankRating[0].value)
    updateRatingsL(ratingKey)
  };

  let getRating = (ratingKey) => {
    getRatings(ratingKey)
    updateWeights()
    let ratings = ratingsL
    let total = 0
    console.log(weights)
    for (let i = 0; i<ratings.length; i = i + 1){
      total = total + ((ratings[i].value)*(weights[i].weight/10))
      console.log()
      console.log('i - '+i)
      console.log()
      console.log('ratings[i].value - ')
      console.log(ratings[i].value)
      console.log()
      console.log('weight[i].weight - ')
      console.log(weights[i].weight)
      console.log()
      console.log('total - ')
      console.log(total)
      console.log()
    }
    console.log()
    console.log('total - ')
    console.log(total)
    console.log()
    console.log('weights - ')
    console.log(weights)
    console.log()
    console.log('weights[0] - ')
    console.log(weights[0].weight)

  };

  const updateRatingsL = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);//.then(console.log('inFunction => data logged'));
      const value = JSON.parse(jsonValue);
      // return jsonValue != null ? JSON.parse(jsonValue) : null;
      if (value!=null){
        // console.log('inFunc => ');
        // console.log(value);
        setRatingsL(value)
        // console.log(valueT)
        return value
      }
    } catch (e) {
      console.log(e)
    }
  };

  const addRating = async (key, valueE) => {
    try {
      // console.log('inFunc list - ')
      // console.log(valueE)
      const jsonValue = JSON.stringify(valueE);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log(e)
    }
  };

  // const renderItem = ({item}) => {
  //   // const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
  //   // const color = item.id === selectedId ? 'white' : 'black';

  //   return (
  //     <Item
  //       item={item}
  //       // onPress={() => setSelectedId(item.id)}
  //       backgroundColor={color}
  //       textColor={'white'}
  //     />
  //   );
  // };

  let initColleges = [
    {label: 'Select a College', value: 'select', ratingKey: 'ratingKey0', key: uuid.v4()},
    {label: 'UW - Madison', value: 'madison', ratingKey: 'ratingKey1', key: uuid.v4()},
    {label: 'UW - La Crosse', value: 'laCrosse', ratingKey: 'ratingKey2', key: uuid.v4()},
    {label: 'UW - Stevens Point', value: 'stevensPoint', ratingKey: 'ratingKey3', key: uuid.v4()},
    {label: 'NTC', value: 'ntc', ratingKey: 'ratingKey4', key: uuid.v4()},
    // {name: '', value: ''},
  ];
  

  
  
  let initFactors = [
    {name: 'SOMETHING1', value: 'something1', key: uuid.v4()},
    {name: 'SOMETHING2', value: 'something2', key: uuid.v4()},
    {name: 'SOMETHING3', value: 'something3', key: uuid.v4()},
    {name: 'SOMETHING4', value: 'something4', key: uuid.v4()},
    {name: 'SOMETHING5', value: 'something5', key: uuid.v4()},
    {name: 'SOMETHING6', value: 'something6', key: uuid.v4()},
    {name: 'SOMETHING7', value: 'something7', key: uuid.v4()},
    {name: 'SOMETHING8', value: 'something8', key: uuid.v4()},
  ];
  
  const storeDataJSON = async (key, valueE) => {
    try {
      // console.log('inFunc list - ')
      // console.log(valueE)
      const jsonValue = JSON.stringify(valueE);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log(e)
    }
  };
  
  const updateColleges = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);//.then(console.log('inFunction => data logged'));
      const value = JSON.parse(jsonValue);
      // return jsonValue != null ? JSON.parse(jsonValue) : null;
      if (value!=null){
        // console.log('inFunc => ');
        // console.log(value);
        setValueT(value)
        // console.log(valueT)
        return value
      }
    } catch (e) {
      console.log(e)
    }
  };

  const getDataJSON = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);//.then(console.log('inFunction => data logged'));
      const value = JSON.parse(jsonValue);
      // return jsonValue != null ? JSON.parse(jsonValue) : null;
      if (value!=null){
        // console.log('inFunc => ');
        // console.log(value);
        // setValueT(value)
        // console.log(valueT)
        return value
      }
    } catch (e) {
      console.log(e)
    }
  };
  
  // const storeData = async (key, valueD) => {
  //   try {
  //     console.log('key - '+key+' - value - '+valueD)
  //     await AsyncStorage.setItem(key, valueD);
  //   } catch (e) {
  //     console.log(e)
  //   }
  // };
  
  // const getData = async (key) => {
  //   try {
  //     const valueF = await AsyncStorage.getItem(key);
  //     console.log('key - '+key+' - value - '+valueF)
  //     return valueF;
  //   } catch (e) {
  //     console.log(e)
  //   }
  // };
  
  React.useEffect(() => {
    updateColleges('collegeList')
  },[]);
  // let initColleges = updateColleges('collegeList')
  

  const [factors, setFactors] = useState(initFactors)
  const [colleges, setColleges] = useState(valueT)
  const [deleteMenuVis, setDeleteMenuVis] = useState(false)

  // const [settings, setSettings] = useState('none')
  // const [mainDisplay, setMainDisplay] = useState('block')
  // const [myColleges, setMyColleges] = useState('none')

  let removeValueCollage = (index) => {
    let newArr = valueT
    newArr.splice(index+1, 1)

    // console.log()
    // console.log('index - ')
    // console.log(index)
    // console.log()

    // console.log(newArr)
    storeDataJSON('collegeList', newArr)
    updateColleges('collegeList')
    // console.log(valueT)
  };

  let addCollege = (nameI, valueI) => {
    // setValueT()
    // let cushbear = [initColleges]
    // ratingKey: 'ratingKey0',
    const newList = valueT.concat({label: nameI, value: valueI, ratingKey: 'ratingKey'+valueT.length, key: uuid.v4()});
    // console.log()
    // console.log('valueT.length - ')
    // console.log(valueT.length)
    // console.log()
    setValueT(newList)
    // let cushbear = [current => [...current, {label: nameI, value: valueI, rating: {}}]]
    // console.log(cushbear)
    // console.log(valueT)
    // console.log()
    // console.log('updatteed valueT - ')
    // console.log(valueT)
    // console.log()
    // console.log('newList - ')
    // console.log(newList)
    // console.log()
    storeDataJSON('collegeList', newList)
    updateColleges('collegeList')
    // console.log(valueT)
  };

  let formatCollegeName = (name) => {
    name = name + ' '
    let formattedName = ''
    let lastIndex = 0
    // console.log(name.toLowerCase().indexOf(' '))
    name = name.replaceAll('-', '')
    while (name.toLowerCase().indexOf(' ')!=-1){
      formattedName = formattedName + name.substring(lastIndex, name.toLowerCase().indexOf(' '))
      lastIndex = name.toLowerCase().indexOf(' ')
      name = name.replace(' ', '')
      // console.log(name.toLowerCase().indexOf(' '))
      // console.log(formattedName)
    }
    // console.log('formattedName before => ' + formattedName)
    formattedName = formattedName.replace(formattedName.substring(0,1), formattedName.substring(0,1).toLowerCase())
    // console.log('formattedName after => ' + formattedName)
    return formattedName
  };

  let addCollegeSumbitButton = () => {
    let valueR = formatCollegeName(text)
    // console.log(text)
    // console.log(valueR)
    addCollege(text, valueR)
    setText('')
    setModalVisible(!modalVisible)
  };

  let addCollegeModal = () => {
    setModalVisible(true)
  };

  // let togSettings = () => {
  //   if (settings=='block'){
  //     setSettings('none'),
  //     setMyColleges('none'),
  //     setMainDisplay('block')
  //   }
  //   else {
  //     setSettings('block'),
  //     setMainDisplay('none'),
  //     setMyColleges('none')
  //   }
  // };

  // let togMyColleges = () => {
  //   if (myColleges=='block'){
  //     setSettings('none'),
  //     setMyColleges('none'),
  //     setMainDisplay('block')
  //   }
  //   else {
  //     setSettings('none'),
  //     setMainDisplay('none'),
  //     setMyColleges('block')
  //   }
  // };

  // let togHome = () => {
  //   setSettings('none'),
  //   setMyColleges('none'),
  //   setMainDisplay('block')
  // };

  setOpenMenuToggle = () => {
    setOpenMenu(true),
    setValue('select'),
    setOpen(false)
  };

  let updateWeights = () => {
    setWeights([
      {weight: valueS1, key: uuid.v4()},
      {weight: valueS2, key: uuid.v4()},
      {weight: valueS3, key: uuid.v4()},
      {weight: valueS4, key: uuid.v4()},
      {weight: valueS5, key: uuid.v4()},
      {weight: valueS6, key: uuid.v4()},
      {weight: valueS7, key: uuid.v4()},
      {weight: valueS8, key: uuid.v4()},
    ])
    storeDataJSON('weights', weights)
  };

  let homeWhite = require('./assets/img/homeIconV2White.png');
  let collegeWhite = require('./assets/img/collegeIconWhite.png');
  let settingsWhite = require('./assets/img/settingsGearWheelWhite.png');
  let hamburgerIcon = require('./assets/img/hamburgerMenuIcon.png');
  let plusIcon = require('./assets/img/plusIcon.png');
  let deleteMenuIcon = require('./assets/img/deleteMenu.png')


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  setOpenBypass = () => {
    if (valueMenu=='home'){
      if (open==true){
        setOpen(false)
      }
      else{
        setOpen(true)
      }
    }
    else{
      setValueMenu('home')
      setOpen(true)
    }
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('select')
  // const [items, setItems] = useState(colleges);

  let setOpenUpdate = () => {
    
    if (open==false){
      setOpen(true)
      updateColleges('collegeList')
      setColleges(valueT)
      // setValue(colleges[0].value)
    }
    else{
      setOpen(false)
    }
  };

  let listOneThruTen = [{label: '0', value: 0},{label: '1', value: 1},{label: '2', value: 2},{label: '3', value: 3},{label: '4', value: 4},{label: '5', value: 5},{label: '6', value: 6},{label: '7', value: 7},{label: '8', value: 8},{label: '9', value: 9},{label: '10', value: 10}];

  const [openMenu, setOpenMenu] = useState(false);
  const [valueMenu, setValueMenu] = useState('home')
  const [itemsMenu, setItemsMenu] = useState([
    {label: 'Home', value: 'home', icon: () => <Image source={homeWhite} style={{height: 25, width: 25}} />},
    {label: 'My Colleges', value: 'myColleges', icon: () => <Image source={collegeWhite} style={{height: 25, width: 25}} />},
    {label: 'Settings', value: 'settings', icon: () => <Image source={settingsWhite} style={{height: 25, width: 25}} />},
    {label: 'Dev Menu', value: 'devMenu', icon: () => <Image source={settingsWhite} style={{height: 25, width: 25}} />},
    
  ]);
  
  const [openS1, setOpenS1] = useState(false);
  const [valueS1, setValueS1] = useState(0)
  const [itemsS1, setItemsS1] = useState(listOneThruTen);

  const [openS2, setOpenS2] = useState(false);
  const [valueS2, setValueS2] = useState(0)
  const [itemsS2, setItemsS2] = useState(listOneThruTen);

  const [openS3, setOpenS3] = useState(false);
  const [valueS3, setValueS3] = useState(0)
  const [itemsS3, setItemsS3] = useState(listOneThruTen);
  
  const [openS4, setOpenS4] = useState(false);
  const [valueS4, setValueS4] = useState(0)
  const [itemsS4, setItemsS4] = useState(listOneThruTen);
  
  const [openS5, setOpenS5] = useState(false);
  const [valueS5, setValueS5] = useState(0)
  const [itemsS5, setItemsS5] = useState(listOneThruTen);
  
  const [openS6, setOpenS6] = useState(false);
  const [valueS6, setValueS6] = useState(0)
  const [itemsS6, setItemsS6] = useState(listOneThruTen);
  
  const [openS7, setOpenS7] = useState(false);
  const [valueS7, setValueS7] = useState(0)
  const [itemsS7, setItemsS7] = useState(listOneThruTen);
  
  const [openS8, setOpenS8] = useState(false);
  const [valueS8, setValueS8] = useState(0)
  const [itemsS8, setItemsS8] = useState(listOneThruTen);
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [openM1, setOpenM1] = useState(false);
  const [valueM1, setValueM1] = useState(0)
  const [itemsM1, setItemsM1] = useState(listOneThruTen);
  
  const [openM2, setOpenM2] = useState(false);
  const [valueM2, setValueM2] = useState(0)
  const [itemsM2, setItemsM2] = useState(listOneThruTen);
  
  const [openM3, setOpenM3] = useState(false);
  const [valueM3, setValueM3] = useState(0)
  const [itemsM3, setItemsM3] = useState(listOneThruTen);
  
  const [openM4, setOpenM4] = useState(false);
  const [valueM4, setValueM4] = useState(0)
  const [itemsM4, setItemsM4] = useState(listOneThruTen);
  
  const [openM5, setOpenM5] = useState(false);
  const [valueM5, setValueM5] = useState(0)
  const [itemsM5, setItemsM5] = useState(listOneThruTen);
  
  const [openM6, setOpenM6] = useState(false);
  const [valueM6, setValueM6] = useState(0)
  const [itemsM6, setItemsM6] = useState(listOneThruTen);
  
  const [openM7, setOpenM7] = useState(false);
  const [valueM7, setValueM7] = useState(0)
  const [itemsM7, setItemsM7] = useState(listOneThruTen);
  
  const [openM8, setOpenM8] = useState(false);
  const [valueM8, setValueM8] = useState(0)
  const [itemsM8, setItemsM8] = useState(listOneThruTen);
  

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [modalVisible, setModalVisible] = useState(false);
  const [weights, setWeights] = useState([
    {weight: valueS1, key: uuid.v4()},
    {weight: valueS2, key: uuid.v4()},
    {weight: valueS3, key: uuid.v4()},
    {weight: valueS4, key: uuid.v4()},
    {weight: valueS5, key: uuid.v4()},
    {weight: valueS6, key: uuid.v4()},
    {weight: valueS7, key: uuid.v4()},
    {weight: valueS8, key: uuid.v4()},
  ])
  const [text, setText] = useState();

  let ratings = [
    // [{rating: valueS1}, {rating: valueS2}, {rating: valueS3}, {rating: valueS4}, {rating: valueS5}, {rating: valueS6}, {rating: valueS7}, {rating: valueS8}],
    // [{}]
  ]; //REUSE DROPDOWNS, JUST SAVE IT AND READ IT WHEN DISPLAYING


  const sortedRatings = [].concat(ratings)
    .sort((a, b) => a.rating > b.rating ? 1 : -1)
    .map((item, i) => 
        <div key={i}> {item.rating}</div>
    );


  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={{backgroundColor: color, position:'absolute', top:0, left:0, width: deviceWidth, height:deviceHeightPart*1.5}}></View>
        <SafeAreaView>
        
        <View style={styles.topMargin}>
          <Text style={{fontSize: 24, fontFamily: ff, marginBottom: 0, fontWeight: 'bold', color: '#3A3B3C'}}>College Ranker</Text>
        </View>

        <View style={styles.topTaskbar}>
          <DropDownPicker
            open = {open}
            value = {value}
            items = {colleges}
            // setOpen = {setOpenBypass}
            setOpen = {setOpenUpdate}
            // setOpen = {setOpen}
            setValue = {setValue}
            setItems = {setColleges}

            onChangeValue={(value) => {
              setValueMenu('home')
              let newArray = [valueM1,valueM2,valueM3,valueM4,valueM5,valueM6,valueM7,valueM8,]
              console.log('newArray - ')
              console.log(newArray)
              let rKey = valueT[valueT.findIndex(e => e.value == value)].ratingKey
              console.log()
              console.log('rKey - ')
              console.log(rKey)
              addRating(rKey, newArray)
              console.log()
              updateRatingsL(rKey)
              console.log('ratingsL - ')
              console.log(ratingsL)
            }}
            closeAfterSelecting = {true}
            // dropDownContainerStyle={{
            //   zIndex: 100,
            //   marginTop: 7
            // }}
            // listItemContainer={{
            //   zIndex: 100
            // }}
            showBadgeDot = {false}
            theme = "DARK"
            searchable = {true}
            mode = "BADGE"
            listMode = "MODAL"
            modalAnimationType="slide"

            style={{ width: deviceWidth/2, height: taskbarHeight+10, position: 'absolute', left: 0, top: 0, margin: 5}}/>
        </View>
        <View style={{position: 'absolute', top: -deviceHeightPart*3, right: (2*deviceWidth/6)-7.5,}}>{valueMenu=='home' ? (<>
          <View style={{backgroundColor: iconColor, borderWidth: 1, position: 'absolute', top: deviceHeightPart*5.5, right: 0, marginTop: 5, borderRadius: 150, height: taskbarHeight+10, width: iconWidth+10}}></View>
          <TouchableOpacity onPress={addCollegeModal} style={{position: 'absolute', top: deviceHeightPart*5.5, right: 0, margin: 5, marginTop: 10, height: taskbarHeight, width: iconWidth}}>
            <Image source={plusIcon} style={{height: taskbarHeight, width: iconWidth}}/>
          </TouchableOpacity>
          <Modal
            // animationType="slide"
            transparent={false}
            visible={modalVisible}
            animationType='slide'
            style={{}}
            // onRequestClose={() => {
            //   Alert.alert('Modal has been closed.');
            //   setModalVisible(!modalVisible);
            // }}
            >
              <SafeAreaView style={{backgroundColor: '#2c2b2b'}}>

                <View style={{alignItems: 'flex-end', width: deviceWidth}}>
                  <TouchableOpacity style={{margin: 5}} onPress={() => {setModalVisible(!modalVisible)}}>{/*</TouchableOpacity></SafeAreaView>, Alert.alert('Modal Closed'), console.log('Modal Closed')}}>*/}
                    <View style={{height: deviceHeightPart, width: deviceHeightPart, margin: 2, borderWidth: 1, borderRadius: 5, backgroundColor: iconColor, textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={{fontSize: deviceHeightPart-10, margin: 0}}>X</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{width: deviceWidth-10, marginLeft: 5, backgroundColor: 'gray', borderRadius: 10}}>
                  <TextInput
                    style={{
                      // width: deviceWidth-10,
                      borderWidth: 1,
                      borderRadius: 10,
                      // marginLeft: 5,
                      height: deviceHeightPart*1.5,
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'white',
                    }}
                    keyboardAppearance='dark'
                    autoCorrect = {false}
                    autoCapitalize = 'words'
                    onChangeText={setText}
                    value={text}
                    placeholder="Enter college name"
                    placeholderTextColor='white'
                    
                  />
                </View>

                <View style={{width: deviceWidth, alignItems: 'center', marginTop: 50}}>
                  <TouchableOpacity style={{margin: 5}} onPress={addCollegeSumbitButton}>{/*</TouchableOpacity></SafeAreaView>, Alert.alert('Modal Closed'), console.log('Modal Closed')}}>*/}
                    <View style={{height: deviceHeightPart, width: deviceWidth-120, margin: 0, borderWidth: 1, borderRadius: 10, backgroundColor: iconColor, textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={{fontSize: deviceHeightPart-10, margin: 0}}>Add College</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{width: deviceWidth, height: deviceHeightPart*22.5}}></View>
                {/* <View>
                  <TextInput
                    style={{}}
                    onChangeText={onChangeNumber}
                    value={number}
                    // placeholder="useless placeholder"
                  />
                </View> */}

              </SafeAreaView>
            </Modal>
          </>) : null}</View>
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
          <View style={{backgroundColor: iconColor, borderWidth: 1, position: 'absolute', top: deviceHeightPart*5.5, right: 0, marginTop: 5, borderRadius: 7.5, height: taskbarHeight+10, width: iconWidth+10}}></View>
          <TouchableOpacity onPress={setOpenMenuToggle} style={{position: 'absolute', top: deviceHeightPart*5.5, right: 0, margin: 5, marginTop: 10, height: taskbarHeight, width: iconWidth}}>
            <Image source={hamburgerIcon} style={{height: taskbarHeight, width: iconWidth}}/>
          </TouchableOpacity>

          {/* <TouchableOpacity onPress={() => {storeDataJSON('collegeList', colleges), console.log('done')}} style={{position: 'absolute', top: deviceHeightPart*7.5, right: 0, margin: 5, marginTop: 10, height: taskbarHeight, width: iconWidth}}>
            <Image source={hamburgerIcon} style={{height: taskbarHeight, width: iconWidth}}/>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={() => {updateColleges('collegeList')}} style={{position: 'absolute', top: deviceHeightPart*7.5, right: 0, margin: 5, marginTop: 10, height: taskbarHeight, width: iconWidth}}>
          <View style={{backgroundColor: 'purple'}}><Text>UPDATE VALUET</Text></View>
            {/* <Image source={{backgroundColor: 'pink'}} style={{height: taskbarHeight, width: iconWidth}}/> 
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {storeDataJSON('collegeList', initColleges)}} style={{position: 'absolute', top: deviceHeightPart*9.5, right: 0, margin: 5, marginTop: 10, height: taskbarHeight, width: iconWidth}}>
            <View style={{backgroundColor: 'purple'}}><Text>RESET COLLEGES</Text></View>
          </TouchableOpacity> */}
        
        </View>

          <View style={styles.pages}>

{/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}


          <View>{valueMenu=='devMenu' ? (<>
            <View style={{width: deviceWidth, textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}><Text style={{color: 'white', shadowOpacity: 100, margin: 15, fontSize: 24}}>Welcome to the Dev Menu</Text></View>



          </>) : null}</View>


{/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}


            <View style={{backgroundColor: '', marginTop: 5}}>{valueMenu=='settings' ? (<>

              {/* <View style={{position: 'absolute', top: -deviceHeightPart*2.15, left: deviceWidth/2+10, backgroundColor: iconColor, borderWidth: 1, marginTop: 5, borderRadius: 150, height: taskbarHeight+10, alignItems: 'center', justifyContent: 'center', width: iconWidth+10}}>
                <TouchableOpacity onPress={() => {storeDataJSON('collegeList', initColleges), updateColleges('collegeList'), Alert.alert('All personalized colleges cleared')}} style={{height: taskbarHeight, width: iconWidth}}>
                  <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5277/5277847.png' }} style={{height: taskbarHeight, width: iconWidth}}/>
                </TouchableOpacity>
              </View> */}

              <View style={{position: 'absolute', top: -deviceHeightPart*2.15, left: deviceWidth/2+10, backgroundColor: iconColor, borderWidth: 1, marginTop: 5, borderRadius: 150, height: taskbarHeight+10, alignItems: 'center', justifyContent: 'center', width: iconWidth+10}}>
                <TouchableOpacity onPress={() => {setDeleteMenuVis(!deleteMenuVis)}} style={{height: taskbarHeight, width: iconWidth}}>
                  <Image source={deleteMenuIcon} style={{height: taskbarHeight, width: iconWidth}}/>
                </TouchableOpacity>
              </View>

              <Modal
                transparent={false}
                visible={deleteMenuVis}
                animationType='slide'
                style={{}}
                >
                  <SafeAreaView style={{backgroundColor: '#2c2b2b'}}>

                    <View style={{alignItems: 'flex-end', width: deviceWidth}}>
                      <TouchableOpacity style={{margin: 5}} onPress={() => {setDeleteMenuVis(!deleteMenuVis)}}>{/*</TouchableOpacity></SafeAreaView>, Alert.alert('Modal Closed'), console.log('Modal Closed')}}>*/}
                        <View style={{height: deviceHeightPart, width: deviceHeightPart, margin: 2, borderWidth: 1, borderRadius: 5, backgroundColor: iconColor, textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
                          <Text style={{fontSize: deviceHeightPart-10, margin: 0}}>X</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    {/* <View style={{width: deviceWidth-10, marginLeft: 5, backgroundColor: 'gray', borderRadius: 10}}> */}
                    {/* <Text style={{}}>This exists, right?</Text> */}
                    <FlatList 
                      data={valueT.slice(1)}
                      renderItem={({ item, index }) => 
                        <View style={{backgroundColor: color, alignItems: 'center', justifyContent: 'space-between', height: deviceHeightPart*1.5, flexDirection: 'row', marginBottom: 5, width: deviceWidth-10, marginLeft: 5, borderWidth: 1, borderRadius: 15}}>
                          <Text style={{fontSize: 24, marginLeft: 3.5}}>{item.label}</Text>
                          {/* <Text>{index}</Text> */}
                          {/* <View style={{flexDirection: 'column'}}><View style={{alignSelf: 'flex-end'}}><Text>HELLO</Text></View></View> */}
                          <TouchableOpacity onPress={() => {removeValueCollage(index)}}>
                            <View style={{backgroundColor: 'red', textAlign: 'center', marginRight: 5, alignItems: 'center', justifyContent: 'center', height: deviceHeightPart, width: deviceHeightPart, borderWidth: 1, borderRadius: 25}}>
                              <Text>-</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      }
                      // keyExtractor={(item) => item.key}
                    />
                    {/* </View> */}


                    <View style={{width: deviceWidth, height: deviceHeightPart*22.5}}></View>

                  </SafeAreaView>
                </Modal>

              <ScrollView style={{height: (deviceHeightPart*2)*16}}>

                <View style={{height: deviceHeightPart*2, backgroundColor: settingsBackgroundColor, border: 'gray', marginTop: 5, justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                <View style={{width:(7.3*(deviceWidth))/10}}><Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>{factors[0].name}</Text></View>
                  
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
                      listMode="SCROLLVIEW"

                      style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                  </View>
                </View>

                <View style={{height: deviceHeightPart*2, backgroundColor: settingsBackgroundColor, zIndex: -1, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                  <View style={{width:(7.3*(deviceWidth))/10}}><Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>{factors[1].name}</Text></View>
                  
                  <View style={styles.topTaskbar}>
                    <DropDownPicker open = {openS2}
                      value = {valueS2}
                      items = {itemsS2}
                      setOpen = {setOpenS2}
                      setValue = {setValueS2}
                      setItems = {setItemsS2}

                      closeAfterSelecting = {true}
                      showBadgeDot = {false}
                      theme = "DARK"
                      searchable = {false}
                      mode = "BADGE"
                      listMode="SCROLLVIEW"

                      style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                  </View>
                </View>
              
                <View style={{height: deviceHeightPart*2, backgroundColor: settingsBackgroundColor, zIndex: -2, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                <View style={{width:(7.3*(deviceWidth))/10}}><Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>{factors[2].name}</Text></View>
                  
                  <View style={styles.topTaskbar}>
                    <DropDownPicker
                      open = {openS3}
                      value = {valueS3}
                      items = {itemsS3}
                      setOpen = {setOpenS3}
                      setValue = {setValueS3}
                      setItems = {setItemsS3}

                      closeAfterSelecting = {true}
                      showBadgeDot = {false}
                      theme = "DARK"
                      searchable = {false}
                      mode = "BADGE"
                      listMode="SCROLLVIEW"

                      style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                  </View>
                </View>

                <View style={{height: deviceHeightPart*2, backgroundColor: settingsBackgroundColor, zIndex: -3, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                <View style={{width:(7.3*(deviceWidth))/10}}><Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>{factors[3].name}</Text></View>
                  
                  <View style={styles.topTaskbar}>
                    <DropDownPicker
                      open = {openS4}
                      value = {valueS4}
                      items = {itemsS4}
                      setOpen = {setOpenS4}
                      setValue = {setValueS4}
                      setItems = {setItemsS4}

                      closeAfterSelecting = {true}
                      showBadgeDot = {false}
                      theme = "DARK"
                      searchable = {false}
                      mode = "BADGE"
                      listMode="SCROLLVIEW"

                      style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                  </View>
                </View>

                <View style={{height: deviceHeightPart*2, backgroundColor: settingsBackgroundColor, zIndex: -4, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                <View style={{width:(7.3*(deviceWidth))/10}}><Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>{factors[4].name}</Text></View>
                  
                  <View style={styles.topTaskbar}>
                    <DropDownPicker
                      open = {openS5}
                      value = {valueS5}
                      items = {itemsS5}
                      setOpen = {setOpenS5}
                      setValue = {setValueS5}
                      setItems = {setItemsS5}

                      closeAfterSelecting = {true}
                      showBadgeDot = {false}
                      theme = "DARK"
                      searchable = {false}
                      mode = "BADGE"
                      listMode="SCROLLVIEW"

                      style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                  </View>
                </View>

                <View style={{height: deviceHeightPart*2, backgroundColor: settingsBackgroundColor, zIndex: -5, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                <View style={{width:(7.3*(deviceWidth))/10}}><Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>{factors[5].name}</Text></View>
                  
                  <View style={styles.topTaskbar}>
                    <DropDownPicker
                      open = {openS6}
                      value = {valueS6}
                      items = {itemsS6}
                      setOpen = {setOpenS6}
                      setValue = {setValueS6}
                      setItems = {setItemsS6}

                      closeAfterSelecting = {true}
                      showBadgeDot = {false}
                      theme = "DARK"
                      searchable = {false}
                      mode = "BADGE"
                      listMode="SCROLLVIEW"

                      style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                  </View>
                </View>

                <View style={{height: deviceHeightPart*2, backgroundColor: settingsBackgroundColor, zIndex: -6, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                <View style={{width:(7.3*(deviceWidth))/10}}><Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>{factors[6].name}</Text></View>
                  
                  <View style={styles.topTaskbar}>
                    <DropDownPicker
                      open = {openS7}
                      value = {valueS7}
                      items = {itemsS7}
                      setOpen = {setOpenS7}
                      setValue = {setValueS7}
                      setItems = {setItemsS7}

                      closeAfterSelecting = {true}
                      showBadgeDot = {false}
                      theme = "DARK"
                      searchable = {false}
                      mode = "BADGE"
                      listMode="SCROLLVIEW"

                      style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                  </View>
                </View>

                <View style={{height: deviceHeightPart*2, backgroundColor: settingsBackgroundColor, zIndex: -7, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                <View style={{width:(7.3*(deviceWidth))/10}}><Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>{factors[7].name}</Text></View>
                  
                  <View style={styles.topTaskbar}>
                    <DropDownPicker
                      open = {openS8}
                      value = {valueS8}
                      items = {itemsS8}
                      setOpen = {setOpenS8}
                      setValue = {setValueS8}
                      setItems = {setItemsS8}

                      closeAfterSelecting = {true}
                      showBadgeDot = {false}
                      theme = "DARK"
                      searchable = {false}
                      mode = "BADGE"
                      listMode="SCROLLVIEW"
                      dropDownDirection="BOTTOM"

                      style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                  </View>
                </View>
                <TouchableOpacity style={{backgroundColor: 'red', height: deviceHeightPart}} onPress={() => {updateWeights(), console.log(weights)}}><Text>LOG WEIGHTS</Text></TouchableOpacity>
                <View style={{zIndex: -100000, height: deviceHeightPart*20, justifyContent: 'flex-end',}}></View>
              </ScrollView>
            </>) : null}</View>

{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
            <View>{valueMenu=='myColleges' ? (<>

              {/* <TouchableOpacity onPress={() => {addRating('ratingKey4', blankRating), console.log('rating added')}} style={{position: '', top: 0, right: 0, margin: 5, marginTop: 10, height: taskbarHeight, width: iconWidth}}>
                <View style={{height: taskbarHeight, width: iconWidth, backgroundColor: 'red'}}/>
              </TouchableOpacity> */}
          
              {/*<Image source={require('./assets/img/collegeIcon.png')} style={{height: 50, width: 50, position: 'absolute', top: deviceHeight/4}} />*/}
              
              {/* <View style={{width: deviceWidth, alignItems: 'center', marginTop: 15, position: 'relative',}}>
                <TouchableOpacity onPress={() => {setValueMenu('home'), setValue('ntc')}}>
                  <View style={{borderWidth: 1, backgroundColor: settingsBackgroundColor, justifyContent: 'center', borderRadius: 10, width: deviceWidth-10, height: deviceHeightPart}}>
                    <Text style={{textAlign: 'left', marginLeft: 10}}>NTC</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {setValueMenu('home'), setValue('ntc')}}>
                  <View style={{borderWidth: 1, backgroundColor: settingsBackgroundColor, marginTop: 5, justifyContent: 'center', borderRadius: 10, width: deviceWidth-10, height: deviceHeightPart}}>
                    <Text style={{textAlign: 'left', marginLeft: 10}}>NTC</Text>
                  </View>
                </TouchableOpacity>
              </View> */}


              {/* <FlatList
                data={valueT[0]}
                renderItem={({item}) => <Item title={item.label} />}
                keyExtractor={item => item.key}
              /> */}

              {/* <SectionList
                renderItem={({item}) => <ListItem title={item.label} />} // Your record component here.
                renderSectionHeader={({section}) => <H1 title={section.title} />} // Your date component here.
                sections={valueT[0]}
              /> */}
              <FlatList 
                data={valueT.slice(1)}
                renderItem={({ item }) => 
                  <View style={{backgroundColor: color, marginBottom: 5, width: deviceWidth-10, marginLeft: 5, borderWidth: 1, borderRadius: 5}}>
                    <Text style={{fontSize: 24, marginLeft: 3.5}}>{item.label}</Text>


                    <TouchableOpacity onPress={() => {getRatings(item.ratingKey)}}><Text>LOG RATING</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => {console.log(getRating(item.ratingKey))}}><Text style={{marginTop: 10}}>LOG IT</Text></TouchableOpacity>
                  </View>
                }
                // keyExtractor={(item) => item.key}
              />
              
            </>) : null}</View>

{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

            <View>{valueMenu=='home' ? (<>
              {/*<TouchableOpacity onPress={this.addCollege} style={{width: deviceWidth/2+5}}>
                <View style={{backgroundColor: 'lightblue', height: deviceHeightPart, justifyContent: 'center', width: deviceWidth/2, borderRadius: 15, marginLeft: 5}}><Text>Add New College</Text></View>
              </TouchableOpacity>*/} 
              {/* <Image source={require('./assets/img/homeIconV2.png')} style={{height: 50, width: 50, position: 'absolute', top: deviceHeight/4}} /> */}
              
              {/**/}
              <View style={{}}>{value!='select' ? (<>

                <View style={{height: deviceHeightPart*2, backgroundColor: '#0047AB', zIndex: -1, border: 'gray', marginTop: 5, justifyContent: 'center', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 15, width: deviceWidth-10, }}>
                  <View><Text style={{fontSize: deviceHeightPart, shadowOpacity: 5, color: 'white', fontWeight: 'bold', margin: 5}}>{colleges[colleges.findIndex(e => e.value == value)].label}</Text></View>
                </View>
                <ScrollView style={{height: (deviceHeightPart*2)*16}}>
                  <View style={{height: deviceHeightPart*2, backgroundColor: settingsBackgroundColor, zIndex: -1, border: 'gray', marginTop: 5, justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                  <View style={{width:(7.3*(deviceWidth))/10}}><Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>{factors[0].name}</Text></View>
                    
                    <View style={styles.topTaskbar}>
                      <DropDownPicker
                        open = {openM1}
                        value = {valueM1}
                        items = {itemsM1}
                        setOpen = {setOpenM1}
                        setValue = {setValueM1}
                        setItems = {setItemsM1}

                        closeAfterSelecting = {true}
                        // dropDownContainerStyle={{zIndex: -1}}
                        showBadgeDot = {false}
                        theme = "DARK"
                        searchable = {false}
                        mode = "BADGE"
                        listMode="SCROLLVIEW"

                        style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                    </View>
                  </View>

                  <View style={{height: deviceHeightPart*2, backgroundColor: settingsBackgroundColor, zIndex: -2, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                    <View style={{width:(7.3*(deviceWidth))/10}}><Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>{factors[1].name}</Text></View>
                    
                    <View style={styles.topTaskbar}>
                      <DropDownPicker open = {openM2}
                        value = {valueM2}
                        items = {itemsM2}
                        setOpen = {setOpenM2}
                        setValue = {setValueM2}
                        setItems = {setItemsM2}

                        closeAfterSelecting = {true}
                        showBadgeDot = {false}
                        theme = "DARK"
                        searchable = {false}
                        mode = "BADGE"
                        listMode="SCROLLVIEW"

                        style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                    </View>
                  </View>
                
                  <View style={{height: deviceHeightPart*2, backgroundColor: settingsBackgroundColor, zIndex: -3, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                  <View style={{width:(7.3*(deviceWidth))/10}}><Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>{factors[2].name}</Text></View>
                    
                    <View style={styles.topTaskbar}>
                      <DropDownPicker
                        open = {openM3}
                        value = {valueM3}
                        items = {itemsM3}
                        setOpen = {setOpenM3}
                        setValue = {setValueM3}
                        setItems = {setItemsM3}

                        closeAfterSelecting = {true}
                        showBadgeDot = {false}
                        theme = "DARK"
                        searchable = {false}
                        mode = "BADGE"
                        listMode="SCROLLVIEW"

                        style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                    </View>
                  </View>

                  <View style={{height: deviceHeightPart*2, backgroundColor: settingsBackgroundColor, zIndex: -4, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                  <View style={{width:(7.3*(deviceWidth))/10}}><Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>{factors[3].name}</Text></View>
                    
                    <View style={styles.topTaskbar}>
                      <DropDownPicker
                        open = {openM4}
                        value = {valueM4}
                        items = {itemsM4}
                        setOpen = {setOpenM4}
                        setValue = {setValueM4}
                        setItems = {setItemsM4}

                        closeAfterSelecting = {true}
                        showBadgeDot = {false}
                        theme = "DARK"
                        searchable = {false}
                        mode = "BADGE"
                        listMode="SCROLLVIEW"

                        style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                    </View>
                  </View>

                  <View style={{height: deviceHeightPart*2, backgroundColor: settingsBackgroundColor, zIndex: -5, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                  <View style={{width:(7.3*(deviceWidth))/10}}><Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>{factors[4].name}</Text></View>
                    
                    <View style={styles.topTaskbar}>
                      <DropDownPicker
                        open = {openM5}
                        value = {valueM5}
                        items = {itemsM5}
                        setOpen = {setOpenM5}
                        setValue = {setValueM5}
                        setItems = {setItemsM5}

                        closeAfterSelecting = {true}
                        showBadgeDot = {false}
                        theme = "DARK"
                        searchable = {false}
                        mode = "BADGE"
                        listMode="SCROLLVIEW"

                        style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                    </View>
                  </View>

                  <View style={{height: deviceHeightPart*2, backgroundColor: settingsBackgroundColor, zIndex: -6, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                  <View style={{width:(7.3*(deviceWidth))/10}}><Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>{factors[5].name}</Text></View>
                    
                    <View style={styles.topTaskbar}>
                      <DropDownPicker
                        open = {openM6}
                        value = {valueM6}
                        items = {itemsM6}
                        setOpen = {setOpenM6}
                        setValue = {setValueM6}
                        setItems = {setItemsM6}

                        closeAfterSelecting = {true}
                        showBadgeDot = {false}
                        theme = "DARK"
                        searchable = {false}
                        mode = "BADGE"
                        listMode="SCROLLVIEW"

                        style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                    </View>
                  </View>

                  <View style={{height: deviceHeightPart*2, backgroundColor: settingsBackgroundColor, zIndex: -7, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                  <View style={{width:(7.3*(deviceWidth))/10}}><Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>{factors[6].name}</Text></View>
                    
                    <View style={styles.topTaskbar}>
                      <DropDownPicker
                        open = {openM7}
                        value = {valueM7}
                        items = {itemsM7}
                        setOpen = {setOpenM7}
                        setValue = {setValueM7}
                        setItems = {setItemsM7}

                        closeAfterSelecting = {true}
                        showBadgeDot = {false}
                        theme = "DARK"
                        searchable = {false}
                        mode = "BADGE"
                        listMode="SCROLLVIEW"

                        style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                    </View>
                  </View>

                  <View style={{height: deviceHeightPart*2, backgroundColor: settingsBackgroundColor, zIndex: -8, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                  <View style={{width:(7.3*(deviceWidth))/10}}><Text style={{fontSize: 24, fontWeight: 'bold', margin: 5}}>{factors[7].name}</Text></View>
                    
                    <View style={styles.topTaskbar}>
                      <DropDownPicker
                        open = {openM8}
                        value = {valueM8}
                        items = {itemsM8}
                        setOpen = {setOpenM8}
                        setValue = {setValueM8}
                        setItems = {setItemsM8}

                        closeAfterSelecting = {true}
                        showBadgeDot = {false}
                        theme = "DARK"
                        searchable = {false}
                        mode = "BADGE"
                        listMode="SCROLLVIEW"
                        dropDownDirection="BOTTOM"

                        style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                    </View>
                  </View>
                  <TouchableHighlight onPress={() => setFactors(initFactors)}><Text>RESET FACTORS</Text></TouchableHighlight>
                  <View style={{zIndex: -100000, height: deviceHeightPart*20, justifyContent: 'flex-end',}}></View>
                  </ScrollView>
                </>) : null}</View>
              {/**/}
              
            </>) : null}</View>
          </View>
 
          <View style={styles.colleges}>
            <View>{value=='madison' ? (<>

              {/* <Text>UW - Madison</Text> */}

            </>) : null}</View>

            <View>{value=='laCrosse' ? (<>

              {/* <Text>UW - La Crosse</Text> */}

            </>) : null}</View>

            <View>{value=='stevensPoint' ? (<>

              {/* <Text>UW - Stevens Point</Text> */}

            </>) : null}</View>

            <View>{value=='ntc' ? (<>
              {/* <TouchableOpacity style={{margin: 5, backgroundColor: 'green'}} onPress={() => {storeData('ntc','ntc'), console.log('data saved')}}>
                <Text>SAVE NAME UNDER KEY NAME</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{margin: 5, backgroundColor: 'green'}} onPress={() => {console.log('OUTPUT VALUE => '), itemOutput = AsyncStorage.getItem('ntc').then(console.log('Date Retrived')).catch, console.log(itemOutput), console.log('data retrieved?')}}>
                <Text>GET AND LOG</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{margin: 5, backgroundColor: 'green'}} onPress={() => {AsyncStorage.clear(), console.log('keys logged')}}>
                <Text>GET AND LOG ALL KEYS</Text>
              </TouchableOpacity>
              <Text>NTC</Text>

              <TouchableOpacity style={{margin: 5, backgroundColor: 'red'}} onPress={() => {console.log(AsyncStorage.getAllKeys().then(console.log('clear complete'))), console.log('maybe cleared')}}>
                <Text>clear all (danger)</Text>
              </TouchableOpacity> */}
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
    backgroundColor: '#2B305E',
    // alignItems: 'center',
  },
  colleges: {
    // flex: 1,
    position: 'absolute',
    top: deviceHeight/4,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    zIndex: -1,
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