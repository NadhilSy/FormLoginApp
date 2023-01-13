import React from "react";
import {TextInput, View, Text, StyleSheet} from "react-native";
import FormInput from "../../components/FormInput/FormInput";

const Registration = () => {
    const [name, setName] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [phone,setPhone] = React.useState("");
    const [website, setWebsite] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [role, setRole] = React.useState("");

    return(
        <View style={styles.container}>
            {/*<Text style={styles.label}>Name</Text>*/}
            {/*<TextInput*/}
            {/*    style={styles.textInput}*/}
            {/*    placeholder="Enter your name"*/}
            {/*    value={name}*/}
            {/*    onChangeText={setName}/>*/}
            <FormInput
                label="Name"
                placeholder="Enter your name"
                value={name}
                onChange={setName}
            />
            <FormInput
                label="Address"
                placeholder="Enter your address"
                value={address}
                onChange={setAddress}
            />
            <FormInput
                label="Phone"
                placeholder="Enter your phone"
                value={phone}
                onChange={setPhone}
                type="phone-pad"
            />
            <FormInput
                label="Website"
                placeholder="Enter your website"
                value={website}
                onChange={setWebsite}
                type="url"
            />
            <FormInput
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChange={setEmail}
                type="email-address"
            />
            <FormInput
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChange={setPassword}
                // type="visible-password"
                isPassword={true}
            />
            <FormInput
                label="Role"
                placeholder="Enter your role"
                value={role}
                onChange={setRole}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,//kemungkinan yang bikin naik si stylesheet?
        justifyContent:"center",
        alignItems:"flex-start"
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 50
    }
})



export default Registration;