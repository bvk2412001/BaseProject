import { AutoComponent } from "../Common/AutoComponent";
import NodeLogicCtrl from "./NodeLogicCtrl";



const { ccclass, property } = cc._decorator;

@ccclass
export default class NodeLogicAbstract extends AutoComponent {
    @property(cc.Node)
    nodeLogicCrtl: cc.Node = null;


    public GetNodeLogicCtrl(): NodeLogicCtrl {
        return this.nodeLogicCrtl.getComponent(NodeLogicCtrl);
    }

    protected LoadComponents(): void {
        this.LoadNodeLogicCrtl();
    }

    protected LoadNodeLogicCrtl(): void {
        if (this.nodeLogicCrtl != null) return;
        this.nodeLogicCrtl = this.node.parent;
    }
}
