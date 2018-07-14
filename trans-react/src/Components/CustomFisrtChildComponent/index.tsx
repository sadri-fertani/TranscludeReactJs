import * as React from 'react';

interface IProps {
    message?: string;
}

export class CustomFisrtChildComponent extends React.Component<IProps> {
    public constructor(props: IProps) {
        super(props);
        
        // We can remove the binding, but I prefer to keep it for the potential futur use ;-)
        this.handlerClick = this.handlerClick.bind(this);
    }
    public render() {
        return (
            <button
                onClick={this.handlerClick}
                type="button"
                className="btn btn-primary">
                CustomFisrtChildComponent -{this.props.message}-
            </button>
        );
    }

    private handlerClick = (e: any) => {
        alert("-----CustomFisrtChildComponent-----");
    }
}
