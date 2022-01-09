import React from 'react'
import {Text, View, Image, Falsy,} from  'react-native'

export default function CategoryListItem(props){
    return<View>
        <Text> Chao ban day la danh sach loai san pham</Text>
    </View>
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent: 'center',,
    }
});