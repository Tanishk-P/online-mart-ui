interface IColors {
    primaryColor: string;
    grayColor: string;
    lightGrayColor: string;
    white: string;
    red: string;
    mediumGrayColor: string;
    skyBlue: string;
    darkGray: string;
    lightBlack: string;
    azureBlue: string;
}

export class Colors implements IColors {
    primaryColor: string = '#0b6bbf';
    grayColor: string = '#4c4c4d';
    lightGrayColor: string = '#f5f5f5';
    white: string = '#fcfcfc';
    red: string = 'red';
    mediumGrayColor: string = '#e6e3e3';
    skyBlue: string = '#e6f4ff';
    darkGray: string = '#b8b6b6';
    lightBlack: string = 'rgba(0, 0, 0, 0.5)';
    azureBlue: string = '#00a3e3';
}

export const colors = new Colors();