import beginTem from './begin.html';
import './begin.less';

export default{
    name: "begin" ,
    template : beginTem,
    data() {
        return {
            tit : '天黑请闭眼...',
            btn: '下一步',
        }
    },
    methods: {
        goNext(){
            this.$route.router.go({
                name: 'home'
            })
        }
    }
}