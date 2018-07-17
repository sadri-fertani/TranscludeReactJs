# TranscludeReactJs
Try to use transclude approche with ReactJs

## Objectif
> Transclusion Slot Selector

``` HTML
<CustomComponent props...>
    <CustomFisrtChildComponent props... />
    <CustomSecondChildComponent props... />
    ...
</CustomComponent>
```

## First choice

``` HTML
<div className="jumbotron">
    <fieldset>
        <legend>Test is strating: {this.props.message} ...</legend>
        <div>
            <div className="row">
                <ReactContent select="CustomFisrtChildComponent" component={this} />
            </div>
            <div className="row">
                <ReactContent select="CustomSecondChildComponent" component={this} />
            </div>
            <div className="row">
                <ReactContent component={this} />
            </div>
        </div>
    </fieldset>
</div>
```

``` TypeScript
...
interface IReactContentProps {
    select: string;
    component: React.Component;
}

const handlerExtractComponent = (contentProps: IReactContentProps) => {
    const targetComponent = React.Children.toArray(contentProps.component.props.children).filter((child: any) => child.type.name === contentProps.select);

    switch (targetComponent.length) {
        case 0:
            return null;
        case 1:
            return targetComponent[0] as any;
        default:
            const customContentChilds: React.ReactChild[] = [] as React.ReactChild[];
            targetComponent.forEach(child => customContentChilds.push(child));

            return customContentChilds;
    }
}

export const ReactContent = ({ select, component }: { select: string, component: React.Component }) => {
    return handlerExtractComponent({ select, component });
}

```

## Second choice
### Changements

``` TypeScript
... export class CustomComponent extends CustomComponent {
    ...
}
...
<ReactJSContent extract="CustomFisrtChildComponent" />
...
``` 

### CustomComponent
``` TypeScript
import * as React from "react";
import { ReactContent } from "../ReactContentSelector";

export default abstract class CustomComponent extends React.Component {
    public ReactJSContent = ({ extract }: { extract: string }) => {
        return ReactContent({ select: extract, component: this });
    }
}
```