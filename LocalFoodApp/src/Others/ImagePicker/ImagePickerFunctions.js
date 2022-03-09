import { Platform, PermissionsAndroid } from 'react-native';
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

//Requerimiento de permisos para la camara;
export const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        return false;
      }
    } else return true;
};

//Escoge la imagen de la libreria
export const chooseFile = (setFilePath, setOpc) => {
    let options = {
        mediaType: 'photo',
        maxWidth: 1280,
        maxHeight: 720,
        quality: 1,
    };
    launchImageLibrary(options, (response) => {
        if (response.didCancel) {
            alert('User cancelled camera picker');
            return;
        } else if (response.errorCode == 'camera_unavailable') {
            alert('Camera not available on device');
            return;
        } else if (response.errorCode == 'permission') {
            alert('Permission not satisfied');
            return;
        } else if (response.errorCode == 'others') {
            alert(response.errorMessage);
            return;
        }
        setOpc(1);
        setFilePath(response.assets[0]);
    });
};