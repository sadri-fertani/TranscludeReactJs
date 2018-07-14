import * as React from 'react';
import { CustomFisrtChildComponent } from '../CustomFisrtChildComponent';
import { CustomSecondChildComponent } from '../CustomSecondChildComponent';

interface IProps {
    message?: string;
}

export class CustomComponent extends React.Component<IProps> {
    private customFisrtChildComponent: CustomFisrtChildComponent;
    private customSecondChildComponent: CustomSecondChildComponent;
    private customContentChilds: any[];

    public constructor(props: IProps) {
        super(props);

        this.customContentChilds = [] as any[];
        React.Children.forEach(this.props.children, this.getChild);
    }

    public getChild = (child: React.ReactChild, index: number) => {
        const instanceName = (child as any).type.name;

        switch (instanceName) {
            case CustomFisrtChildComponent.name:
                this.customFisrtChildComponent = this.props.children![index] as CustomFisrtChildComponent;
                break;
            case CustomSecondChildComponent.name:
                this.customSecondChildComponent = this.props.children![index] as CustomSecondChildComponent;
                break;
            default:
                this.customContentChilds.push(child);
                break;
        }
    }

    public render() {
        return (
            <div className="jumbotron">
                <h1>Test is strating: {this.props.message} ...</h1>
                <div className="row">
                    <div className="col-md-4">left top</div>
                    <div className="col-md-4">{this.customFisrtChildComponent}</div>
                    <div className="col-md-4">right top</div>
                </div>
                <div className="row">
                    <div className="col-md-4">{this.customSecondChildComponent}</div>
                    <div className="col-md-4">middle bottom</div>
                    <div className="col-md-4">right bottom</div>
                </div>
                <div className="row">
                    <div className="col-md-12 alert alert-warning" role="alert">
                        {this.customContentChilds}
                    </div>
                </div>
            </div>
        );
    }
}
