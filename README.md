# TranscludeReactJs
Try to use transclude approche with ReactJs

## Objectif
> Transclusion Slot Selector

``` HTML
<CustomComponent props...>
    <CustomFisrtChildComponent props... />
    <CustomSecondChildComponent props... />
</CustomComponent>
```

``` HTML
<div className="jumbotron">
    <h1>Test is strating: {this.props.message} ...</h1>
    <div>
        <div className="row">
            <ReactContent select={CustomFisrtChildComponent.name} component={this} />
        </div>
        <div className="row">
            <ReactContent select={CustomSecondChildComponent.name} component={this} />
        </div>
    </div>
</div>
```