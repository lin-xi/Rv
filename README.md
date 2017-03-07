# Rv

a JSX render library width regex

### Todo Components
```
export default {
    data(){
        let events = [];
        for(let i=0; i< 20; i++){
            events.push({id: i, todo: `JSX编译库-${i}`, state: i%2 ? 1 : 2})
        }
        return {
            events: events,
            dateTime: new Date().toLocaleString().replace(/[\u4e00-\u9fa5]/g, '')
        }
    },
    created(){

    },
    mounted(){

    },
    render(){
        return `
            <div class="container">
                <h2>{this.dateTime} - todo</h2>
                <ul class="todo-items">
                    {
                        if(this.events.length > 0){
                            this.events.map(item => {
                                if(item.state == 2){
                                    return <li class='todo-item'><input type="checkbox"></input><span>{item.todo}</span></li>
                                } else {
                                    return <li class='todo-item completed'><input type="checkbox" checked disabled></input><span>{item.todo}</span></li>
                                }
                            })
                        } else if(this.events.length == 0){
                            return '暂无数据';
                        }
                    }
                </ul>
            </div>
        `
    },
    methods: {
        itemClick(e){

        }
    }
}
```


```
import Todo from './components/Todo';
let dom = document.querySelector('#app');

Rv.render(Todo, {}, dom);
```


just for fun!

please don't use in production, or you'll be fired!