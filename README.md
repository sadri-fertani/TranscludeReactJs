# TranscludeReactJs
Try to use transclude approche with ReactJs

## Objectif
> Transclusion Slot Selector

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