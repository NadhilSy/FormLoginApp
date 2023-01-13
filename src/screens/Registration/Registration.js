import React from "react";
import {TextInput, View, Text, StyleSheet} from "react-native";

const Registration = () => {
    const [name, setName] = React.useState("");

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,//kemungkinan yang bikin naik si stylesheet?
        justifyContent:"center",
        alignItems:"center"
    },
    label:{
        fontSize:16,
        fontWeight:"bold"
    },
    textInput:{
        height: 50,
        fontSize: 25,
        padding: 10,
        borderWidth: 2,
        borderColor: "#BDC3C7"
    }
})

export default Registration;