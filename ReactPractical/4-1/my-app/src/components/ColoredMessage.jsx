export const ColoredMessage = (props) => {

    const { color, children } = props;

    console.log(props);
    const contentStyle = {
      color: color,
      fontSize: "20px"
    }
  // return <p style={contentStyle}>{props.message}</p>;
  return <p style={contentStyle}>{children}</p>;
}