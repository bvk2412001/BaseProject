import { AutoComponent } from "../../Common/AutoComponent";

const { ccclass, property } = cc._decorator;

@ccclass
export abstract class ButtonBase extends AutoComponent {
    @property(cc.Button)
    button: cc.Button = null;

    protected start(): void {
        this.OnClick();
    }
    
    protected LoadComponents(): void {
        this.LoadButton();
    }


    protected LoadButton(): void {
        if (this.button != null) return;
        this.button = this.node.getComponent(cc.Button);
        console.warn("Load button", this.node.name);
    }

    protected abstract OnClick(): void
}
