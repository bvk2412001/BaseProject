import { AutoComponent } from "../Common/AutoComponent";
import NodeLogicModel from "./NodeLogicModel";
import NodeLogicService from "./NodeLogicService";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NodeLogicCtrl extends AutoComponent {
    @property(NodeLogicService)
    nodeLogicService: NodeLogicService = null;

    @property(NodeLogicModel)
    model: NodeLogicModel = null;

    protected LoadComponents(): void {
        this.LoadNodeLogicService();
        this.LoadModel();
    }

    protected LoadNodeLogicService(): void {
        if (this.nodeLogicService != null) return;
        this.nodeLogicService = this.node.getChildByName("Service").getComponent(NodeLogicService);
    }


    protected LoadModel(): void {
        if (this.model != null) return;
        this.model = this.node.getChildByName("Model").getComponent(NodeLogicModel);
    }

}
