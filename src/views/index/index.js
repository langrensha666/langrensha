/*eslint-disable*/
/**
 * @file: 差旅主页
 * @Author: dingxianlei
 * @Date:   2016-06-03
 */

import indexTemp from './index.html';
// import CompTop from '../../components/top/top.js';
// import CompEnlargeimg from '../../components/enlargeimage/enlargeimage.js';
import Swipe from '../../assets/js/swipe.js';
import './index.less';

export default {
    name: 'index',
    template: indexTemp,
    // components: {
    //     CompTop,
    //   CompEnlargeimg
    // },
    data: function () {
        return {
            title: '百度商旅平台',
            page: 'flightmain',
        };
    },
    ready:function(){
      this.carousel();
    },
    methods: {
        carousel(){
          let elem = document.getElementById('carousel');
          let dots = $(".dot span");
          let self = this;
          let slider = new Swipe(elem, {
            disableScroll: true,
            auto:5000,
            continuous: true,
            callback: function (index, element) {
              //如果index > 1,则为插件自动复制的元素,需要手动加入事件绑定
              if(index>1){
                element.onclick = function () {
                  if (index===2) {
                    self.goIntro(2);
                  } else if(index===3) {
                    self.goIntro(1);
                  }
                };
              }
              var pos = slider.getPos();
              if(pos>=2){
                pos-=2;
              }
              if(dots){
                for (let i=0;i<dots.length;i++){
                  dots[i].className = '';
                }
                dots[pos].className='active';
              }
            }
          });
        },
        goIntro(index) {
            this.$route.router.go({
                name: 'handbook',
                query: {
                    type: index
                }
            });
        }
    }
};
