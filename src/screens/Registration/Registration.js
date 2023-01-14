import React from "react";
import {Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform} from "react-native";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";


const Registration = () => {
    const [name, setName] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [phone,setPhone] = React.useState("");
    const [website, setWebsite] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [role, setRole] = React.useState("");

    return(
        <KeyboardAvoidingView
            behavior={Platforms.OS === "ios" ? "padding" : "height"}
            style={styles.container}>
            <ScrollView contentContainerStyle={styles.formContainer}>
                <Text style={styles.title}>Registration Form</Text>
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



            </ScrollView>
            <Button
                onPress={()=>{}}
                text="Register"
            />

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,//kemungkinan yang bikin naik si stylesheet?
        justifyContent:"center",
    },
    formContainer:{
        paddingHorizontal:20,
        paddingTop:20
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 50
    }
})



export default Registration;