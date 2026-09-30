import Component from '@glimmer/component';
import {action} from '@ember/object';
export default class Demo extends Component {
    get content(){
        return this.args.content;
    }

    @action
    func(){
        console.log(this.content);
    }

    
}