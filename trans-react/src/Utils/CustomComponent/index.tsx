import * as React from "react";
import { ReactContent } from "../ReactContentSelector";

export default abstract class CustomComponent extends React.Component {
    public ReactJSContent = ({ extract }: { extract: string }) => {
        return ReactContent({ select: extract, component: this });
    }
}
