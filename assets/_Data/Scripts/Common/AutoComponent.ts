const { ccclass, property } = cc._decorator;

@ccclass
export abstract class AutoComponent extends cc.Component {
    protected resetInEditor(): void {
        this.LoadComponents();
    }

    protected onLoad(): void {
        this.LoadComponents()
    }

    protected LoadComponents(): void {

    }

}
