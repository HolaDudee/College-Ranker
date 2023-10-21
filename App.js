import { StatusBar } from 'expo-status-bar';
// import {} from 'expo';
{/* <StatusBar style="dark" /> */}
import React, { Component, useState, useEffect } from 'react';
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
let color = "#16182d";
let settingsBackgroundColor = color;
let sectionBackgroundColor = '#252944';
let littleSection = '#3b3e5d';

let taskbarHeight = deviceHeightPart*1.5;
let iconWidth = taskbarHeight;
let iconBackgroundWidth = iconWidth*1.2;
let iconBackgroundHeight = taskbarHeight*1.2;
let iconColor = '#47e7a9';
let colorOfText = '#fdfeff';


export default function App() {

  const [valueT, setValueT] = useState([{label: 'Select a College', value: 'select', ratingKey: 'ratingKeyselect', key: uuid.v4()}])
  const [semiOldVal, setSemiOldVal] = useState('select')
  const [oldVal, setOldVal] = useState('select')
  const [ratingsListMyCol, setRatingsListMyCol] = useState()
  const [ratingsTotals, setRatingsTotals] = useState([])

  let blankRating = [0, 0, 0, 0, 0, 0, 0, 0]
  const [ratingsL, setRatingsL] = useState(blankRating)

  const delay = (ms) => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  let getRatings = (ratingKey) => {
    updateRatingsL(ratingKey)
  };

  let reloadRatings = async () => {
    setRatingsTotals([])
    for (let i = 1; i < valueT.length; i = i + 1){
      let rKey = valueT[i].ratingKey
      console.log('-----rKey-----')
      console.log('rKey - ')
      console.log(rKey)
      console.log('-----rKey-----')
      getRating(rKey)
      // let jsonValue = await AsyncStorage.getItem(rKey);
      // // console.log('URL_jsonvalue - ')
      // // console.log(jsonValue)
      // let parsedJSONValue = JSON.parse(jsonValue);
      // console.log('RR_parsedJSONValue - ')
      // console.log(parsedJSONValue)
    }
    console.log()
    console.log()
    console.log('RR_ratingsTotals - ')
    console.log(ratingsTotals)
    console.log()
    console.log()
  };

  let getRating = async (ratingKey) => {
    // getRatings(ratingKey)
    // let rVal = valueT[valueT.findIndex(e => e.value == value)]
    // console.log(rVal)
    // let rKey = rVal.ratingKey
    // console.log()
    // console.log()
    // console.log()
    // console.log()
    // console.log()
    // console.log()
    let rKey = ratingKey
    console.log('-----rKey-----')
    console.log('rKey - ')
    console.log(rKey)
    console.log('-----rKey-----')
    let jsonValue = await AsyncStorage.getItem(rKey);
    // console.log('URL_jsonvalue - ')
    // console.log(jsonValue)
    let parsedJSONValue = JSON.parse(jsonValue);
    console.log('GR_parsedJSONValue - ')
    console.log(parsedJSONValue)

    // // setValueM1(parsedJSONValue[0])
    // // setValueM2(parsedJSONValue[1])
    // // setValueM3(parsedJSONValue[2])
    // // setValueM4(parsedJSONValue[3])
    // // setValueM5(parsedJSONValue[4])
    // // setValueM6(parsedJSONValue[5])
    // // setValueM7(parsedJSONValue[6])
    // // setValueM8(parsedJSONValue[7])
    // // console.log('MANUAL OUTPUTING Ms')
    // // console.log([valueM1, valueM2, valueM3, valueM4, valueM5, valueM6, valueM7, valueM8])

    // updateWeights()
    let ratings = parsedJSONValue
    let total = 0
    // console.log('weights - ')
    // console.log(weights)
    console.log('-----forLoop-----')
    for (let i = 0; i < ratings.length; i = i + 1){
      total = total + ((ratings[i])*(weights[i]/10))
      console.log()
      console.log('i - '+i)
      console.log()
      console.log('ratings[i] - ')
      console.log(ratings[i])
      console.log()
      console.log('weight[i].weight - ')
      console.log(weights[i])
      console.log()
      console.log('total - ')
      console.log(total)
      console.log()
    }
    console.log('-----forLoop-----')
    // let GR_total = ratingsTotals.concat(ratingsTotals, total)
    // GR_total.push(ratingsTotals)
    // let arrOfTheNew = ratingsTotals.push(total)
    ratingsTotals.push(total)
    // setRatingsTotals(GR_total)
    // console.log()
    // console.log('GR_total - ')
    // console.log(GR_total)
    console.log()
    console.log('GR_ratingsTotals - ')
    console.log(ratingsTotals)
    console.log()
    // return total
    // console.log()
    // console.log('total - ')
    // console.log(total)
    // console.log()
    // console.log('weights - ')
    // console.log(weights)
    // console.log()
    // console.log('ratings - ')
    // console.log(ratings)
    // console.log()
    // console.log('weights[0] - ')
    // console.log(weights[0])

  };

  useEffect(() => {
    console.log()
    console.log('UE_3_ratingsTotals - ')
    console.log(ratingsTotals)
    console.log()
  }, [ratingsTotals])

  const updateRatingsL = async (key) => {
    try {
      console.log('URL_key - ')
      console.log(key)
      const jsonValue = await AsyncStorage.getItem(key);
      console.log('URL_jsonvalue - ')
      console.log(jsonValue)
      let value = JSON.parse(jsonValue);
      console.log('URL_value - ')
      console.log(value)
      // if (value!=null){
        setRatingsL(value)
        console.log()
        console.log()
        console.log('URL_ratingsL - ')
        console.log(ratingsL)
        console.log(value)
        console.log()
        console.log()
        return value
      // }
    } catch (e) {
      console.log(e)
    }
  };

  const addRating = async (key, valueE) => {
    try {
      const jsonValue = JSON.stringify(valueE);
      console.log('jsonvalue - ')
      console.log(jsonValue)
      await AsyncStorage.setItem(key, jsonValue).then(console.log('inFunc => itemSet'));
    } catch (e) {
      console.log(e)
    }
  };

  let initColleges = [
    {label: 'Select a College', value: 'select', ratingKey: 'ratingKeyselect', key: uuid.v4()},
    {label: 'UW - Madison', value: 'madison', ratingKey: 'ratingKeymadison', key: uuid.v4()},
    {label: 'UW - La Crosse', value: 'laCrosse', ratingKey: 'ratingKeylaCrosse', key: uuid.v4()},
    {label: 'UW - Stevens Point', value: 'stevensPoint', ratingKey: 'ratingKeystevensPoint', key: uuid.v4()},
    {label: 'NTC', value: 'ntc', ratingKey: 'ratingKeyntc', key: uuid.v4()},
  ];
  

  
  
  let initFactors = [
    {name: 'Size of College', value: 'f1', key: uuid.v4()},
    {name: 'Location of College', value: 'f2', key: uuid.v4()},
    {name: 'Programs', value: 'f3', key: uuid.v4()},
    {name: 'Housing', value: 'f4', key: uuid.v4()},
    {name: 'Student Life', value: 'f5', key: uuid.v4()},
    {name: 'Prestige', value: 'f6', key: uuid.v4()},
    {name: 'Cost', value: 'f7', key: uuid.v4()},
    {name: 'Research', value: 'f8', key: uuid.v4()},
  ];
  
  const storeDataJSON = async (key, valueE) => {
    try {
      const jsonValue = JSON.stringify(valueE);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log(e)
    }
  };
  
  const updateColleges = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('collegeList');
      const pasredJSONValue = JSON.parse(jsonValue);
      if (value!=null){
        setValueT(pasredJSONValue)
        
          // return value
        
      }
    } catch (e) {
      console.log(e)
    }
  };

  const getDataJSON = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      const value = JSON.parse(jsonValue);
      if (value!=null){
        return value
      }
    } catch (e) {
      console.log(e)
    }
  };
  


  useEffect(() => {
    console.log('-----useEffect-----')
    setViewedWeights()
    updateColleges()
    // setColleges(valueT)
    console.log('-----useEffect-----')
  }, []);
  
  useEffect(() => {
    // console.log(),
    // console.log('UC_pasredJSONValue - '),
    // console.log(pasredJSONValue),
    // console.log(),
    // console.log('UE_2_valueT - '),
    // console.log(valueT),
    setColleges(valueT)
    
  }, [valueT])

  useEffect(() => {
    // console.log()
    // console.log('UE_2_colleges - ')
    // console.log(colleges)
    // console.log()
  }, [colleges])

  const [factors, setFactors] = useState(initFactors)
  const [colleges, setColleges] = useState(valueT)
  const [deleteMenuVis, setDeleteMenuVis] = useState(false)

  let removeValueCollage = (index) => {
    let newArr = valueT
    newArr.splice(index+1, 1)
    storeDataJSON('collegeList', newArr)
    updateColleges('collegeList')
  };

  let addCollege = (nameI, valueI) => {
    const newList = valueT.concat({label: nameI, value: valueI, ratingKey: 'ratingKey'+valueI, key: uuid.v4()})
    addRating('ratingKey'+valueI, [0, 0, 0, 0, 0, 0, 0, 0])
    setValueT(newList)
    storeDataJSON('collegeList', newList)
    updateColleges('collegeList')
  };

  let formatCollegeName = (name) => {
    name = name + ' '
    let formattedName = ''
    let lastIndex = 0
    name = name.replaceAll('-', '')
    while (name.toLowerCase().indexOf(' ')!=-1){
      formattedName = formattedName + name.substring(lastIndex, name.toLowerCase().indexOf(' '))
      lastIndex = name.toLowerCase().indexOf(' ')
      name = name.replace(' ', '')
    }
    formattedName = formattedName.replace(formattedName.substring(0,1), formattedName.substring(0,1).toLowerCase())
    return formattedName
  };

  let addCollegeSumbitButton = () => {
    let valueR = formatCollegeName(text)
    addCollege(text, valueR)
    setText('')
    setModalVisible(!modalVisible)
  };

  let addCollegeModal = () => {
    setModalVisible(true)
  };


  

  // let updateWeights = () => {
  //   setWeights([
  //     {weight: valueS1, key: uuid.v4()},
  //     {weight: valueS2, key: uuid.v4()},
  //     {weight: valueS3, key: uuid.v4()},
  //     {weight: valueS4, key: uuid.v4()},
  //     {weight: valueS5, key: uuid.v4()},
  //     {weight: valueS6, key: uuid.v4()},
  //     {weight: valueS7, key: uuid.v4()},
  //     {weight: valueS8, key: uuid.v4()},
  //   ])
  //   storeDataJSON('weights', weights)
  // };

  let setNewWeights = async () => {
    let arrNew = [valueS1, valueS2, valueS3, valueS4, valueS5, valueS6, valueS7, valueS8]
    // console.log()
    // console.log('arrNew - ')
    // console.log(arrNew)
    // console.log('arrNew should be - ')
    // console.log([valueS1, valueS2, valueS3, valueS4, valueS5, valueS6, valueS7, valueS8])
    // console.log()
    try {
      const jsonValue = JSON.stringify(arrNew)
      await AsyncStorage.setItem('weights', jsonValue).then(Alert.alert('Settings Successfully Saved'))
      // storeDataJSON('weights', weights)
    } catch (e) {
      console.log(e)
    }
  };

  let setViewedWeights = () => {
    updateWeights().then(() => {
      // console.log(weights)
      setValueS1(weights[0])
      setValueS2(weights[1])
      setValueS3(weights[2])
      setValueS4(weights[3])
      setValueS5(weights[4])
      setValueS6(weights[5])
      setValueS7(weights[6])
      setValueS8(weights[7])
    })
    // console.log('weights - ')
    // console.log(weights)
  };

  

  const updateWeights = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('weights');
      const value = JSON.parse(jsonValue);
      if (value!=null){
        // console.log('value - ')
        // console.log(value)
        
        setWeights(value)
        // return value
      }
    } catch (e) {
      console.log(e)
    }
  };


  const roundNumber = (num) => Math.round(num/100) *100

  let onCollegesValueChange = async (valueIn) => {
    setValueMenu('home')
    
    let newArray = [valueM1, valueM2, valueM3, valueM4, valueM5, valueM6, valueM7, valueM8]
    console.log()
    console.log()
    console.log('newArray - ')
    console.log(newArray)
    console.log()
    console.log()
    console.log(valueT)
    let oldRVal = valueT[valueT.findIndex(e => e.value == oldVal)]
    console.log(oldRVal)
    let oldRKey = oldRVal.ratingKey
    let rVal = valueT[valueT.findIndex(e => e.value == value)]
    console.log(rVal)
    let rKey = rVal.ratingKey

    let jsonValue = await AsyncStorage.getItem(rKey);
    console.log('URL_jsonvalue - ')
    console.log(jsonValue)
    let parsedJSONValue = JSON.parse(jsonValue);

    setValueM1(parsedJSONValue[0])
    setValueM2(parsedJSONValue[1])
    setValueM3(parsedJSONValue[2])
    setValueM4(parsedJSONValue[3])
    setValueM5(parsedJSONValue[4])
    setValueM6(parsedJSONValue[5])
    setValueM7(parsedJSONValue[6])
    setValueM8(parsedJSONValue[7])
    console.log('MANUAL OUTPUTING Ms')
    console.log([valueM1, valueM2, valueM3, valueM4, valueM5, valueM6, valueM7, valueM8])

    addRating(rKey, newArray)
    // console.log()
    // console.log()
    // console.log()
    // console.log('oldRKey - ')
    // console.log(oldRKey)
    // console.log()
    // console.log()
    // console.log()
    // console.log()
    // let url_returned = updateRatingsL(rKey)
    // console.log()
    // console.log()
    // console.log()
    // console.log()
    // console.log()
    // console.log('OCVC_url_returned - ')
    // console.log(url_returned)
    // console.log()
    // console.log()
    // console.log()
    // console.log()
    // console.log()
    // addRating(oldRKey, newArray).then(
      // console.log(),
      // console.log('rKey - '),
      // console.log(rKey),
      // updateRatingsL(rKey).then(
        // console.log('OCVC_URL_ratingsL - '),
        // console.log(ratingsL),
        // setValueM1(ratingsL[0]),
        // setValueM2(ratingsL[1]),
        // setValueM3(ratingsL[2]),
        // setValueM4(ratingsL[3]),
        // setValueM5(ratingsL[4]),
        // setValueM6(ratingsL[5]),
        // setValueM7(ratingsL[6]),
        // setValueM8(ratingsL[7]),
        // console.log('it is done.'),
        
        // console.log('\n'),
        // console.log('it is done more betterer.'),
    //   )
    // )
    // delay(5000).then(
    //   // console.log('OCVC_D_ratingsL - '),
    //   // console.log(ratingsL),
    //   setValueM1(ratingsL[0]),
    //   setValueM2(ratingsL[1]),
    //   setValueM3(ratingsL[2]),
    //   setValueM4(ratingsL[3]),
    //   setValueM5(ratingsL[4]),
    //   setValueM6(ratingsL[5]),
    //   setValueM7(ratingsL[6]),
    //   setValueM8(ratingsL[7]),
    // )
    // console.log()
    // // updateRatingsL(rKey)
    // console.log('ratingsL - ')
    // console.log(ratingsL)


    // if(value!=oldVal){ //may need 3rd variable
    //   setSemiOldVal(oldVal)
    //   setOldVal(value)
    //   if (oldVal==value){
    //     setOldVal(semiOldVal)
    //     console.log()
    //     console.log()
    //     console.log()
    //     console.log('why not?????????')
    //     console.log()
    //     console.log()
        
    //   }
    //   // if (semiOldVal!=value){
    //   //   setOldVal(semiOldVal)
    //   // }
    //   // if (value)
    //   console.log()
    //   console.log()
    //   console.log()
    //   console.log('why?????????')
    //   console.log()
    //   console.log()
    //   console.log()
    // }

    // console.log('OV==V_value - ')
    // console.log(value)
    // console.log()
    // console.log('OV==V_oldVal - ')
    // console.log(oldVal)
    // console.log()
    // console.log('OV==V_semiOldVal - ')
    // console.log(semiOldVal)
    // console.log()
    // console.log(oldVal==value)
    // console.log()

    // if (oldVal==value){
    //   setOldVal(semiOldVal)
    //   console.log()
    //   console.log()
    //   console.log()
    //   console.log('why not?????????')
    //   console.log()
    //   console.log(oldVal==value)
    //   console.log()
    //   console.log()
    //   console.log()
    //   console.log()
      
    // }
    // console.log()
    // console.log('value - ')
    // console.log(value)
    // console.log()
    // console.log('oldVal - ')
    // console.log(oldVal)
    // console.log()
    // console.log('semiOldVal - ')
    // console.log(semiOldVal)
    // console.log()
    // console.log()
    // console.log()
  }

