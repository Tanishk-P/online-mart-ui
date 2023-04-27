import { Typography } from "antd";
import { TextProps } from "antd/es/typography/Text";
import { colors } from "../utls/Color";

type CommonHeaderProps = {
    title: string;
    level: 1 | 2 | 3 | 4 | 5;
    color?: string;
    margin?: string;
    padding?: string;
}

const { Title } = Typography;


function CommonHeader(props: (TextProps & CommonHeaderProps)): JSX.Element{
    const { title, level, color = colors.grayColor, margin, padding } = props;
    return(
        <>
            <Title level={level} style={{ color : color, margin: margin, padding: padding}}>{title}</Title>
        </>
    );
}

export default CommonHeader;