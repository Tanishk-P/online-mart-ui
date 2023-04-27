import { Typography } from "antd";
import { TextProps } from "antd/es/typography/Text";
import { colors } from "../utls/Color";

type CommonHeaderProps = {
    title: string;
    level: 1 | 2 | 3 | 4 | 5;
    color?: string;
    margin?: string;
    padding?: string;
    width?: string;
}

const { Title } = Typography;


function CommonHeader(props: (TextProps & CommonHeaderProps)): JSX.Element{
    const { title, level, color = colors.grayColor, margin, padding, width } = props;
    return(
        <>
            <Title level={level} style={{ color : color, margin: margin, padding: padding, width: width}}>{title}</Title>
        </>
    );
}

export default CommonHeader;