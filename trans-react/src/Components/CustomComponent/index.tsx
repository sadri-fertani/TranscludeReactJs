import * as React from 'react';
import { ReactContent } from '../../Utils/ReactContentSelector';

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
        );
    }
}
