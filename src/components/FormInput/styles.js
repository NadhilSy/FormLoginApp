import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        // flex:1,//kemungkinan yang bikin naik si stylesheet?
        // justifyContent:"center",
        // alignItems:"center"
        margin:10
    },
    label:{
        fontSize:16,
        fontWeight:"bold"
    },
    textInput:{
        height: 45,
        width:300,
        fontSize: 15,
        padding: 10,
        borderWidth: 2,
        borderColor: "#BDC3C7"
    }
})

export default styles