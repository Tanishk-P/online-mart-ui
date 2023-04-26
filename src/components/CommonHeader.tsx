import { Typography } from "antd";
import { TextProps } from "antd/es/typography/Text";
import { colors } from "../utls/Color";

type CommonHeaderProps = {
    title: string;
    level: 1 | 2 | 3 | 4 | 5;
}

const { Title } = Typography;


function CommonHeader(props: (TextProps & CommonHeaderProps)): JSX.Element{
    const { title, level } = props;
    return(
        <>
            <Title level={level} style={{ color : colors.grayColor}}>{title}</Title>
        </>
    );
}

export default CommonHeader;