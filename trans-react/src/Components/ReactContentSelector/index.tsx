import * as React from 'react';

interface IReactContentProps {
    select: string;
    component: React.Component;
}

const handlerExtractComponent = (contentProps: IReactContentProps) => {
    if (contentProps.select == null || contentProps.select === undefined || contentProps.select.length === 0) {
        return contentProps.component.props.children;
    } else {
        const targetComponent = React.Children.toArray(contentProps.component.props.children).filter((child: any) => child.type.name === contentProps.select);

        if (targetComponent.length === 0) {
            return null;
        } else {
            return targetComponent[0] as any;
        }
    }
}

export const ReactContent = ({ select, component }: { select: string, component: React.Component }) => {
    return handlerExtractComponent({ select, component });
}
