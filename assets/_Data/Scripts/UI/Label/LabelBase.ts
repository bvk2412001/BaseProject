import { AutoComponent } from "../../Common/AutoComponent";

const { ccclass, property } = cc._decorator;

@ccclass
export abstract class LabelBase extends AutoComponent {
    @property(cc.Label)
    label: cc.Label = null;

    protected start(): void {

    }

    protected LoadComponents(): void {
        this.LoadLabel();
    }


    protected LoadLabel(): void {
        if (this.label != null) return;
        this.label = this.node.getComponent(cc.Label);
        console.warn("Load label", this.node.name);
    }

    protected abstract SetValue(value: string): void

}
