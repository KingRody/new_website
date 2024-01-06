import { render } from "storyblok-rich-text-react-renderer";
import { Box } from "@kuma-ui/core";
import Button from "./Button";
import Quote from "./Quote";

const RichText = ({ content, ...props }) => (
  <Box {...props}>
    {render(content, {
      blokResolvers: {
        ["button"]: (props) => (
          <Button
            variant={+props.is_primary ? "primary" : "secondary"}
            {...props}
          >
            {props.label}
          </Button>
        ),
        ["quote"]: (props) => (
          <Quote
            content={props.content}
            person_name={props.person_name}
            person_position={props.person_position}
          />
        ),
      },
    })}
  </Box>
);

export default RichText;
