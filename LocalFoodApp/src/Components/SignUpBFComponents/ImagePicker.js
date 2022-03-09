import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { chooseFile, requestCameraPermission } from '../../Others/ImagePicker/ImagePickerFunctions';


export const ImagePicker = ({filePath, setFilePath}) => {
    const [opc, setOpc] = useState(0.3);
    return (
        <View style={styles.ViewStyle}>
            <TouchableOpacity onPress={()=>{
                if(requestCameraPermission())
                {
                    chooseFile(setFilePath, setOpc)
                }
            }}>
                <Image
                source={{uri: filePath.uri}}
                style={{
                    width: '100%',
                    height: '90%',
                    margin: 5,
                    borderRadius: 20,
                    opacity: opc,
                    backgroundColor: '#f5faf7'
                }}
                />
                <Text style={styles.Text}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    ViewStyle:{
        width: '100%',
        height: 200,
        marginTop: '2%',
        marginBottom: '2%',
    },
    Text:{
        position: 'absolute',
        fontSize: 120,
        alignSelf: 'center',
        color: 'green',
        fontWeight: '200',
    }
  });