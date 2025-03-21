import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Width-Percentage
export const wp = (percentage: number): number => {
    return (width * percentage) / 100;
};

// Height-Percentage
export const hp = (percentage: number): number => {
    return (height * percentage) / 100;
};