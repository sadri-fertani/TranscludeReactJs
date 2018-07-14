import * as React from 'react';

export class CustomSecondChildComponent extends React.Component {
    public constructor(props: object = {} as object) {
        super(props);

        this.handlerClick = this.handlerClick.bind(this);
    }
    public render() {
        return (
            <button
                onClick={this.handlerClick}
                type="button"
                className="btn btn-primary">
                CustomSecondChildComponent
            </button>
        );
    }

    private handlerClick = (e: any) => {
        alert("*****CustomSecondChildComponent*****");
    }
}
