import React, {Fragment, Component} from 'react';
import {
    YellowBox,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  Linking,
  Share,
  Platform,
  Alert
} from 'react-native';

import {getInset} from 'react-native-safe-area-view'
const base64 = require('base-64');
import { SkypeIndicator } from 'react-native-indicators';
import Global from '../utils/Global/Global'

YellowBox.ignoreWarnings(["Warning:"]);

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
var menu_bar_height = 50;
var safearea_height = deviceHeight - getInset('top') - getInset('bottom');
var main_view_height = Platform.OS == "ios" ? safearea_height - menu_bar_height : safearea_height - menu_bar_height - StatusBar.currentHeight;

export default class PendingVisit extends Component {
    static navigationOptions = {
        header: null,
        headerBackTitle: null,
	};

    constructor(props){
		super(props);

		this.state = {

            showIndicator: false,

            json_array: []
		}
    }

    async UNSAFE_componentWillMount() {
        this.setState({showIndicator: true})
        await fetch(Global.base_url + '/visitproxy?userName=' + Global.user_name + '&caseNumber=-1&visitStatus=P', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + base64.encode(Global.user_name + ":" + Global.password)
            }
        })
        .then(response => response.json())
        .then(async data => {
            var json_array = data;
            for(i = 0; i < json_array.length; i ++) {
                json_array[i]["clicked"] = false;
            }
            this.setState({
                json_array: json_array
            });
        })
        .catch(function(error) {
            Alert.alert('Warning!', error.message);
        });
        this.setState({showIndicator: false})
    }

    select_right_menu = (index) => {
        var json_array = this.state.json_array;
        json_array[index].clicked = !json_array[index].clicked;
        this.setState({
            json_array: json_array
        });
    }

    delete_alert = async(index) => {
        var json_array = this.state.json_array;
        json_array[index].clicked = !json_array[index].clicked;
        this.setState({
            json_array: json_array
        });
        Alert.alert('Notice!', 'Do you really delete this item?',
        [
            {text: 'Cancel', onPress: null},
            {text: 'OK', onPress: () => this.delete_pending(index)},
        ],
        { cancelable: true })
    };

    delete_pending = async(index) => {
        var item = this.state.json_array[index];

        this.setState({showIndicator: true})
        await fetch(Global.base_url + '/visit/' + item.id)
        .then(response => response.json())
        .then(async data => {
            var json_array = this.state.json_array;
            json_array.splice(index, 1);
            this.setState({
                json_array: json_array
            });
        })
        .catch(function(error) {
            Alert.alert('Warning!', "Netework error");
        });
        this.setState({showIndicator: false})
    }


    render() {

        return (
        <SafeAreaView style = {styles.container}>
        {
            this.state.showIndicator &&
            <View style = {{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', opacity: 0.3, zIndex: 100}}>
                <View style = {{flex: 1}}>
                    <SkypeIndicator color = '#ffffff' />
                </View>
            </View>
        }
            <View style = {styles.menu_bar}>
                <View style = {{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate("Home")}>
                        <Image style = {{width: 20, height: 20}} resizeMode = {'contain'} source={require('../assets/images/menu_back_arrow.png')}/>
                    </TouchableOpacity>
                </View>
                <View style = {{width: '60%', height: '100%', justifyContent: 'center'}}>
                    <Text style = {{fontSize: 18, color: '#ffffff'}}>Pending Visits</Text>
                </View>
                <View style = {{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate("Home")}>
                        <Image style = {{width: 30, height: 30}} resizeMode = {'contain'} source={require('../assets/images/right_home.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {{width: '100%', height: main_view_height, alignItems: 'center'}}>
                <ScrollView style = {{width: '90%'}} showsVerticalScrollIndicator = {false}>
                {
                    this.state.json_array.map((item, index) => 
                    <View key = {index} style = {styles.item_view}>
                        <View style = {{width: '100%', height: '50%', flexDirection: 'row'}}>
                            <View style = {styles.item_text_view}>
                                <Text style = {styles.item_text}>{item.visitDate}</Text>
                            </View>
                            <View style = {styles.item_icon_view}>
                                <TouchableOpacity onPress = {() => this.select_right_menu(index)}>
                                    <Image style = {{width: 20, height: 20}} resizeMode = {'contain'} source={require('../assets/images/pending_lab_menu_right.png')}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style = {{width: '100%', height: '50%', flexDirection: 'row'}}>
                            <View style = {styles.item_text_view}>
                                <Text style = {styles.item_text}>{item.doctorName}</Text>
                            </View>
                            <View style = {styles.item_icon_view}>
                                <View style = {[{width: 20, height: 20, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}, item.visitType == "P" ? {backgroundColor: '#1c88e5'} : {backgroundColor: '#f7a722'}]} >
                                    <Text style = {{fontSize: 16, color: '#ffffff'}}>{item.visitType}</Text>
                                </View>
                            </View>
                        </View>
                        {
                            item.clicked &&
                            <TouchableOpacity style = {[styles.right_menu_view, {zIndex: 1000-index}]} onPress = {() => this.delete_alert(index)}>
                                <Text style = {styles.right_menu_text}>Delete</Text>
                            </TouchableOpacity>
                        }
                    </View>
                    )
                }
                </ScrollView>
            </View>
            
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        // alignItems: 'center'
    },
    menu_bar: {
        width: '100%',
        height: menu_bar_height,
        backgroundColor: '#445774',
        flexDirection: 'row'
    },
    item_view: {
        width: '100%', 
        height: 80, 
        marginTop: 20,
        borderColor: '#c0c0c0',
        borderWidth: 1
    },
    item_text_view: {
        width: '70%',
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 10
    },
    item_text: {
        fontSize: 16,
        color: '#000000'
    },
    item_icon_view: {
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 10
    },
    right_menu_view: {
        width: 150,
        height: 40,
        position: 'absolute',
        top: 40,
        right: 0,
        borderWidth: 1,
        borderColor: '#c0c0c0',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        paddingLeft: 10
    },
    
    right_menu_text: {
        fontSize: 14,
        color: '#000000'
    },
})