# TranscludeReactJs
Try to use transclude approche with ReactJs

## Objectif
> Transclusion

``` HTML
<CustomComponent props...>
    <CustomFisrtChildComponent props... />
    <CustomSecondChildComponent props... />
    Content
</CustomComponent>
```

``` HTML
<div className="jumbotron">
    <h1>Test is strating: {this.props.message} ...</h1>
    <div>
        <div className="row">
            {this.customFisrtChildComponent}
        </div>
        <div className="row">
            {this.customSecondChildComponent}
        </div>
        <div className="col-md-12 alert alert-warning" role="alert">
            {this.customContentChilds}
        </div>
    </div>
</div>
```

``` TypeScript
...
private customFisrtChildComponent: CustomFisrtChildComponent;
private customSecondChildComponent: CustomSecondChildComponent;
private customContentChilds: React.ReactChild[];
...
public constructor(props: IProps) {
    ... 
    // Init my content component
    this.customContentChilds = [] as React.ReactChild[];
    
    // Extract specific component for custom injection
    React.Children.forEach(this.props.children, this.getChild);
    ...
}
...
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

```