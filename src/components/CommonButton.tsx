import { Button, ButtonProps } from "antd";

type CommonButtonProps = {
}

function CommonButton(props: (ButtonProps & CommonButtonProps)): JSX.Element{
    return (
        <div>
            <Button {...props} style={{ borderRadius: 0, fontWeight: '500' }}>{props.children}</Button>
        </div>        
    );
};

export default CommonButton;