//  let onCollegesValueChange = (value) => {
//   setValueMenu('home')
//   let newArray = [valueM1, valueM2, valueM3, valueM4, valueM5, valueM6, valueM7, valueM8]
//   console.log('newArray - ')
//   console.log(newArray)
//   let rKey = valueT[valueT.findIndex(e => e.value == value)].ratingKey
//   console.log()
//   console.log('rKey - ')
//   console.log(rKey)
//   addRating(rKey, newArray).then(updateRatingsL(rKey))
//   console.log()
//   // updateRatingsL(rKey)
//   console.log('ratingsL - ')
//   console.log(ratingsL)
// }


  setOpenMenuToggle = () => {
    setOpenMenu(true)
    setValue('select')
    setOpen(false)
    setViewedWeights()
  };

  let homeWhite = require('./assets/img/homeIconV2White.png');
  let collegeWhite = require('./assets/img/collegeIconWhite.png');
  let settingsWhite = require('./assets/img/settingsGearWheelWhite.png');
  let hamburgerIcon = require('./assets/img/hamburgerMenuIcon.png');
  let plusIcon = require('./assets/img/plusIcon.png');
  let deleteMenuIcon = require('./assets/img/deleteMenu.png')
  let reloadIcon = require('./assets/img/refresh.png')


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

  let setOpenUpdate = () => {
    
    if (open==false){
      setOpen(true)
      updateColleges('collegeList')
      setColleges(valueT)
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
    // {label: 'Dev Menu', value: 'devMenu', icon: () => <Image source={settingsWhite} style={{height: 25, width: 25}} />},
    
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
  const [weights, setWeights] = useState([valueS1, valueS2, valueS3, valueS4, valueS5, valueS6, valueS7, valueS8])
  const [text, setText] = useState();

  // let ratings = [
  //   // [{rating: valueS1}, {rating: valueS2}, {rating: valueS3}, {rating: valueS4}, {rating: valueS5}, {rating: valueS6}, {rating: valueS7}, {rating: valueS8}],
  //   // [{}]
  // ]; //REUSE DROPDOWNS, JUST SAVE IT AND READ IT WHEN DISPLAYING


  // const sortedRatings = [].concat(ratings)
  //   .sort((a, b) => a.rating > b.rating ? 1 : -1)
  //   .map((item, i) => 
  //       <div key={i}> {item.rating}</div>
  //   );


  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={{backgroundColor: color, position:'absolute', top:0, left:0, width: deviceWidth, height:deviceHeightPart*1.5}}></View>
        <SafeAreaView>
        <View style={{overflow: 'hidden', paddingBottom: 5}}>
          <View style={styles.topMargin}>
            <Text style={{fontSize: 24, fontFamily: ff, marginBottom: 0, fontWeight: 'bold', color: colorOfText, shadowOpacity: 0.5}}>College Ranker</Text>
          </View>
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

            onChangeValue={(changeValue) => {
              onCollegesValueChange(changeValue)
            }}
            closeAfterSelecting = {true}
            showBadgeDot = {false}
            theme = "DARK"
            searchable = {true}
            mode = "BADGE"
            listMode = "MODAL"
            modalAnimationType="slide"

            style={{ width: deviceWidth/2, height: taskbarHeight+10, position: 'absolute', left: 0, top: 0, margin: 5, marginTop: 0}}/>
        </View>
        <View style={{position: 'absolute', top: -deviceHeightPart*3, right: (2*deviceWidth/6)-7.5,}}>{valueMenu=='home' ? (<>
          <View style={{backgroundColor: iconColor, borderWidth: 1, position: 'absolute', top: deviceHeightPart*5.5, right: 0, marginTop: 5, borderRadius: 150, height: taskbarHeight+10, width: iconWidth+10}}></View>
          <TouchableOpacity onPress={addCollegeModal} style={{position: 'absolute', top: deviceHeightPart*5.5, right: 0, margin: 5, marginTop: 10, height: taskbarHeight, width: iconWidth}}>
            <Image source={plusIcon} style={{height: taskbarHeight, width: iconWidth}}/>
          </TouchableOpacity>
          <Modal
            transparent={false}
            visible={modalVisible}
            animationType='slide'
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
                      borderWidth: 1,
                      borderRadius: 10,
                      height: deviceHeightPart*1.5,
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: colorOfText,
                    }}
                    keyboardAppearance='dark'
                    autoCorrect = {false}
                    autoCapitalize = 'words'
                    onChangeText={setText}
                    value={text}
                    placeholder="Enter college name"
                    placeholderTextColor={colorOfText}
                    
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

            onOpen = {() => {
              
            }}

            onChangeValue = {(value) => {
              // setViewedWeights()
              console.log('------BEFORE------')
              console.log('colleges.length - ')
              console.log(colleges.length)
              for (let i = 1; i < colleges.length; i = i + 1){
                console.log()
                console.log('colleges[i].ratingKey - ')
                console.log(colleges[i].ratingKey)
                console.log()
                getRating(colleges[i].ratingKey)
                console.log('ratingsTotals - ')
                console.log(ratingsTotals)
              }
              console.log('------AFTER------')
              console.log()
              console.log()
              // delay(2500).then(setViewedWeights())
              
            }}
            
            closeAfterSelecting={true}
            textStyle={{fontSize: 30, color: colorOfText, shadowOpacity: 0.5}}
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
        
        </View>

          <View style={styles.pages}>

{/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}


          <View>{valueMenu=='devMenu' ? (<>
            <View style={{width: deviceWidth, textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}><Text style={{color: 'white', shadowOpacity: 100, margin: 15, fontSize: 24}}>Welcome to the Dev Menu</Text></View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.devMenuItem} onPress={() => {updateWeights(), console.log(weights)}}><Text style={styles.devMenuItemText}>LOG WEIGHTS</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => {setViewedWeights().then(Alert.alert('Viewed Weights Set'))}} style={styles.devMenuItem}><Text style={styles.devMenuItemText}>setViewedWeights</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => {storeDataJSON('collegeList', initColleges), updateColleges('collegeList'), Alert.alert('All personalized colleges cleared')}} style={styles.devMenuItem}><Text style={styles.devMenuItemText}>resetColleges</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => {console.log(ratingsTotals)}} style={styles.devMenuItem}><Text style={styles.devMenuItemText}>logList</Text></TouchableOpacity>
            
            </View>
{/*<TouchableOpacity style={styles.devMenuItem}><Text style={styles.devMenuItemText}></Text></TouchableOpacity>*/}
          </>) : null}</View>


