import * as React from 'react';

export class CustomFisrtChildComponent extends React.Component {
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
                CustomFisrtChildComponent
            </button>
        );
    }

    private handlerClick = (e: any) => {
        alert("-----CustomFisrtChildComponent-----");
    }
}
