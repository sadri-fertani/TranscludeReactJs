import * as React from 'react';
import { CustomFisrtChildComponent } from '../CustomFisrtChildComponent';
import { CustomSecondChildComponent } from '../CustomSecondChildComponent';
import { ReactContent } from '../ReactContentSelector';

interface IProps {
    message?: string;
}

export class CustomComponent extends React.Component<IProps> {
    
    public constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <div className="jumbotron">
                <h1>Test is strating: {this.props.message} ...</h1>
                <div>
                    <div className="row">
                        <ReactContent select={CustomFisrtChildComponent.name} component={this} />
                    </div>
                    <div className="row">
                        <ReactContent select={CustomSecondChildComponent.name} component={this} />
                    </div>
                    <div className="col-md-12 alert alert-warning" role="alert">
                        <ReactContent component={this} />
                    </div>
                </div>
            </div>
        );
    }
}
