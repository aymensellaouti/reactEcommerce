import React, {Component} from "react";
import SHOP_DATA from "../../Globals/shopData";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

export default class ShopPage extends Component {
    constructor() {
        super();
        this.state = {
            collections:  SHOP_DATA
        }
    }
    render() {
        return (
            <div>
                <h1>Shop Page</h1>
                {this.state.collections.map(
                    ({id, ...collection}) => {
                        return <PreviewCollection key={id} {...collection}></PreviewCollection>
                    }
                )}
            </div>
        );
    }
}
