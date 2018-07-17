import * as React from 'react';

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
