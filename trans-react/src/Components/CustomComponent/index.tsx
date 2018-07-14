import * as React from 'react';

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
                <h1>Test is strating...</h1>
                <div className="row">
                    <div className="col-md-4">left top</div>
                    <div className="col-md-4">middle top</div>
                    <div className="col-md-4">right top</div>
                </div>
                <div className="row">
                    <div className="col-md-4">left bottom</div>
                    <div className="col-md-4">middle bottom</div>
                    <div className="col-md-4">right bottom</div>
                </div>
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