{/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}


            <View style={{backgroundColor: '', marginTop: 5}}>{valueMenu=='settings' ? (<>


              <View style={{position: 'absolute', top: -deviceHeightPart*2.15, left: deviceWidth/2+10, backgroundColor: iconColor, borderWidth: 1, marginTop: 0, borderRadius: 150, height: taskbarHeight+10, alignItems: 'center', justifyContent: 'center', width: iconWidth+10}}>
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
                  <SafeAreaView style={{backgroundColor: color}}>

                    <View style={{alignItems: 'flex-end', width: deviceWidth}}>
                      <TouchableOpacity style={{margin: 5}} onPress={() => {setDeleteMenuVis(!deleteMenuVis)}}>{/*</TouchableOpacity></SafeAreaView>, Alert.alert('Modal Closed'), console.log('Modal Closed')}}>*/}
                        <View style={{height: deviceHeightPart, width: deviceHeightPart, margin: 2, borderWidth: 1, borderRadius: 5, backgroundColor: iconColor, textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
                          <Text style={{fontSize: deviceHeightPart-10, margin: 0}}>X</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <FlatList 
                      data={valueT.slice(1)}
                      renderItem={({ item, index }) => 
                        <View style={{backgroundColor: sectionBackgroundColor, alignItems: 'center', justifyContent: 'space-between', height: deviceHeightPart*1.5, flexDirection: 'row', marginBottom: 5, width: deviceWidth-10, marginLeft: 5, borderWidth: 1, borderRadius: 15}}>
                          <Text style={{fontSize: 24, marginLeft: 3.5, color: colorOfText, shadowOpacity: 0.5}}>{item.label}</Text>
                          <TouchableOpacity onPress={() => {removeValueCollage(index)}}>
                            <View style={{backgroundColor: 'red', textAlign: 'center', marginRight: 5, alignItems: 'center', justifyContent: 'center', height: deviceHeightPart, width: deviceHeightPart, borderWidth: 1, borderRadius: 25}}>
                              <Text>-</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      }
                    />


                    <View style={{width: deviceWidth, height: deviceHeightPart*22.5}}></View>

                  </SafeAreaView>
                </Modal>

              <ScrollView style={{height: (deviceHeightPart*2)*16}}>

                <View style={{height: deviceHeightPart*2, backgroundColor: sectionBackgroundColor, border: 'gray', marginTop: 5, justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                <View style={{width:(7.3*(deviceWidth))/10}}><Text style={styles.factors}>{factors[0].name}</Text></View>
                  
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
                      dropDownDirection="BOTTOM"

                      style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                  </View>
                </View>

                <View style={{height: deviceHeightPart*2, backgroundColor: sectionBackgroundColor, zIndex: -1, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                  <View style={{width:(7.3*(deviceWidth))/10}}><Text style={styles.factors}>{factors[1].name}</Text></View>
                  
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
                      dropDownDirection="BOTTOM"

                      style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                  </View>
                </View>
              
                <View style={{height: deviceHeightPart*2, backgroundColor: sectionBackgroundColor, zIndex: -2, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                <View style={{width:(7.3*(deviceWidth))/10}}><Text style={styles.factors}>{factors[2].name}</Text></View>
                  
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
                      dropDownDirection="BOTTOM"
                      listMode="SCROLLVIEW"

                      style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                  </View>
                </View>

                <View style={{height: deviceHeightPart*2, backgroundColor: sectionBackgroundColor, zIndex: -3, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                <View style={{width:(7.3*(deviceWidth))/10}}><Text style={styles.factors}>{factors[3].name}</Text></View>
                  
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
                      dropDownDirection="BOTTOM"
                      listMode="SCROLLVIEW"

                      style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                  </View>
                </View>

                <View style={{height: deviceHeightPart*2, backgroundColor: sectionBackgroundColor, zIndex: -4, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                <View style={{width:(7.3*(deviceWidth))/10}}><Text style={styles.factors}>{factors[4].name}</Text></View>
                  
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
                      dropDownDirection="BOTTOM"
                      listMode="SCROLLVIEW"

                      style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                  </View>
                </View>

                <View style={{height: deviceHeightPart*2, backgroundColor: sectionBackgroundColor, zIndex: -5, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                <View style={{width:(7.3*(deviceWidth))/10}}><Text style={styles.factors}>{factors[5].name}</Text></View>
                  
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
                      dropDownDirection="BOTTOM"

                      style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                  </View>
                </View>

                <View style={{height: deviceHeightPart*2, backgroundColor: sectionBackgroundColor, zIndex: -6, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                <View style={{width:(7.3*(deviceWidth))/10}}><Text style={styles.factors}>{factors[6].name}</Text></View>
                  
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
                      dropDownDirection="BOTTOM"

                      style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                  </View>
                </View>

                <View style={{height: deviceHeightPart*2, backgroundColor: sectionBackgroundColor, zIndex: -7, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                <View style={{width:(7.3*(deviceWidth))/10}}><Text style={styles.factors}>{factors[7].name}</Text></View>
                  
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
                {/* <TouchableOpacity style={{backgroundColor: 'red', height: deviceHeightPart, zIndex: -100}} onPress={() => {updateWeights(), console.log(weights)}}><Text>LOG WEIGHTS</Text></TouchableOpacity> */}
                <TouchableOpacity onPress={() => {setNewWeights()}}><View style={{backgroundColor: littleSection, height: deviceHeightPart, width: deviceWidth/3, marginLeft: deviceWidth/3, justifyContent: 'center', alignText: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 15}}><Text style={{color: colorOfText, shadowOpacity: 0.5}}>Save</Text></View></TouchableOpacity>
                <View style={{zIndex: -100000, height: deviceHeightPart*20, justifyContent: 'flex-end',}}></View>
              </ScrollView>
            </>) : null}</View>

{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

            <View>{valueMenu=='myColleges' ? (<>
              {/* <View style={{position: 'absolute', top: -deviceHeightPart*2.15, left: deviceWidth/2+10, backgroundColor: iconColor, borderWidth: 1, marginTop: 0, borderRadius: 150, height: taskbarHeight+10, alignItems: 'center', justifyContent: 'center', width: iconWidth+10}}>
                <TouchableOpacity onPress={() => {reloadRatings()}} style={{height: taskbarHeight, width: iconWidth}}>
                  <Image source={reloadIcon} style={{height: taskbarHeight, width: iconWidth}}/>
                </TouchableOpacity>
              </View> */}
              <FlatList 
                data={valueT.slice(1)}
                renderItem={({ item, index }) => 
                  <View style={{backgroundColor: sectionBackgroundColor, marginBottom: 5, width: deviceWidth-10, marginLeft: 5, borderWidth: 1, borderRadius: 5}}>
                    <Text style={{fontSize: 24, marginLeft: 3.5, color: colorOfText, shadowOpacity: 0.5}}>{item.label}</Text>
                    <View style={{alignItems: 'flex-end', marginTop: -26, marginRight: 5}}><Text style={{fontSize: 24, marginLeft: 3.5, color: colorOfText, shadowOpacity: 0.5}}>{Math.round(ratingsTotals[index]*100)/100}</Text></View>
                    {/* <Text style={{fontSize: 24, marginLeft: 3.5, color: colorOfText, shadowOpacity: 0.5}}>{ratingsTotals[index]}</Text> */}
                    {/* <View style={{alignItems: 'flex-end', justifyContent: 'flex-start', marginTop: -24}}>
                      {/* <TouchableOpacity onPress={() => {getRatings(item.ratingKey)}}><Text>LOG RATING</Text></TouchableOpacity> 
                      <TouchableOpacity onPress={() => {console.log('getRatingsOutput'), console.log(getRating(item.ratingKey))}}><Text style={{marginTop: 10}}>LOG IT</Text></TouchableOpacity>
                      <TouchableOpacity onPress={() => {console.log(ratingsTotals)}}><View><Text style={{marginTop: 10}}>logList</Text></View></TouchableOpacity>

                    </View> */}
                  </View>
                }
                // keyExtractor={(item) => item.key}
              />
              
            </>) : null}</View>

{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

            <View>{valueMenu=='home' ? (<>
              <View style={{}}>{value!='select' ? (<>

                <View style={{height: deviceHeightPart*2, backgroundColor: littleSection, zIndex: -1, border: 'gray', marginTop: 5, justifyContent: 'center', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 15, width: deviceWidth-10, }}>
                  <View><Text style={{fontSize: deviceHeightPart, shadowOpacity: 0.5, color: 'white', fontWeight: 'bold', margin: 5}}>{colleges[colleges.findIndex(e => e.value == value)].label}</Text></View>
                </View>
                <ScrollView style={{height: (deviceHeightPart*2)*16}}>
                  <View style={{height: deviceHeightPart*2, backgroundColor: sectionBackgroundColor, zIndex: -1, border: 'gray', marginTop: 5, justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                  <View style={{width:(7.3*(deviceWidth))/10}}><Text style={styles.factors}>{factors[0].name}</Text></View>
                    
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
                        dropDownDirection="BOTTOM"

                        style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                    </View>
                  </View>

                  <View style={{height: deviceHeightPart*2, backgroundColor: sectionBackgroundColor, zIndex: -2, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                    <View style={{width:(7.3*(deviceWidth))/10}}><Text style={styles.factors}>{factors[1].name}</Text></View>
                    
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
                        dropDownDirection="BOTTOM"

                        style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                    </View>
                  </View>
                
                  <View style={{height: deviceHeightPart*2, backgroundColor: sectionBackgroundColor, zIndex: -3, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                  <View style={{width:(7.3*(deviceWidth))/10}}><Text style={styles.factors}>{factors[2].name}</Text></View>
                    
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
                        dropDownDirection="BOTTOM"

                        style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                    </View>
                  </View>

                  <View style={{height: deviceHeightPart*2, backgroundColor: sectionBackgroundColor, zIndex: -4, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                  <View style={{width:(7.3*(deviceWidth))/10}}><Text style={styles.factors}>{factors[3].name}</Text></View>
                    
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
                        dropDownDirection="BOTTOM"

                        style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                    </View>
                  </View>

                  <View style={{height: deviceHeightPart*2, backgroundColor: sectionBackgroundColor, zIndex: -5, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                  <View style={{width:(7.3*(deviceWidth))/10}}><Text style={styles.factors}>{factors[4].name}</Text></View>
                    
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
                        dropDownDirection="BOTTOM"

                        style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                    </View>
                  </View>

                  <View style={{height: deviceHeightPart*2, backgroundColor: sectionBackgroundColor, zIndex: -6, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                  <View style={{width:(7.3*(deviceWidth))/10}}><Text style={styles.factors}>{factors[5].name}</Text></View>
                    
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
                        dropDownDirection="BOTTOM"

                        style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                    </View>
                  </View>

                  <View style={{height: deviceHeightPart*2, backgroundColor: sectionBackgroundColor, zIndex: -7, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                  <View style={{width:(7.3*(deviceWidth))/10}}><Text style={styles.factors}>{factors[6].name}</Text></View>
                    
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
                        dropDownDirection="BOTTOM"

                        style={{ width: deviceWidth/5, height: taskbarHeight/2, left: 0, top: 4, margin: 5}}/>
                    </View>
                  </View>

                  <View style={{height: deviceHeightPart*2, backgroundColor: sectionBackgroundColor, zIndex: -8, border: 'gray', justifyContent: 'right', marginLeft: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderWidth: 1, borderRadius: 10, width: deviceWidth-10, }}>
                  <View style={{width:(7.3*(deviceWidth))/10}}><Text style={styles.factors}>{factors[7].name}</Text></View>
                    
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
                  {/* <TouchableHighlight onPress={() => setFactors(initFactors)}><Text>RESET FACTORS</Text></TouchableHighlight> */}
                  <View style={{zIndex: -100000, height: deviceHeightPart*25, justifyContent: 'flex-end',}}></View>
                  </ScrollView>
                </>) : null}</View>

              
            </>) : null}</View>
          </View>
 
          {/* <View style={styles.colleges}>
            <View>{value=='madison' ? (<>



            </>) : null}</View>

            <View>{value=='laCrosse' ? (<>



            </>) : null}</View>

            <View>{value=='stevensPoint' ? (<>



            </>) : null}</View>

            <View>{value=='ntc' ? (<>

            </>) : null}</View>
          
          </View> */}
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: color,
    // alignItems: 'center',
  },
  colleges: {
    position: 'absolute',
    top: deviceHeight/4,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    zIndex: -1,
  },
  pages: {
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

    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.7,
    shadowRadius: 3,
    elevation: 5,
  },
  topTaskbar: {
    // flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: deviceHeightPart*2,
    width: deviceWidth,
  },
  factors: {
    fontSize: 24, 
    fontWeight: 'bold', 
    margin: 5,
    color: colorOfText,
    shadowOpacity: 0.5
  },
  devMenuItem: {
    backgroundColor: littleSection,
    width: deviceWidth/2,
    height: deviceHeightPart*2,
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: deviceWidth/16,
    justifyContent: 'center',
    alignText: 'center',
    alignItems: 'center',
    color: colorOfText,
  },
  devMenuItemText: {
    color: colorOfText,
    shadowOpacity: 0.5,
  },
});