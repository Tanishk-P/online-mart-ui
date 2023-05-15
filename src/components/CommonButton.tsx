import { Button, ButtonProps } from "antd";

type CommonButtonProps = {
    backgroundColor? : string
}

function CommonButton(props: (ButtonProps & CommonButtonProps)): JSX.Element{
    return (
        <div>
            <Button {...props} style={{ borderRadius: 0, fontWeight: '500', backgroundColor: props.backgroundColor }}>{props.children}</Button>
        </div>        
    );
};

export default CommonButton;