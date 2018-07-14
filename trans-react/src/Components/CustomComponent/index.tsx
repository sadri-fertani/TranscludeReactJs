import * as React from 'react';
import { CustomFisrtChildComponent } from '../CustomFisrtChildComponent';
import { CustomSecondChildComponent } from '../CustomSecondChildComponent';

interface IProps {
    message?: string;
    // children?: any[]; // React.ReactChild[];
}

export class CustomComponent extends React.Component<IProps> {
    private comp1: CustomFisrtChildComponent;
    private comp2: CustomSecondChildComponent;

    public constructor(props: IProps) {
        super(props);

        React.Children.forEach(this.props.children, this.getChild);

        // const children = React.Children.toArray(this.props.children);
        // }
    }

    public getChild = (child: React.ReactChild, index: number) => {
        const instanceName = (child as any).type.name;

        switch (instanceName) {
            case CustomFisrtChildComponent.name:
                this.comp1 = this.props.children![index] as CustomFisrtChildComponent;
                break;
            case CustomSecondChildComponent.name:
                this.comp2 = this.props.children![index] as CustomSecondChildComponent;
                break;
        }
    }

    public render() {
        return (
            <div className="jumbotron">
                <h1>Test is strating...</h1>
                <div className="row">
                    <div className="col-md-4">left top</div>
                    <div className="col-md-4">{this.comp1}</div>
                    <div className="col-md-4">right top</div>
                </div>
                <div className="row">
                    <div className="col-md-4">left bottom</div>
                    <div className="col-md-4">middle bottom</div>
                    <div className="col-md-4">{this.comp2}</div>
                </div>
            </div>
        );
    }
}
