import * as React from 'react';
import { CustomFisrtChildComponent } from '../CustomFisrtChildComponent';
import { CustomSecondChildComponent } from '../CustomSecondChildComponent';

interface IProps {
    message?: string;
}

export class CustomComponent extends React.Component<IProps> {
    private customFisrtChildComponent: CustomFisrtChildComponent;
    private customSecondChildComponent: CustomSecondChildComponent;
    private customContentChilds: React.ReactChild[];

    public constructor(props: IProps) {
        super(props);

        // Init my content component
        this.customContentChilds = [] as React.ReactChild[];

        // Extract specific component for custom injection
        React.Children.forEach(this.props.children, this.getChild);
    }

    public getChild = (child: React.ReactChild, index: number) => {
        const instanceName = (child as any).type.name;  // cast to any is do it to get construtor.name (production env it's not allowed)

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
                <div>
                    <div className="row">
                        {/* header slot here */}
                        {this.customFisrtChildComponent}
                    </div>
                    <div className="row">
                        {/* body slot here */}
                        {this.customSecondChildComponent}
                    </div>
                    <div className="col-md-12 alert alert-warning" role="alert">
                        {this.customContentChilds}
                    </div>
                </div>
            </div>
        );
    }
}
