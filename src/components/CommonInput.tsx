import { Input, InputProps, Typography } from "antd";
import { CSSProperties } from "react";
import { colors } from "../utls/Color";

type CommonInputProps = {
    size?: 'large' | 'middle' | 'small';
    label: string;
    errorText?: string;
    readonly handleChangeText: (text: string) => void;
    readonly marginTop?: number;
    readonly containerStyle?: CSSProperties;
    readonly borderRadius?: number;
}

function CommonInput(props: (InputProps & CommonInputProps)): JSX.Element {
    const { label, size, errorText, borderRadius = 0 } = props;
    return (
        <div style={{ marginTop: props.marginTop || 20, ...props.containerStyle }}>
            <label style={{ color: colors.grayColor, fontSize: 14 }}>{label}</label>
            <Input {...props} style={{ marginTop: 4, borderRadius }} size={size}
                onChange={(event) => {
                    props.handleChangeText(event.target.value);
                }}
            />
            {errorText !== null && errorText !== undefined && errorText?.trim?.() !== '' && <Typography.Text type='danger'>{errorText}</Typography.Text>}
        </div>
    )
}

export default CommonInput;