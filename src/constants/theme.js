import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

export const COLORS = {
    primary: "#455A65",
    secondary: '#1E90FF',
    accent: '#3498db',
    
    success: '#00C851',
    error: '#ff4444',

    black: "#171717",
    white: "#FFFFFF",
    background: "#455A65"
}


export const SIZES = {
    base: 10,
    width,
    height
}