import Rv from './Rv';

export default {
    render(com, props, dom){
        let rv = new Rv(com, props, dom);
        rv.render();
    }
}